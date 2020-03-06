import { connect } from 'react-redux';
import ProductForm from './product_form'
import { updateProduct } from '../../actions/product_actions'

const mapStateToProps = state => ({
    formType: "Update Product Listing",
    errors: state.errors.product,
    product: state.entities.products[ownProps.match.params.productId]
})

const mapDispatchToProps = dispatch => ({
    processForm: product => dispatch(updateProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)