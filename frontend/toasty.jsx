import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import {searchProducts, getProduct, receiveProduct, getAllProducts} from './actions/product_actions'
// import { searchProducts, getAllProducts, getProduct } from './util/product_api_util'

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

    // window.getAllProducts = store.dispatch(getAllProducts())

    window.getProduct = getProduct
    // window.getAllProducts = getAllProducts
    // window.searchProducts = store.dispatch(searchProducts("egg"))
    window.getState = store.getState
    ReactDOM.render(<Root store={store}/>, root);
});