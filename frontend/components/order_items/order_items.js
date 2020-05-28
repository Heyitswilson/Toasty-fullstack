import React from 'react'
import { Link } from 'react-router-dom'

class OrderItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: [false],
            grandTotal: 0
        }

        this.emptyOrders = this.emptyOrders.bind(this);
        this.filledOrders = this.filledOrders.bind(this);
        this.toTop = this.toTop.bind(this);
        // this.purchase = this.purchase.bind(this);
        this.total = this.total.bind(this);
    }

    total(orderItem) {
        return orderItem.price * orderItem.quantity
    }

    // purchase() {
    //     this.props.userCartItems.forEach(cartItem => {
    //         this.props.createOrderItem({
    //             orderer_id: cartItem.customer_id,
    //             order_item_id: cartItem.product.id,
    //             quantity: cartItem.quantity
    //         })
    //         this.props.deleteCartItem(cartItem.id)
    //     })
    // }

    toTop() {
        $('html,body').scrollTop(0);
    }

    componentDidMount() {
        this.props.getAllOrderItems()
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

    emptyOrders() {
        return (
            <div>
                <h1 className="header">Your Orders</h1>
                <div className="buy-page">
                    <div className="empty-cart-div">
                        <div className="header">You have no orders!</div>
                    </div>
                </div>
            </div>
        )
    }

    filledOrders(orderItemsObj) {
        return (
            <div>
                <h1 className="header">Your Orders</h1>

                <div className="buy-page">
                    <div className="new-cart-div">
                        {orderItemsObj.map(orderItem => {
                            return (
                                <div
                                    key={orderItem.id}
                                    className="cart-item-div"
                                >
                                    <Link
                                        onClick={() => this.toTop()}
                                        className="public-product-links"
                                        to={`/products/${orderItem.order_item_id}`}
                                    >
                                        <img
                                            className="idx-images"
                                            src={orderItem.photoUrl}
                                            alt=""
                                        />
                                        {this.showLess(orderItem.name)}
                                    </Link>
                                    <br />
                                    <div className="quantity">
                                        <label className="quantity-word">
                                            Quantity:{" "}
                                        </label>
                                        <div className="quantity-num">
                                            {orderItem.quantity}
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-word">
                                            Total:{" "}
                                        </div>
                                        <div className="quantity-num">
                                            ${this.total(orderItem)}
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-word">
                                            Ordered:{" "}
                                        </div>
                                        <div id="order-margin" className="quantity-num">
                                            {orderItem.created_at}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
            </div>
        )

    }

    render() {

        let orderItemsObj = this.props.userOrderItems

        return (orderItemsObj.length === 0 ? this.emptyOrders() : this.filledOrders(orderItemsObj))
    }
}

export default OrderItems