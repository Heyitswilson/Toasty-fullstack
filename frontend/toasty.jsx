import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './actions/session_actions'
import configureStore from "./store/store";
import Root from './components/root'
// import {getAllProducts, getProduct} from './actions/product_actions'
import { getProduct }from './util/product_api_util'
import {createCartItem, getAllCartItems, deleteCartItem } from './util/cart_item_api_util'
import * as CartItemActions from './actions/cart_item_action'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState)
        delete window.currentUser
    } else {
        store = configureStore()
    }
    window.receiveCartItem = CartItemActions.receiveCartItem    

    window.getAllCartItemsAction = CartItemActions.getAllCartItems
    window.createCartItemAction = CartItemActions.createCartItem
    window.deleteCartItemAction = CartItemActions.deleteCartItem

    window.createCartItem = createCartItem
    window.getAllCartItems = getAllCartItems
    window.deleteCartItem = deleteCartItem  

    window.getProductAPI = getProduct
    // window.getProduct = getProduct

    // window.getAllProducts = getAllProducts
    // const store = configureStore()
    window.login = login
    window.logout = logout
    window.signup = signup
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root);
});