import React from 'react'
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class ProductItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            inProp: false
        }

        // this.props.getAllProducts()
        this.addToCart = this.addToCart.bind(this)
        this.popUp = this.popUp.bind(this)
        this.clearPopUp = this.clearPopUp.bind(this)
    }
    
    // componentDidMount() {
    //     debugger
    //     this.props.getAllProducts();
    // }

    addToCart(e) {
        e.preventDefault()
        let { sessionId, product } = this.props

        if (sessionId === null) {
            this.props.openModal()
        } else {
            this.setState({quantity: this.state.quantity + 1, inProp: true})
            this.props.createCartItem({customer_id: sessionId, product_id: product.id, quantity: this.state.quantity})
        }

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    clearPopUp() {
        this.setState({ inProp: false })
    }

    popUp() {
            setTimeout(this.clearPopUp, 5000)
            return (
              <ReactCSSTransitionGroup
                transitionName="pop-up"
                // in={this.state.inProp}
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1000}
                // unmountOnExit
              >
                {this.state.inProp && this.props.sessionId ? <div key={1} className="added-cart">Added to cart!</div> : null }
                {/* <div key={1} className="added-cart">Added to cart!</div> */}
              </ReactCSSTransitionGroup>
            );
        
    }

    render(){
        let { product } = this.props
        return (
            <div className="show-div">
                    <img className="show-image" src={product.photoUrl} alt="" />
                <div className="info-div">
                    <div className="name-product">{product.name}</div>
                    <h2 className="price-product">${product.price}</h2>
                    {/* <input onChange={this.update("quantity")} type="text" value={this.state.quantity}/> */}
                    <button 
                        onClick={this.addToCart} 
                        className="signin-submit"
                        >
                        Add to Cart
                    </button>
                    {/* <button onClick={this.clearPopUp}>clear</button> */}
                        {this.popUp()}
                    <div>
                            <label className="label-description">Description</label>
                        <h2 className="description-product">{product.description}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem