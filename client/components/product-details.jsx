import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.formatPrice = this.formatPrice.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(details => this.setState({
        product: details
      }))
      .catch(err => console.error(err));
  }

  formatPrice() {
    if (this.state.product) {
      const rawPrice = this.state.product.price;
      const priceArray = JSON.stringify(rawPrice).split('');
      priceArray.splice(parseInt(priceArray.length, 10) - 2, 0, '.');
      const formatPrice = priceArray.join('');
      return `$${formatPrice}`;
    }
  }

  render() {
    if (!this.state.product) {
      return null;
    }
    const name = this.state.product.name;
    const image = this.state.product.image;
    const longDescription = this.state.product.longDescription;
    const shortDescription = this.state.product.shortDescription;
    return (
      <div className="d-flex justify-content-center w-100">
        <div className="row d-flex justify-content-center mt-5 w-100">
          <div className="col-11 d-flex flex-wrap border border-dark shadow-lg justify-content-center p-3 bg-white">
            <div className="back-to-catalog col-12 mb-2 text-muted" onClick={() => this.props.setView('catalog', {})}>&lt; Back to catalog</div>
            <img src={image} alt={name} className="col-6 mb-3"></img>
            <div className="col-6">
              <h2>{name}</h2>
              <h4 className="text-muted">{this.formatPrice()}</h4>
              <p>{shortDescription}</p>
              <button type="button" className="btn btn-warning" onClick={() => { this.props.addToCart(this.state.product); this.props.setView('catalog', {}); }}>Add to Cart</button>
            </div>
            <div className="row mb-4 mx-3">
              <div>{longDescription}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
