import React from 'react';

export default function CartSummaryItem(items) {
  return (
    <div className="card mb-4 shadow-lg mb-2 mt-2 shadow-lg col-10 d-flex justify-content-center" id={items.productId}>
      <div className="row no-gutters d-flex flex-wrap">
        <div className="col-lg mb-2">
          <img src={items.src} className="card-image mx-auto d-block"></img>
        </div>
        <div className="col-lg details">
          <h4 className="name">{items.name}</h4>
          <p className="text text-muted price">${(items.price / 100).toFixed(2)}</p>
          <p className="description">{items.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
