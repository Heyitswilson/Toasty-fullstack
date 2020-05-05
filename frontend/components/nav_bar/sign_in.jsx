import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({currentUser, openModal, logout, unmountCategory}) => {
    let loggedOut = () => {
        return (
            <button className="sign-in-test" onClick={() => (openModal("Sign In"))}>Sign In</button>
        )
    }

    function loggingOut() {
        logout()
        unmountCategory()
    }

    let loggedIn = () => {
        return (
            <Link to="/">
                <button className="test" onClick={loggingOut}>Logout</button>
            </Link>
        )
    }

    return currentUser ? loggedIn() : loggedOut() 
}

export default SignIn;