import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(results => results.json())
      .then(items => {
        this.setState(state => ({
          cart: this.state.cart.concat(items)
        }));
      });
  }

  addToCart(product) {
    const post = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch('./api/cart', post)
      .then(results => results.json())
      .then(item => {
        this.setState(state => ({
          cart: this.state.cart.concat(item)
        }));
      });
  }

  placeOrder(order) {
    const name = order.name;
    const creditCard = order.creditCard;
    const shippingAddress = order.shippingAddress;

    const post = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        creditCard: creditCard,
        shippingAddress: shippingAddress
      })
    };

    fetch('/api/orders', post)
      .then(results => results.json())
      .then(order => {
        this.setState({
          cart: [],
          view: {
            name: 'catalog',
            params: {}
          }
        });
      });
  }

  calculateTotal() {
    if (this.state.cart.length) {
      let total = 0;
      for (let i = 0; i < this.state.cart.length; i++) {
        total += this.state.cart[i].price;
      }
      return total;
    }
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container vw-100">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className="container vw-100">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <CartSummary cartItems={this.state.cart} setView={this.setView} addToCart={this.addToCart} price={this.calculateTotal()}/>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className="container vw-100">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div className="container vw-100">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <CheckoutForm setView={this.setView} price={this.calculateTotal()} onSubmit={this.placeOrder} />
        </div>
      );
    }
  }
}
