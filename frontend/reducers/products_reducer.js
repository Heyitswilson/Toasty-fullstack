import { RECEIVE_INDEX, RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from '../actions/product_actions'

const productsReducer = (state={}, action) => {
    Object.freeze(state)
    debugger
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.products 
        case REMOVE_PRODUCT:
            delete newState[action.id]
        case RECEIVE_INDEX:
            return action.type
        default: 
            return state
    }
}

export default productsReducer