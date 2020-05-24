export const getAllOrderItems = () => (
    $.ajax({
        method: "GET",
        url: "/api/order_items"
    })
)

export const createORderItem = orderItem => (
    $.ajax({
        method: "POST",
        url: "/api/order_items",
        data: { orderItem }
    })
)