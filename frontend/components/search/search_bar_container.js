import { connect } from 'react-redux'
import SearchBar from './search_bar'

const mapStateToProps = state => ({
    products: state.entities.products
})


export default connect(mapStateToProps, null)(SearchBar)