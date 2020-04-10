import React from 'react'
import ProfileContainer from '../profile/profile_container'
import CartContainer from '../cart/cart_container'
import SignIn from './sign_in'
import SearchBarContainer from '../search/search_bar_container'
import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, openModal, logout }) => {
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
                        <ProfileContainer />
                        <CartContainer />
                        <SignIn 
                            openModal={openModal}
                            logout={logout}
                            currentUser={currentUser}
                        />
                    </div>
            </div>
        </div>
    )
}

export default NavBar