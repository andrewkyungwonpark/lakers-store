import React from 'react';

export default function CartSummaryItem(items) {
  return (
    <div className="card mb-4 shadow-lg p-3 mb-2 mt-2 shadow-lg col-10 d-flex justify-content-center" id={items.productId}>
      <div className="row no-gutters">
        <div className="col-sm-4">
          <img src={items.src} className="card-image"></img>
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h4 className="title">{items.name}</h4>
            <p className="text text-muted">${(items.price / 100).toFixed(2)}</p>
            <p className="description">{items.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
