import React from 'react'
import { Link } from 'react-router-dom'

class PublicProductItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/products/:id"> 
                    <h1>{this.props.product.name}</h1>
                    {/* <h2>{this.props.product.description}</h2> */}
                    <h3>${this.props.product.price}</h3>
                </Link>
            </div>
        )
    }
}

export default PublicProductItem