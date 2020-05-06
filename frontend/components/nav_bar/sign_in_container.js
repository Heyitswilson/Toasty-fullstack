import {connect} from 'react-redux';
import { unmountCategory } from '../../actions/category_actions';
import SignIn from './sign_in';
import { unmountBuy } from '../../actions/demo_buy_action'

const mDTP = dispatch => ({
    unmountCategory: () => dispatch(unmountCategory()),
    unmountBuy: () => dispatch(unmountBuy())
})

export default connect(null, mDTP) (SignIn)