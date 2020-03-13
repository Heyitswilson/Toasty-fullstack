import React from 'react'
import { Link } from 'react-router-dom'

class UserProductIdxItem extends React.Component{
    constructor(props) {
        super(props)

        this.showLess = this.showLess.bind(this)
        this.imageTag = this.imageTag.bind(this)
    }

    showLess(content) {
        if (content.length > 16) {
            return (
                <h1 className="public-name">{content.slice(0, 16) + "..."}</h1>
            )
        } else {
            return (
                <h1 className="public-name">{content}</h1>
            )
        }
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
                {this.showLess(product.name)}
                {this.imageTag()}
                <Link className="product-links" to={`/products/${product.id}/edit`}>Update Product Listing</Link>
                <button className="product-delete" onClick={() => deleteProduct(product.id)}>Delete Product</button>
            </div>
            
        )
    }
}

export default UserProductIdxItem