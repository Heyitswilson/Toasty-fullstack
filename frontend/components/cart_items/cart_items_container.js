import { connect } from 'react-redux'
import { getAllCartItems, createCartItem, deleteCartItem } from '../../actions/cart_item_action'
import { getAllProducts } from '../../actions/product_actions'
import CartItems from './cart_items'
// import { getAllProducts } from '../../actions/product_actions'

const mapStateToProps = state => { 
    return ({
    userCartItems: Object.values(state.entities.cartItems),
    cartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.id
})}

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)