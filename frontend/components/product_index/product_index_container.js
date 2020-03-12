import { connect } from 'react-redux'
import { getAllProducts, deleteProduct } from '../../actions/product_actions'
import ProductIndex from './product_index'


const mapStateToProps = state => ({
    allProducts: Object.values(state.entities.products),
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)