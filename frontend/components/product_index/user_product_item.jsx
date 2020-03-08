import React from 'react'
import { Link } from 'react-router-dom'

class UserProductIdxItem extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        let {product, deleteProduct} = this.props
        return(
            <div>
                <h1>{product.name}</h1>
                <Link className="links" to={`/products/${product.id}/edit`}>Update Product Listing</Link>
                <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
            </div>
            
        )
    }
}

export default UserProductIdxItem