import React from 'react';

function ProductListItem(props) {
  const imageCss = {
    width: '250px',
    objectFit: 'contain',
    objectPosition: '50% 50%',
    maxHeight: '250px'
  };

  const imageSize = {
    width: '400px',
    height: '400x',
    border: '1px solid black',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  };

  const imageContainer = {
    width: 'auto',
    height: '400 px',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const oldPrice = JSON.stringify(props.price);
  const priceArray = oldPrice.split('');
  priceArray.splice((priceArray.length - 2), 0, '.');
  const newPrice = priceArray.join('');

  return (
    <div className="card mt-3" style={imageSize} onClick={() => props.setView('details', { productId: props.productId })}>
      <div className="row" style={imageContainer}>
        <img src={props.image} className="card-img product-detail-img" style={imageCss} id={props.productId}></img>
      </div>
      <div className="product-card-body">
        <h3 className="product-name">{props.name}</h3>
        <h5 className="product-price">${newPrice}</h5>
        <p className="product-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
