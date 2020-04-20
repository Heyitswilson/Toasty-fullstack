import { connect } from 'react-redux'
import PublicProductIdxItem from './public_product_item'
import { unmountProduct } from '../../actions/product_actions'

const mapDispatchToProps = (dispatch) => ({
    unmountProduct: () => dispatch(unmountProduct())

})

export default connect (null, mapDispatchToProps)(PublicProductIdxItem) 