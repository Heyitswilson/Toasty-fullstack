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
    this.toTop = this.toTop.bind(this);
    this.checkCart = this.checkCart.bind(this);
  }

  componentDidMount() {
    this.props.getAllCartItems();
  }

  toTop() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  checkCart(currentItem) {
    this.props.userCartItems.forEach(cartItem => {
      let that = this;
      // debugger
      if (cartItem.product.id === currentItem.id) {
        // UPDATE ITEM]
        that.state.quantity += 1
        debugger
        that.props.updateCartItem({quantity: that.state.quantity}, currentItem)
      } else {
        that.props.createCartItem({
          customer_id: that.props.sessionId,
          product_id: currentItem.id,
          quantity: that.state.quantity,
        });
      }
    })
  }

  addToCart(e) {
    e.preventDefault();
    let { sessionId, product } = this.props;
    debugger
    if (sessionId === null) {
      this.props.receiveBuy();
      this.props.openModal();
    } else {
      this.setState({ inProp: true });

      this.checkCart(product)
    }
    this.toTop()
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