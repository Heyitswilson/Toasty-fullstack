import { connect } from "react-redux";
import { logout } from '../actions/session_actions';
import App from './App'

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(App)