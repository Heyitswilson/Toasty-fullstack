import React from 'react'
import { Link } from 'react-router-dom'

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.profile = this.profile.bind(this)
    }


    profile() {
        let { currentUser } = this.props
        return (
                <Link to={`/users/${currentUser.id}`} onClick={() => this.props.unmountCategory()} >
                    <button className="test">Manage Store</button>
                </Link>
        )
    }

    render(){
        return this.props.currentUser ? this.profile() : null
    }
}

export default Profile