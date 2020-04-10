import React from 'react'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.cart = this.cart.bind(this)
    }
    cart(){
        return (
            <Link to="/cart_items">
                <button className="test">Cart</button>
            </Link>
        )
    }

    render () {
        return this.props.currentUser ? this.cart() : null
    }
}

export default Cart