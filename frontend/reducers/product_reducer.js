import { RECEIVE_PRODUCT, UNMOUNT_PRODUCT } from '../actions/product_actions'

const productReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_PRODUCT:
            return action.product
        case UNMOUNT_PRODUCT:
            return {}
        default:
            return state
    }
}

export default productReducer