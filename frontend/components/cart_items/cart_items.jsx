import React from 'react'
import UserCartItem from './user_cart_items'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
        
        this.uniqueProducts = this.uniqueCartItems.bind(this)
    }

    componentDidMount(){
        this.props.getAllCartItems()
    }

    uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}

        userCartItems.forEach(userCartItem => {
            if (newCartItems[userCartItem.product.id]) {
                newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            } else {
                newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity }
            }
        })
        return newCartItems
    }

    render() {
        let cartItemsObj = Object.entries(this.uniqueCartItems())
        return (
            <div className="buy-page">
                <h1>Your Cart</h1>
                    <div className="cart-div"> 
                        {cartItemsObj.map(cartItem => {
                           return (<UserCartItem
                                cartItem={cartItem}
                           />)}
                        )}
                    </div>
            </div>
        )
    }
}

export default CartItems