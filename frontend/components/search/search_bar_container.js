import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { getProduct } from '../../actions/product_actions'

const mapStateToProps = state => ({
    products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
    getProduct: (productId) => dispatch(getProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)