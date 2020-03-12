import * as CartItemAPIUtil from '../util/cart_item_api_util'

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS"


export const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

export const removeCartItem = id => ({
    type: REMOVE_CART_ITEM,
    id
})

// export const removeAllItems = () => ({
//     type: REMOVE_ALL_ITEMS
// })

export const getAllCartItems = () =>  dispatch => {
    
   return  (CartItemAPIUtil.getAllCartItems() 
        .then(cartItems => dispatch(receiveCartItems(cartItems))))
}

export const getCartItem = cartItemId => dispatch => (
    CartItemAPIUtil.getCartItem(cartItemId)
        .then( cartItem => dispatch(receiveCartItem(cartItem)))
)

export const createCartItem = cartItem => dispatch => (
    CartItemAPIUtil.createCartItem(cartItem) 
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    CartItemAPIUtil.deleteCartItem(cartItemId)
        .then( () => dispatch(removeCartItem()))
)