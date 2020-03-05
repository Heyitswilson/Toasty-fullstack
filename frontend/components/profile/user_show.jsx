// show a shop if not logged in or mismatching credentials
// if logged in, there will be a shop button on nav bar

import React from 'react'

class UserShow extends React.Component{
    constructor(props) {
        super(props)
        
    }

    loggedIn(){
        return(
            <h1>hi {this.props.currentUser.name} </h1>
        )
    }

    render() {
        return this.props.currentUser ? this.loggedIn() : null
    }
}

export default UserShow