import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

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

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="container">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className="container">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <CartSummary cartItems={this.state.cart} setView={this.setView} addToCart={this.addToCart} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div className="container">
          <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart} />
        </div>
      );
    }
  }
}
