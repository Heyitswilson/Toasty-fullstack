import React from 'react';
import { Link } from 'react-router-dom';

class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.orders = this.orders.bind(this);
    }
    orders() {
        return (
            <Link to="/orders">
                <button className="test">Orders</button>
            </Link>
        )
    }

    render() {
        return this.props.currentUser ? this.orders() : null;
    }
}

export default Orders;