import React from 'react'
import ProfileContainer from '../profile/profile_container'
import CartContainer from '../cart/cart_container'
import SignInContainer from './sign_in_container'
import SearchBarContainer from '../search/search_bar_container'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../categories/categories_container'

const NavBar = ({ currentUser, openModal, logout, unmountCategory }) => {
    return(
        <div>
            <div className="nav">
                <div>
                    <Link to="/">
                        <header className="toasty-title" onClick={() => unmountCategory()}>Toasty</header>
                    </Link>
                </div >
                <div className="search-div">
                    <SearchBarContainer />
                </div>
                    <div className="button-divs">
                        <ProfileContainer />
                        <CartContainer />
                        <SignInContainer 
                            openModal={openModal}
                            logout={logout}
                            currentUser={currentUser}
                        />
                    </div>
            </div>
            <CategoriesContainer />
        </div>
    )
}

export default NavBar