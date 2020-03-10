import React from 'react'
import { Link } from 'react-router-dom'

class ProductItem extends React.Component{
    constructor(props) {
        super(props)
    }


    // loggedIn() {
    //     return(
    //         <div>
    //             <h1>{this.props.product.name}</h1>
    //             <h2>{this.props.product.description}</h2>
    //             <h3>{this.props.product.price}</h3>
    //             <Link to="/products/:productId/edit">Update Product Listing</Link>
    //         </div>
    //     )
    // }

    render(){
        return (
            <div className="show-div">
                <img className="show-image" src={this.props.product.photoUrl} alt="" />
                <div className="info-div">
                    <div className="name-product">{this.props.product.name}</div>
                    <h2 className="price-product">${this.props.product.price}</h2>
                    <button className="signin-submit">Add to Cart</button>
                    <div>
                            <label className="label-description">Description</label>
                        <h2 className="description-product">{this.props.product.description}</h2>
                    </div>
                </div>
                {/* <Link to="/products/:productId/edit">Update Product Listing</Link> */}
            </div>
        )
    }
}

export default ProductItem