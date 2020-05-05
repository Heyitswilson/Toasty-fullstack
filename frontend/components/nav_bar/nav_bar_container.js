import NavBar from './nav_bar'
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import { logout } from '../../actions/session_actions'
import { unmountCategory } from '../../actions/category_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal("Sign In")),
    logout: () => dispatch(logout()), 
    unmountCategory: () => dispatch(unmountCategory())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)