import React from 'react'
import { Link } from 'react-router-dom'

class PublicProductIdxItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { product } = this.props
        return (
            <div>
                <Link to={`/products/${product.id}`}> 
                    <h1>{product.name}</h1>
                    <h3>${product.price}</h3>
                </Link>
            </div>
        )
    }
}

export default PublicProductIdxItem