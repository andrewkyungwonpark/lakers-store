import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        this.setState(state => ({
          products: products
        }));
      });
  }

  render() {
    return (
      <div className="row card-grid">
        <div className="col-1"></div>
        <div className="product-container col-10 mb-4 d-flex justify-content-around flex-wrap">
          {
            this.state.products.map(product => {
              return (
                <ProductListItem
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  shortDescription={product.shortDescription}
                  productId={product.productId}
                  key={product.productId}
                  setView={this.props.setView}
                />
              );
            })
          }
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

export default ProductList;
