import React from 'react'
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container'
import UserShowContainer from './profile/user_show_container'
import ProductIndexContainer from './product_index/product_index_container'
// import CreateProductContainer from './product_show/create_product_container'
// import DeleteProductContainer from './product_show/delete_product_container'
import UpdateProductContainer from './product_show/update_product_container'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        {/* <ProductIndexContainer /> */}
        <Switch>
            <Route exact path="/" component={GreetingContainer}/>
            <Route path="/users/:userId" component={UserShowContainer} />
            <Route path="/products" component={ProductIndexContainer}/>
            {/* <Route path="/products/:productId" component={DeleteProductContainer}/> */}
            <Route path="/products/:productId/edit" component={UpdateProductContainer}/>
        </Switch>
    </div>
);

export default App;