import { RECEIVE_INPUT } from '../actions/input_actions';

const inputReducer = (state="", action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_INPUT:
            return action.input
        default:
            return state
    }
}

export default inputReducer