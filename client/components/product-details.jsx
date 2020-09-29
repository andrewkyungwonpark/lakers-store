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
      <div className="row justify-content-center d-flex">
        <div className="col-11 d-flex flex-wrap border shadow-md justify-content-center p-3">
          <div className="back-to-catalog col-12 mb-2" onClick={() => this.props.setView('catalog', {})}>&lt; Back to catalog</div>
          <img src={image} alt={name} className="col-4 mb-2"></img>
          <div className="col-8">
            <h2>{name}</h2>
            <h4>{this.formatPrice()}</h4>
            <p>{shortDescription}</p>
          </div>
          <div className="col-11">
            <div>{longDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
