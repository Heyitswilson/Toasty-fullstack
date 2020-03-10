import React from 'react'
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container'
import UserShowContainer from './profile/user_show_container'
import ProductIndexContainer from './product_index/product_index_container'
import { Switch, Route } from 'react-router'
import ProductItemContainer from './product_show/product_item_container'
import UserProductIndexContainer from './product_index/product_index_container'
import UpdateProductForm from './product_show/update_product_container'
import { ProtectedRoute, UserRoute } from '../util/route_util'

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
            {/* <UserRoute path="/users/:userId" component={UserShowContainer} /> */}
            <Route exact path="/products/:productId" component={ProductItemContainer}/>
            <ProtectedRoute path="/products/:productId/edit" component={UpdateProductForm}/>
            <ProtectedRoute path="/products" component={UserProductIndexContainer}/>
            <Route exact path="/" component={GreetingContainer}/>
        </Switch>
    </div>
);

export default App;