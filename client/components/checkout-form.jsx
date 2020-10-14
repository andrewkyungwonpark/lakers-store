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
          <h2 className="white col-sm-8">Your Cart</h2>
          <h5 className="col-sm-4 d-flex justify-content-end mt-4"><span>REMINDER: Please do NOT use any personal information!</span></h5>
        </div>
        <h4 className="mb-3 col-12 white">Total Amount: ${(this.props.price / 100).toFixed(2)}</h4>
        <form className="col-12" onSubmit={this.handleSubmit}>
          <label className="white">Name</label>
          <input type="text" value={this.state.name} onChange={this.changeName} className="d-block col-12 mb-3"/>
          <label className="white">Credit Card</label>
          <input type="number" value={this.state.creditCard} onChange={this.changeCard} className="d-block col-12 mb-3"/>
          <label className="white">Shipping Address</label>
          <input type="textArea" rows="5" value={this.state.shippingAddress} onChange={this.changeAddress} className="d-block col-12 h-50"/>
          <div className="d-flex justify-content-between align-items-center col-12 mt-4">
            <div className="ml-1 mt-4 continue-shopping" onClick={() => { this.props.setView('catalog', {}); }}>&lt; Continue Shopping</div>
            <button type="submit" className="btn btn-warning mt-4 d-flex justify-content-center">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
