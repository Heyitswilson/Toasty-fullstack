import React from 'react'
import { Link } from 'react-router-dom'

class UserCartItem extends React.Component {
    constructor(props) {
        super(props)

        this.showLess = this.showLess.bind(this)
    }


    showLess(content) {
        if (content.length > 20) {
            return (
                <h1 className="public-name">{content.slice(0, 20) + "..."}</h1>
            )
        } else {
            return (
                <h1 className="public-name">{content}</h1>
            )
        }
    }

    render() {
        let { cartItem } = this.props
        let product = cartItem[1].product
        return (
            <div className="cart-item-div">
                <Link className="public-product-links" to={`/products/${product.id}`}>
                    <img className="idx-images" src={product.photoUrl} alt="" />
                    {this.showLess(product.name)}
                    <h3 className="cart-item-price">${product.price}</h3>
                </Link>
                <br/>
                <div className="quantity">
                    <label className="quantity-word">Quantity: </label>
                    <div className="quantity-num">{cartItem[1].quantity}</div>
                </div>
            </div>
        )
    }
}

export default UserCartItem