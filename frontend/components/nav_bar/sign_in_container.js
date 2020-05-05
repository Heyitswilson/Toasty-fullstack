import {connect} from 'react-redux';
import { unmountCategory } from '../../actions/category_actions';
import SignIn from './sign_in'

const mDTP = dispatch => ({
    unmountCategory: () => dispatch(unmountCategory())
})

export default connect(null, mDTP) (SignIn)