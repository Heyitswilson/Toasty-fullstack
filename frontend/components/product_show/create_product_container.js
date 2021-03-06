import { connect } from 'react-redux';
import ProductForm from './product_form'
import { createProduct } from '../../actions/product_actions'

const mapStateToProps = state => ({
    formType: "Create Product Listing",
    product: { name: "", description: "", price: "", photoFile: null, artist_id: state.session.id, category: "Am category" },
    errors: state.errors.product,
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    processForm: product => dispatch(createProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)