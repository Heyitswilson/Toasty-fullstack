import React from 'react'
import { Link } from 'react-router-dom'

class CartItems extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            render: [false],
            grandTotal: 0
        }        

        this.uniqueProducts = this.uniqueCartItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.total = this.total.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.filledCart = this.filledCart.bind(this);
        this.toTop = this.toTop.bind(this);
        this.purchase = this.purchase.bind(this);
    }

    purchase() {
      this.props.removeAllItems();

    }

    toTop() {
        $('html,body').scrollTop(0);
    }

    componentDidMount(){
        this.props.getAllCartItems()
        debugger
    }

    deleteItem(cartItem) {
        let deleteableId = cartItem[1].deleteableId

        this.props.deleteCartItem(deleteableId)
    }

    total(cartItem) {
        return cartItem[1].product.price * cartItem[1].quantity
    }

    uniqueCartItems(){
        let { userCartItems } = this.props
        let newCartItems = {}
        userCartItems.forEach(userCartItem => {
            if (newCartItems[userCartItem.product.id]) {
                newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
            } else {
                newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id}
            }
        })
        
        return newCartItems
    }

    showLess(content) {
        if (content.length > 16) {
            return (
                <h1 className="public-name">{content.slice(0, 16) + "..."}</h1>
            )
        } else {
            return (
                <h1 className="public-name">{content}</h1>
            )
        }
    }
    
    emptyCart() {
        return (
            <div>
                <h1 className="header">Your Cart</h1>
                <div className="buy-page">
                    <div className="empty-cart-div">
                        <div className="header">There's nothing in your cart!</div>
                    </div>
                </div>
            </div>
        )
    }

    filledCart(cartItemsObj) {
        let allTotal = 0;
        return (
                <div>
                    <h1 className="header">Your Cart</h1>
    
                    <div className="buy-page">
                        <div className="new-cart-div">
                            {cartItemsObj.map(cartItem => {
                                let product = cartItem[1].product
                                allTotal += this.total(cartItem);
                                return (
                                  <div
                                    key={product.id}
                                    className="cart-item-div"
                                  >
                                    <Link
                                      onClick={() => this.toTop()}
                                      className="public-product-links"
                                      to={`/products/${product.id}`}
                                    >
                                      <img
                                        className="idx-images"
                                        src={product.photoUrl}
                                        alt=""
                                      />
                                      {this.showLess(product.name)}
                                    </Link>
                                    <br />
                                    <div className="quantity">
                                      <label className="quantity-word">
                                        Quantity:{" "}
                                      </label>
                                      <div className="quantity-num">
                                        {cartItem[1].quantity}
                                      </div>
                                    </div>
                                    <div className="quantity">
                                      <div className="quantity-word">
                                        Total:{" "}
                                      </div>
                                      <div className="quantity-num">
                                        ${this.total(cartItem)}
                                      </div>
                                    </div>
                                    <button
                                      className="delete-item-in-cart"
                                      onClick={() =>
                                        this.props.deleteCartItem(
                                          cartItem[1].deleteableId
                                        )
                                      }
                                    >
                                      Delete Item
                                    </button>
                                  </div>
                                );
                            }
                            )}
                        </div>
                    </div>
                    <div className="checkout-div">
                        <div id="all-total" className="quantity-word">Item(s) total: ${allTotal} </div>
                        <button className="checkout">Purchase</button>
                    </div>
                </div>
            )

    }
 
    render() {
        let cartItemsObj = Object.entries(this.uniqueCartItems());

        return (cartItemsObj.length === 0 ? this.emptyCart() : this.filledCart(cartItemsObj))
    }
}

export default CartItems