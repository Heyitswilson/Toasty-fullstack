import { RECEIVE_BUY, UNMOUNT_BUY } from '../actions/demo_buy_action'

const demoBuyReducer = (state = false, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BUY:
            return true
        case UNMOUNT_BUY:
            return false
        default:
            return state
    }
}

export default demoBuyReducer