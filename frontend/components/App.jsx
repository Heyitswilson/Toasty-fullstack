import React from 'react'
import Modal from './modal/modal'
import NavBarContainer from './/nav_bar/nav_bar_container'
import GreetingContainer from './greeting/greeting_container'
import UserShowContainer from './profile/user_show_container'
import { Switch, Route } from 'react-router'
import ProductItemContainer from './product_show/product_item_container'
import ProductIndexContainer from './product_index/product_index_container'
import UpdateProductForm from './product_show/update_product_container'
import { ProtectedRoute, AuthRoute, SearchedRoute } from '../util/route_util'
import CartItemContainer from './cart_items/cart_items_container'
import Info from './info/info'
import SearchPageContainer from './search_page/search_page_container'
import OrderItemContainer from './order_items/order_items_container'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.getAllProducts();
    }

    render () {
        window.onunload = () => this.props.logout()

        return (
            <div>
                <NavBarContainer />
                <Modal />
                <div className="container">
                <Switch >
                    <ProtectedRoute path="/cart_items" component={CartItemContainer} />
                    <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
                    <Route exact path="/products/:productId" component={ProductItemContainer}/>
                    <AuthRoute path="/products/:productId/edit" component={UpdateProductForm}/>
                    <ProtectedRoute path="/products" component={ProductIndexContainer}/>
                    <SearchedRoute path="/search" component={SearchPageContainer}/>
                    <Route path="/jewelry-accessories" component={ProductIndexContainer}/>
                    <Route path="/clothing-shoes" component={ProductIndexContainer}/>
                    <Route path="/home-living" component={ProductIndexContainer}/>
                    <Route path="/wedding-party" component={ProductIndexContainer}/>
                    <Route path="/toys-entertainment" component={ProductIndexContainer}/>
                    <Route path="/art-collectibles" component={ProductIndexContainer}/>
                    <Route path="/craft-supplies" component={ProductIndexContainer}/>
                    <Route path="/vintage" component={ProductIndexContainer}/>
                    <Route path="/gifts" component={ProductIndexContainer}/>
                    <Route path="/orders" component={OrderItemContainer}/>
                    <Route exact path="/" component={GreetingContainer}/>
                </Switch>
                </div>
                <Info />
            </div>
        )
    }

        
};

export default App;