import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const removeProduct = productId => ({
    type: REMOVE_PRODUCT,
    productId
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const getAllProducts = () => dispatch => (
    ProductAPIUtil.getAllProducts()
        .then(products => dispatch(receiveProducts(products)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const getProduct = productId => dispatch => {
    return(
    ProductAPIUtil.getProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
    )
}
// export const getProduct = productId => dispatch => (
//     ProductAPIUtil.getProduct(productId)
//         .then(product => dispatch(receiveProduct(product)),
//         err => dispatch(receiveErrors(err.responseJSON))
//     )
// )

export const createProduct = (product) => dispatch => (
    ProductAPIUtil.createProduct(product)
        .then(product => dispatch(receiveProduct(product)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const updateProduct = product => dispatch => (
    ProductAPIUtil.updateProduct(product) 
        .then(product => dispatch(receiveProduct(product)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const deleteProduct = productId => dispatch => (
    ProductAPIUtil.deleteProduct(productId)
        .then(() => dispatch(removeProduct(productId)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

