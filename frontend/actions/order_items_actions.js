import * as OrderItemAPIUtil from '../util/order_item_api_util';

export const RECEIVE_ALL_ORDER_ITEMS = "RECEIVE_ALL_ORDER_ITEMS";
export const RECEIVE_ORDER_ITEM = "RECEIVE_ORDER_ITEM";

export const receiveAllOrderItems = (items) => ({
    type: RECEIVE_ALL_ORDER_ITEMS,
    items
})

export const receiveOrderItem = (item) => {
    return ({
        type: RECEIVE_ORDER_ITEM,
        item
    })
}

export const getAllOrderItems = () => dispatch => {
    return (OrderItemAPIUtil.getAllOrderItems()
        .then(orderItems => dispatch(receiveAllOrderItems(orderItems))))
}

export const createOrderItem = (orderItem) => dispatch => {
    return (
        OrderItemAPIUtil.createOrderItem(orderItem)
        // .then(console.log(orderItem))
        .then(orderItem => dispatch(receiveOrderItem(orderItem)))
    )
}