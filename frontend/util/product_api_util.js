export const getAllProducts = () => (
    $.ajax({
        method: "GET",
        url: "/api/products"
    })
)

export const getProduct = (productId) => {
    return(
    $.ajax({
        method: "GET",
        url: `/api/products/${productId}`
    })
    )
}

export const createProduct = (product) => (
    $.ajax({
        method: "POST",
        url: "/api/products",
        data: { product }
    })
)

export const updateProduct = (product) => (
    $.ajax({
        method: "PATCH",
        url: `/api/products/${product.id}`,
        data: { product }
    })
)

export const deleteProduct = (productId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}`
    })
)

