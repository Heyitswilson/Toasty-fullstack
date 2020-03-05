import { connect } from 'react-redux'
import Profile from './profile'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

export default connect(mapStateToProps, null)(Profile)