import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(items) {
  if (items.cartItems) {
    return (
      <>
        <div className="back-to-catalog col-12 mb-2 text-muted" onClick={() => items.setView('catalog', {})}>&lt; Back to catalog</div>
        <h1>Cart Summary</h1>
        {
          items.cartItems.map(item => {
            return (
              <CartSummaryItem
                key={item.productId}
                productId={item.productId}
                src={item.image}
                name={item.name}
                price={item.price}
                shortDescription={item.shortDescription}
              />
            );
          })
        }
      </>
    );
  } else {
    return (
      <>
        <div className="back-to-catalog col-12 mb-2 text-muted" onClick={() => items.setView('catalog', {})}>&lt; Back to catalog</div>
        <h2 className="d-flex justify-content-center mt-5">Your cart is empty!</h2>
      </>
    );
  }
}
