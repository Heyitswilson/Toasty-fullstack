export const getAllCartItems = () => (
    $.ajax({
        method: "GET",
        url: "/api/cart_items"
    })
)

export const getCartItem = (cartItemId) => (
    $.ajax({
        method: "GET",
        url: `/api/cart_items/${cartItemId}`
    })
)

export const createCartItem = cartItem => (
    $.ajax({
        method: "POST",
        url: "/api/cart_items",
        data: { cartItem }
    })
)

export const deleteCartItem = (cartItemId) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/cart_items/${cartItemId}`
        })
    )
}

export const updateCartItem = (cartItem, id) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/cart_items/${id}`,
            data: { cartItem },
        })
    )

}