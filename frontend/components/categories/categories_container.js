import { receiveCategory, unmountCategory } from '../../actions/category_actions'
import { connect } from 'react-redux'
import Categories from './categories'

const mSTP = state => ({
    category: state.entities.category
})

const mDTP = dispatch => ({
    receiveCategory: category => dispatch(receiveCategory(category)),
    unmountCategory: () => dispatch(unmountCategory())
})


export default connect(mSTP, mDTP)(Categories)