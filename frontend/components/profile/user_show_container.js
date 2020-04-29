import { connect } from 'react-redux'
import UserShow from './user_show'
import React from 'react'

class UserShowMiddleMan extends React.Component {
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

export default connect(mapStateToProps, null)(UserShowMiddleMan)