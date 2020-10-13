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
        <div className="cart-total d-flex flex-column">
          <h3 className="mb-3">Your Total is ${((props.price) / 100).toFixed(2)}</h3>
          <button className="btn btn-success" onClick={() => props.setView('checkout', {})}>Place Order</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="back-to-catalog col-12 mb-2 text-muted" onClick={() => props.setView('catalog', {})}>&lt; Back to catalog</div>
        <h2 className="d-flex justify-content-center mt-5 vw-100">Your cart is empty!</h2>
      </>
    );
  }
}
