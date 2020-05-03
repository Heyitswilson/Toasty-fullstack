export const getAllProducts = () => (
    $.ajax({
        method: "GET",
        url: "/api/products"
    })
)

export const getProduct = (productId) => {
    debugger
    return(
    $.ajax({
        method: "GET",
        url: `/api/products/${productId}`
    })
    )
}

export const createProduct = (formData) => (
    $.ajax({
        url: '/api/products',
        method: "POST",
        data: formData,
        contentType: false,
        processData: false
    })
)

export const updateProduct = (formData, id) => (
    $.ajax({
        method: "PATCH",
        url: `/api/products/${id}`,
        data: formData,
        contentType: false,
        processData: false
    })
)

export const deleteProduct = (productId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}`
    })
)