require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
        select
          "productId",
          "name",
          "price",
          "image",
          "shortDescription"
        from "products"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  const sql = `
        select *
        from "products"
        where "productId" = $1;
  `;

  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return next(new ClientError(`The product id ${productId} does not exist!`, 404));
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  const cartId = req.session.cartId;
  if (!cartId) {
    return res.json([]);
  } else {
    const selectSql = `
    select "c"."cartItemId",
       "c"."price",
       "p"."productId",
       "p"."image",
       "p"."name",
       "p"."shortDescription"
  from "cartItems" as "c"
  join "products" as "p" using ("productId")
 where "c"."cartId" = $1;
    `;
    const params = [cartId];
    db.query(selectSql, params)
      .then(result => res.json(result.rows))
      .catch(error => next(error));
  }
});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
  if (!productId || productId < 1) {
    return next(new ClientError(`The productId ${productId} must be a positive integer!`, 404));
  }
  const selectSql = `
        select "price"
          from "products"
        where "productId" = $1;
  `;
  const params = [productId];
  db.query(selectSql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(`The productId ${productId} does not exist!`, 404);
      } else {
        const queryResult = result.rows[0];
        if (req.session.cartId) {
          const priceAndCart = {
            cartId: req.session.cartId,
            price: queryResult.price
          };
          return priceAndCart;
        } else {
          const insertSql = `
              insert into "carts" ("cartId", "createdAt")
                values (default, default)
              returning "cartId";
    `;
          return db.query(insertSql)
            .then(cartId => {
              const priceAndCart = {
                cartId: cartId.rows[0].cartId,
                price: queryResult.price
              };
              return priceAndCart;
            });
        }
      }
    })
    .then(priceAndCart => {
      const cartId = priceAndCart.cartId;
      req.session.cartId = cartId;
      const priceId = priceAndCart.price;
      const insertSql = `
          insert into "cartItems" ("cartId", "productId", "price")
            values ($1, $2, $3)
          returning "cartItemId";
    `;
      const params = [cartId, productId, priceId];
      return db.query(insertSql, params)
        .then(cartItemId => {
          const params = [cartItemId.rows[0].cartItemId];
          const selectSql = `
      select "c"."cartItemId",
              "c"."price",
              "p"."productId",
              "p"."image",
              "p"."name",
              "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartItemId" = $1;
      `;
          return db.query(selectSql, params)
            .then(results => {
              res.status(201).json(results.rows[0]);
            });
        });
    })
    .catch(error => next(error));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
