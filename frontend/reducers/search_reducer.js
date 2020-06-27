// import { RECEIVE_SEARCH, UNMOUNT_SEARCH } from '../actions/search_actions'

// const searchReducer = (state = "", action) => {
//     Object.freeze(state)
//     switch (action.type) {
//         case RECEIVE_SEARCH:
//             return action.search
//         case UNMOUNT_SEARCH:
//             return ""
//         default:
//             return state
//     }
// }

import { RECEIVE_SEARCH } from '../actions/product_actions';
import { UNMOUNT_SEARCH } from '../actions/search_actions';

const searchReducer = (state = "", action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SEARCH:
            return action.search;
        case UNMOUNT_SEARCH:
            return "";
        default: 
            return state;
    }
}

export default searchReducer