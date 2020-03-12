import { connect } from 'react-redux'
import { getCartItem, getAllCartItems, deleteCartItem} from '../../actions/cart_item_action'
import UserCartItems from './user_cart_items'


const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    getCartItem: cartItemId => dispatch(getCartItem(cartItemId)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)) 
})

export default connect(null, mapDispatchToProps)(UserCartItems)