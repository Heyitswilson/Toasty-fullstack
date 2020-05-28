import { connect } from 'react-redux';
import { removeAllItems, getAllCartItems, createCartItem, deleteCartItem, updateCartItem, updateCart } from '../../actions/cart_item_action';
import CartItems from './cart_items';
import { createOrderItem, getAllOrderItems } from '../../actions/order_items_actions';

const mapStateToProps = state => { 
    return ({
    userCartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.id,
    // update: state.ui.updateCart
})}

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    createOrderItem: (orderItem) => dispatch(createOrderItem(orderItem)),
    // getAllOrderItems: () => dispatch(getAllOrderItems())
    updateCartItem: (data, id) => dispatch(updateCartItem(data, id)),
    // updateCart: (update) => dispatch(updateCart(update))

})

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)