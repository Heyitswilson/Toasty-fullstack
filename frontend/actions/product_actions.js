import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const RECEIVE_INDEX = "RECEIVE_INDEX";
export const UNMOUNT_PRODUCT = "UNMOUNT_PRODUCT";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = search => ({
    type: RECEIVE_SEARCH,
    search
})

export const receiveIndex = type => ({
    type: RECEIVE_INDEX,
    type
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const removeProduct = (productId, products) => ({
    type: REMOVE_PRODUCT,
    productId,
    products
})

const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const unmountProduct = () => {
    return ({
        type: UNMOUNT_PRODUCT
    })
}

export const searchProducts = (search) => dispatch => {
    ProductAPIUtil.searchProducts(search)
        .then(products => dispatch(receiveSearch(products)))
} 

export const getAllProducts = () => dispatch => {
    ProductAPIUtil.getAllProducts() 
        .then(products => dispatch(receiveProducts(products)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const getProduct = productId => dispatch => {
    return(
    ProductAPIUtil.getProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
    )
}

export const createProduct = (product) => dispatch => (
    ProductAPIUtil.createProduct(product)
        .then(product => dispatch(receiveProduct(product)),
            err => dispatch(receiveErrors(err.responseJSON)),
            ProductAPIUtil.getAllProducts()
                .then(products => dispatch(receiveProducts(products)))
        )
)

export const updateProduct = (product, id) => dispatch => (
    ProductAPIUtil.updateProduct(product, id) 
        .then(product => dispatch(receiveProduct(product)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const deleteProduct = productId => dispatch => (
    ProductAPIUtil.deleteProduct(productId)
        .then(() => ProductAPIUtil.getAllProducts())
        .then((products) => dispatch(removeProduct(productId, products)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)