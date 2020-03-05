import React from 'react'
import ProfileContainer from './profile_container'
import CartContainer from './cart_container'
import SignIn from './sign_in'
import SearchBarContainer from './search_bar_container'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser }) => {

    return(
        <div>
            <div className="nav">
                <div>
                    <Link to="/">
                        <header className="toasty-title">Toasty</header>
                    </Link>
                </div >
                <div className="search-div">
                    <SearchBarContainer />
                </div>
                <div className="button-divs">
                    <SignIn currentUser={currentUser}/>
                    <ProfileContainer />
                    <CartContainer />
                </div>
            </div>
        </div>
    )
}

export default NavBar