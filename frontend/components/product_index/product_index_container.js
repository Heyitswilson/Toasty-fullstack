import { connect } from 'react-redux'
import { getAllProducts, deleteProduct } from '../../actions/product_actions'
import ProductIndex from './product_index'
import { unmountCategory } from '../../actions/category_actions'

const mapStateToProps = state => ({
    allProducts: Object.values(state.entities.products),
    currentUserId: state.session.id,
    category: state.entities.category
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId)),
    unmountCategory: () => dispatch(unmountCategory())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)