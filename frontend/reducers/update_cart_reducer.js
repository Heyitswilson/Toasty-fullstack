import { UPDATE_CART } from '../actions/cart_item_action'

const updateCartReducer = (state = true, action) => {
    Object.freeze(state)
    // let newState = Object.assign({}, state)
    switch (action.type) {
        case UPDATE_CART:
            return action.update
        default:
            return state
    }
}

export default updateCartReducer