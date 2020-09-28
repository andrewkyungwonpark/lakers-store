import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="header row d-flex align-items-center">
        <div className="col-1"></div>
        <h4 className="title col align-self-center pt-2"><b>$</b>{props.text}</h4>
      </div>
    </header>
  );
}

export default Header;
