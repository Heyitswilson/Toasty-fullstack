import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import updateCartReducer from './update_cart_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    updateCart: updateCartReducer
})

export default uiReducer