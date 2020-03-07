import React from 'react'
import { Link } from 'react-router-dom'

class UserProductItem extends React.Component{
    constructor(props) {
        super(props)
    }

    // loggedIn() {
    //     return(
    //         <div>
    //             <Link to="/products/:productId/edit">Update Product Listing</Link>
    //             <button onClick={() => this.props.deleteProduct()}>Delete Product</button>
    //         </div>
    //     )
    // }
    
    render() {
        return(
            <div>
                <h1>{this.props.product.name}</h1>
                {/* <label>description
                    <h2>{this.props.product.description}</h2>

                </label> */}
                <h3>${this.props.product.price}</h3>
                {/* {this.props.currentUserId ? this.loggedIn() : null}  */}
                <Link to="/products/:productId/edit">Update Product Listing</Link>
                <button onClick={() => this.props.deleteProduct()}>Delete Product</button>
            </div>
            
        )
    }
}

export default UserProductItem