import React from 'react'
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container'
import UserShowContainer from './profile/user_show_container'
import ProductIndexContainer from './product_index/product_index_container'
import { Switch, Route } from 'react-router'
import ProductItemContainer from './product_show/product_item_container'
import { Link } from 'react-router-dom'

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <Route path="/users/:userId" component={UserShowContainer} />
            <Route exact path="/products/:productId" component={ProductItemContainer}/>
            <Route path="/products" component={ProductIndexContainer}/>
            <Route exact path="/" component={GreetingContainer}/>
            {/* <Route path="/products/:productId/edit" component={UpdateProductContainer}/> */}
        </Switch>
    </div>
);

export default App;