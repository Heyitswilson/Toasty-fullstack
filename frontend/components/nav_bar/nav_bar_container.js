import NavBar from './nav_bar'
// import { fetchUser } from '../../actions/session_actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps, null)(NavBar)