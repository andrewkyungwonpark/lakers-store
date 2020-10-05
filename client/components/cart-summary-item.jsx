import React from 'react';

export default function CartSummaryItem(items) {
  return (
    <div className="card mb-4 shadow-lg p-3 mb-1" id={items.productId}>
      <div className="row">
        <div className="col-4">
          <img src={items.src} className="card-image"></img>
        </div>
        <div className="col-8">
          <div className="body">
            <h4 className="title">{items.name}</h4>
            <p className="text text-muted">${(items.price / 100).toFixed(2)}</p>
            <p className="description">{items.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
