import { connect } from "react-redux";
import { logout, fetchAllUsers } from '../actions/session_actions';
import App from './App';

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(null, mDTP)(App)