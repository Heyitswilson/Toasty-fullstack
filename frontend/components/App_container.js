import { connect } from "react-redux";
import { logout, fetchAllUsers } from '../actions/session_actions';
import App from './App';
import { getAllProducts } from '../actions/product_actions';

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    getAllProducts: () => dispatch(getAllProducts())
})

export default connect(null, mDTP)(App)