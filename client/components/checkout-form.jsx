import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.changeName = this.changeName.bind(this);
    this.changeCard = this.changeCard.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  changeCard(event) {
    this.setState({
      creditCard: event.target.value
    });
  }

  changeAddress(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    const order = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.onSubmit(order);
    this.setState(({
      name: '',
      creditCard: '',
      shippingAddress: ''
    }));
  }

  render() {
    return (
      <div className="row">
        <div className="mb-3 col-12 d-flex justify-content-between align-items-center">
          <h2 className="white col-sm-8"><span>Checkout</span></h2>
          <h5 className="col-sm-4 d-flex justify-content-end mt-4"><span>REMINDER: Please do NOT use any personal information!</span></h5>
        </div>
        <h4 className="mb-3 col-12 white"><span>Total Amount: ${(this.props.price / 100).toFixed(2)}</span></h4>
        <form className="col-12" onSubmit={this.handleSubmit}>
          <label className="white"><span>Name</span></label>
          <input type="text" value={this.state.name} onChange={this.changeName} className="d-block col-12 mb-3"/>
          <label className="white"><span>Credit Card</span></label>
          <input type="number" value={this.state.creditCard} onChange={this.changeCard} className="d-block col-12 mb-3"/>
          <label className="white"><span>Shipping Address</span></label>
          <input type="textArea" rows="5" value={this.state.shippingAddress} onChange={this.changeAddress} className="d-block col-12 h-50"/>
          <div className="d-flex justify-content-between align-items-center col-12 mt-4">
            <h5 className="ml-1 mt-4 continue-shopping" onClick={() => { this.props.setView('catalog', {}); }}><span>&lt; Continue Shopping</span></h5>
            <button type="submit" className="btn btn-warning mt-4 mb-4 d-flex justify-content-end" disabled={!this.state.name || !this.state.creditCard || !this.state.shippingAddress}>Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
