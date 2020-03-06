import { connect } from 'react-redux'
import UserShow from './user_show'
import { fetchUser } from '../../actions/session_actions'
// import { createProduct } from '../../actions/product_actions'
import React from 'react'

class UserShowMiddleMan extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
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
    currentUser: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShowMiddleMan)