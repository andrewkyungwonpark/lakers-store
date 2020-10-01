import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="header row d-flex align-items-center">
        <div className="col-1"></div>
        <h4 className="title col align-self-center pt-2"><b>$</b>{props.text}</h4>
        <span className="items mb-0 mr-5">{props.cartItemCount}<i className="fas fa-shopping-cart"></i></span>
      </div>
    </header>
  );
}

export default Header;
