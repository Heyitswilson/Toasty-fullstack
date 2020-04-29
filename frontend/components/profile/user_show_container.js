import { connect } from 'react-redux'
import UserShow from './user_show'
import { fetchAllUsers } from '../../actions/session_actions'
import React from 'react'

class UserShowMiddleMan extends React.Component {
    componentDidMount() {
        this.props.fetchAllUsers()
    }
    render () {
        const { currentUser } = this.props
        if (!currentUser) return null
        return (
            <UserShow 
                currentUser={currentUser}
            />
        )
    }

}


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShowMiddleMan)