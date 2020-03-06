// import { connect } from 'react-redux'
// import React from 'react'
// import ProductItem from './product_item'
// import { getProduct } from '../../actions/product_actions'

// class ProductItemMiddleMan extends React.Component{
//     componentDidMount() {
//         this.props.getProduct(this.props.match.params.userId)
//     }

//     render() {
//         const { product } = this.props

//         if (!product) return null 
//         return(
//             <ProductItem 
//                 product={product}
//             />
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => ({
//     product: state.entities.products[ownProps.match.params.productId]
// })

// const mapDispatchToProps = dispatch => ({
//     getProduct: product => dispatch(getProduct(product))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ProductItemMiddleMan)





