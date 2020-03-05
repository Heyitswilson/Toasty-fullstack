import React from 'react'
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import CartContainer from './nav_bar/cart_container'
import ProfileContainer from './nav_bar/profile_container'
import SearchBarContainer from './nav_bar/search_bar_container'
import Signin from './nav_bar/sign_in'
import GreetingContainer from './greeting/greeting_container'
import UserShowContainer from './profile/user_show_container'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

const App = () => (
    <div>
        <NavBarContainer />
            {/* <GreetingContainer /> */}
        <Modal />

        <Switch>
            <Route exact path="/" component={GreetingContainer}/>
            <Route path="/users/:userId" component={UserShowContainer} />
        </Switch>
    </div>
);

export default App;