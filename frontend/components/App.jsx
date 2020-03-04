import React from 'react'
import Modal from './modal/modal'
// import NavBarContainer from './nav_bar/nav_bar_container'
import CartContainer from './nav_bar/cart_container'
import ProfileContainer from './nav_bar/profile_container'
import SearchBarContainer from './nav_bar/search_bar_container'
import Signin from './nav_bar/sign_in'
import GreetingContainer from './greeting/greeting_container'
// import LoginFormContainer from './session_form/login_form_container'
// import SignUpFormContainer from './session_form/signup_form_container'
import { Switch, Route } from 'react-router'

const App = () => (
    <div>
        <div className="nav">
            <div>
                <header className="toasty-title">Toasty</header>
            </div >
            <div className="search-div">
                <SearchBarContainer />
            </div>
            <div className="buttons-div">
                <Signin />
                <ProfileContainer />
                <CartContainer />
            </div>
        </div>
        <Modal />
        <Switch>
            <Route exact path="/" component={GreetingContainer}/>
        </Switch>
    </div>
);

export default App;