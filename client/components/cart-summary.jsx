import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cartItems.length) {
    return (
      <>
        <div className="back-to-catalog white mb-2" onClick={() => props.setView('catalog', {})}><span>&lt; Back to catalog</span></div>
        <h1 className="d-flex justify-content-center"><span>Cart Summary</span></h1>
        <h3 className="mb-3 white d-flex justify-content-center"><span>Your Total is ${((props.price) / 100).toFixed(2)}</span></h3>
        <div className="d-flex justify-content-center flex-column align-items-center">
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
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-warning d-flex mb-5 justify-content-center align-items-center" onClick={() => props.setView('checkout', {})}>Place Order</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="back-to-catalog col-12 mb-2 white" onClick={() => props.setView('catalog', {})}><span>&lt; Back to catalog</span></div>
        <h2 className="d-flex justify-content-center mt-5 vw-100 white"><span>Your cart is empty!</span></h2>
      </>
    );
  }
}
