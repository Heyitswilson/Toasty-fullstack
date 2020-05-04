import React from 'react'
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";


class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      inProp: false,
    };

    this.addToCart = this.addToCart.bind(this);
    this.popUp = this.popUp.bind(this);
    this.clearPopUp = this.clearPopUp.bind(this);
  }

  componentWillUnmount() {
  }

  addToCart(e) {
    e.preventDefault();
    let { sessionId, product } = this.props;

    if (sessionId === null) {
      this.props.openModal();
    } else {
      this.setState({ inProp: true });
      this.props.createCartItem({
        customer_id: sessionId,
        product_id: product.id,
        quantity: this.state.quantity,
      });
    }
    setTimeout(this.clearPopUp, 5000);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  clearPopUp() {
    this.setState({ inProp: false });
  }

  popUp() {
    
    return (
      <ReactCSSTransitionGroup
        transitionName="pop-up"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={1000}
      >
        {this.state.inProp && this.props.sessionId ? (
          <div key={1} className="added-cart">
            +{this.state.quantity}
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }

  render() {
    let { product } = this.props;
    return (
      <div className="show-div">
        <img className="show-image" src={product.photoUrl} alt="" />
        <div className="info-div">
          <div className="name-product">{product.name}</div>
          <h2 className="price-product">${product.price}</h2>
          {this.popUp()}
          <button onClick={this.addToCart} className="signin-submit">
            Add to Cart
          </button>
          <div>
            <label className="label-description">Description</label>
            <h2 className="description-product">{product.description}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem