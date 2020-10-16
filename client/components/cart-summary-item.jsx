import React from 'react';

export default function CartSummaryItem(items) {
  return (
    <div className="card mb-4 shadow-lg mt-2 shadow-lg col-lg-10 d-flex justify-content-center" id={items.productId}>
      <div className="row d-flex flex-wrap">
        <img src={items.src} className="card-image d-block"></img>
        <div className="col-md-5 details">
          <h4 className="name mt-4">{items.name}</h4>
          <p className="text text-muted price">${(items.price / 100).toFixed(2)}</p>
          <p className="description">{items.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
