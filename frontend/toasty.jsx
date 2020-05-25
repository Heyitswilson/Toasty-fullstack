import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { login } from '../frontend/util/session_api_util'
import { createOrderItem, getAllOrderItems  } from './actions/order_items_actions'

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

    window.getAllCartItems = getAllOrderItems
    window.createOrderItem = createOrderItem
    window.getState = store.getState
    ReactDOM.render(<Root store={store}/>, root);
});