import React from 'react'
import { Link } from 'react-router-dom'

class UserProductIdxItem extends React.Component{
    constructor(props) {
        super(props)
        this.imageTag = this.imageTag.bind(this)
    }
    imageTag() {
        return (
            <img className="idx-images"src={this.props.product.photoUrl} alt="" />
        )
    }

    render() {
        let {product, deleteProduct} = this.props
        return(
            <div className="user-product-idx-item">
                <h1>{product.name}</h1>
                {this.imageTag()}
                <Link className="product-links" to={`/products/${product.id}/edit`}>Update Product Listing</Link>
                <button className="product-delete" onClick={() => deleteProduct(product.id)}>Delete Product</button>
            </div>
            
        )
    }
}

export default UserProductIdxItem