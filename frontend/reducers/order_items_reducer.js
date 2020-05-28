import { RECEIVE_ALL_ORDER_ITEMS, RECEIVE_ORDER_ITEM } from '../actions/order_items_actions';

const orderItemsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_ORDER_ITEMS:
            return action.items
        default: 
            return state
    }
}

export default orderItemsReducer