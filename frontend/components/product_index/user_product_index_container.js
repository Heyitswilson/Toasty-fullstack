import { connect } from 'react-redux'
import { getAllProducts, deleteProduct } from '../../actions/product_actions'
import ProductIndex from './product_index'


const mapStateToProps = state => {
    return ({
    userProducts: Object.values(state.entities.products).filter(product => 
        product.artist_id === state.session.id),
    indexType: "User",
    otherProducts: Object.values(state.entities.products).filter(product => 
        !product.keep),
    userID: state.session.id
    })
}

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)