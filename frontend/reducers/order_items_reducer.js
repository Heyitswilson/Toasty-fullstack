import { RECEIVE_ALL_ORDER_ITEMS, RECEIVE_ORDER_ITEM } from '../actions/order_items_actions';

const orderItemsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ALL_ORDER_ITEMS:
            return action.items
        case RECEIVE_ORDER_ITEM:
            newState[action.item.id] = action.item
            return newState
        default: 
            return state
    }
}

export default orderItemsReducer