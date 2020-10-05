import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cartItems.length) {
    return (
      <>
        <div className="back-to-catalog col-12 mb-2 text-muted" onClick={() => props.setView('catalog', {})}>&lt; Back to catalog</div>
        <h1>Cart Summary</h1>
        {
          props.cartItems.map(item => {
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
        <div className="back-to-catalog col-12 mb-2 text-muted" onClick={() => props.setView('catalog', {})}>&lt; Back to catalog</div>
        <h2 className="d-flex justify-content-center mt-5">Your cart is empty!</h2>
      </>
    );
  }
}
