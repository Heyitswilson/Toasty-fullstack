import { connect } from 'react-redux';
import Profile from './profile';
import { unmountCategory } from '../../actions/category_actions';


const mapStateToProps = state => ({
    currentUser: state.session.id
})

const mDTP = dispatch => ({
    unmountCategory: () => dispatch(unmountCategory())
})

export default connect(mapStateToProps, mDTP)(Profile)