import { connect } from "react-redux";
import { logout } from '../actions/session_actions';
import App from './App';
import { fetchAllUsers } from '../actions/session_actions'


const mDTP = dispatch => ({
    logout: () => dispatch(logout())
    // fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(null, mDTP)(App)