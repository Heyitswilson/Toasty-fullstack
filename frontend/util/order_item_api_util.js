export const getAllOrderItems = () => (
    $.ajax({
        method: "GET",
        url: "/api/order_items"
    })
)

export const createOrderItem = orderItem => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/order_items",
            data: { orderItem }
        })

    )
}