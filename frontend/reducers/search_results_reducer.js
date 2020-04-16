// import { RECEIVE_PRODUCT, REMOVE_PRODUCT, RECEIVE_PRODUCTS } from '../actions/product_actions'

// const searchResultsReducer = (state={}, action) => {
//     Object.freeze(state);
//     let newState = Object.assign({}, state);

//     switch(action.type) {
//         case RECEIVE_PRODUCTS: 
//             return action.products
//         case RECEIVE_PRODUCT: 
//             return action.product
//         case REMOVE_PRODUCT:
//             delete newState(action.id)
//             return action.products 
//         default:
//             return state
//     }
// }

// export default searchResultsReducer