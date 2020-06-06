import { connect } from 'react-redux';
import { removeAllItems, getAllCartItems, createCartItem, deleteCartItem } from '../../actions/cart_item_action';
import OrderItems from './order_items';
import { getAllOrderItems } from '../../actions/order_items_actions';

const mapStateToProps = state => {
    return ({
        userOrderItems: Object.values(state.entities.orderItems),
        currentUserId: state.session.id
    })
}

const mapDispatchToProps = dispatch => ({
    // getAllCartItems: () => dispatch(getAllCartItems()),
    // createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    // deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    // createOrderItem: (orderItem) => dispatch(createOrderItem(orderItem)),
    getAllOrderItems: () => dispatch(getAllOrderItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)