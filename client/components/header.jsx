import React from 'react';

function Header(props) {
  return (
    <header className="row d-flex align-items-center justify-content-center">
      <h4 className="title col align-items-center pt-2">{props.text}</h4>
      <span className="items mb-0 mr-5">{props.cartItemCount}<i className="fas fa-shopping-cart" onClick={() => props.setView('cart', {})}></i></span>
    </header>
  );
}

export default Header;
