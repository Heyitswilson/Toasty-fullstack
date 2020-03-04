import React from 'react'
import SignIn from './sign_in'
import SearchBar from './search_bar'
import Profile from './profile'
import Cart from './cart'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <SearchBar />
            <SignIn />
            <Profile />
            <Cart />
        </div>
    )
}

export default NavBar