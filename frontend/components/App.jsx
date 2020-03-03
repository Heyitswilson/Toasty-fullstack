import React from 'react'
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import { Switch, Route } from 'react-router'

const App = () => (
    <div>
        <div className="nav">
            <header className="toasty-title">Toasty</header>
            <NavBarContainer />
        </div>
        <Modal />
        {/* <GreetingContainert /> */}
        {/* <LoginFormContainer />
        <SignUpFormContainer /> */}

        <Switch>
            <Route exact path="/" component={GreetingContainer}/>
        </Switch>
    </div>
);

export default App;