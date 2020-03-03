import React from 'react'
import SignIn from './sign_in'
import SearchBar from './search_bar'
import Profile from './profile'

const NavBar = () => {
    return (
        <div className="nav-bar">NAVBARRRRR
            <SignIn />
            <SearchBar />
            <Profile />
        </div>
    )
}

export default NavBar