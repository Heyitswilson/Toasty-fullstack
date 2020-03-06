import React from 'react'
import CreateProductContainer from '../product_show/create_product_container'
import { Link } from 'react-router-dom'

class UserShow extends React.Component{
    constructor(props) {
        super(props)
        
        this.loggedIn = this.loggedIn.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }

    createProduct() {
        return (
            <CreateProductContainer />
        )
    }

    loggedIn(){
        return(
            <div>
                <h1>hi {this.props.currentUser.name} </h1>
                <Link to="/products">Create Product Listing</Link>
            </div>
        )
    }

    render() {
        return this.props.currentUser ? this.loggedIn() : null
    }
}

export default UserShow