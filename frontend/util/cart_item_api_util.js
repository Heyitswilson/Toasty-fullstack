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

export const deleteCartItem = (cartItemId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/cart_items/${cartItemId}`
    })
)

export const updateCartItem = (formData, id) => (
    $.ajax({
        method: "PATCH",
        url: `/api/products/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
)