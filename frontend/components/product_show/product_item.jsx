import React from 'react'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions'
// import { receiveCartItem } from '../../actions/cart_item_action'

class ProductItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {quantity: 1}

        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(e) {
        e.preventDefault()
        let { sessionId, product } = this.props

        if (sessionId === null) {
            this.props.openModal()
        }

        this.props.createCartItem({customer_id: sessionId, product_id: product.id, quantity: this.state.quantity})
    }

    // loggedIn() {
    //     return(
    //         <div>
    //             <h1>{this.props.product.name}</h1>
    //             <h2>{this.props.product.description}</h2>
    //             <h3>{this.props.product.price}</h3>
    //             <Link to="/products/:productId/edit">Update Product Listing</Link>
    //         </div>
    //     )
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render(){
        let { product } = this.props
        return (
            <div className="show-div">
                <img className="show-image" src={product.photoUrl} alt="" />
                <div className="info-div">
                    <div className="name-product">{product.name}</div>
                    <h2 className="price-product">${product.price}</h2>
                    <input onChange={this.update("quantity")} type="number" value={this.state.quantity}/>
                    <button onClick={this.addToCart} className="signin-submit">Add to Cart</button>
                    <div>
                            <label className="label-description">Description</label>
                        <h2 className="description-product">{product.description}</h2>
                    </div>
                </div>
                {/* <Link to="/products/:productId/edit">Update Product Listing</Link> */}
            </div>
        )
    }
}

export default ProductItem