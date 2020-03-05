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
                <Link to={`/users/${currentUser.id}`}>
                    <button className="test">Profile</button>
                </Link>


            // <Link className="test" to={`/users/${currentUser.id}`}>{currentUser.name}</Link>
        )
    }

    render(){
        return this.props.currentUser ? this.profile() : null
    }
}

export default Profile