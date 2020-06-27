import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { getProduct } from '../../actions/product_actions';
import { receiveSearch } from '../../actions/search_actions'; 
import { unmountSearch } from '../../actions/search_actions'; 
import { receiveInput } from '../../actions/input_actions';
import * as ProductAPIUtil from '../../util/product_api_util'

const mapStateToProps = state => {
    return ({
        products: state.entities.products,
        search: state.entities.search,
        input: state.entities.input
    })
}

const mapDispatchToProps = dispatch => {
    return({
        getProduct: (productId) => dispatch(getProduct(productId)),
        receiveSearch: (search) => dispatch(receiveSearch(search)),
        unmountSearch: () => dispatch(unmountSearch()),
        receiveInput: (input) => dispatch(receiveInput(input)),
        searchProducts: input => ProductAPIUtil.searchProducts(input)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)