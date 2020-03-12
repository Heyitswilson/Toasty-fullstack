import React from 'react'
import CreateProductContainer from '../product_show/create_product_container'
import { Link } from 'react-router-dom'
import UserProductIndexContainer from '../product_index/user_product_index_container'
// import productIndexContainer from '../product_index/product_index_container'

class UserShow extends React.Component{
    constructor(props) {
        super(props)
        
        this.loggedIn = this.loggedIn.bind(this)
        // this.createProduct = this.createProduct.bind(this)
    }

    // createProduct() {
    //     return (
    //         <CreateProductContainer />
    //     )
    // }


    loggedIn(){
        return(
            <div>
                <h1 className="user-shop">Your Store</h1>
                <div> <UserProductIndexContainer /> </div>
                {/* <Link to="/products">Create Product Listing</Link> */}
            </div>
        )
    }

    render() {
        return this.loggedIn()
        // return this.props.currentUser ? this.loggedIn() : null
    }
}

export default UserShow