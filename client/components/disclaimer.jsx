import React from 'react';

export default function Disclaimer(props) {
  return (
    <div className="row justify-content-center shadow-lg align-items-center mt-5">
      <div className="d-flex flex-wrap justify-content-center col-9 p-3 disclaimer">
        <h2 className="col-12 d-flex justify-content-center">DISCLAIMER</h2>
        <p className="col-12 d-flex justify-content-center">This website is merely a demo and no real purchases are actually made. Please do not use any real personal information. Click the button to proceed. Go Lakers!</p>
        <button className="btn btn-warning border border-dark" onClick={() => props.setView('catalog', {})}>Continue</button>
      </div>
    </div>
  );
}
