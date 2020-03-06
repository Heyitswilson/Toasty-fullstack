import { connect } from 'react-redux';
import ProductForm from './product_form'
import { createProduct } from '../../actions/product_actions'

const mapStateToProps = state => ({
    formType: "Create Product Listing",
    product: { name: "", description: "", price: "" },
    // artistId: state.session.id,
    errors: state.errors.product
})

const mapDispatchToProps = dispatch => ({
    processForm: product => dispatch(createProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)