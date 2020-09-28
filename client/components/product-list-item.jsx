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

  return (
    <div className="card mt-3" style={imageSize}>
      <div className="row" style={imageContainer}>
        <img src={props.image} className="card-img" style={imageCss}></img>
      </div>
      <div className="product-card-body">
        <h3 className="product-name">{props.name}</h3>
        <h5 className="product-price">${(props.price / 100).toFixed(2)}</h5>
        <p className="product-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
