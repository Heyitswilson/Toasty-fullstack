import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import productsReducer from './products_reducer'
import cartItemsReducer from './cart_items_reducer'
import productReducer from './product_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cartItems: cartItemsReducer,
    product: productReducer
})

export default entitiesReducer