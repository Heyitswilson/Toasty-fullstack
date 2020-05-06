import React from 'react'
import { Link } from 'react-router-dom'

class PublicProductIdxItem extends React.Component {
    constructor(props) {
        super(props)
        this.showLess = this.showLess.bind(this)
        this.toTop = this.toTop.bind(this)
    }

    toTop() {
        $('html,body').scrollTop(0);
    }

    showLess(content){
        if (content.length > 16) {
            return (
                <h1 className="public-name">{content.slice(0, 16)+ "..."}</h1>
            )
        } else {
            return(
                <h1 className="public-name">{content}</h1>
            )
        }
    }

    render() {
        let { product } = this.props
        return (
            <div className="idx-item-div">
                <Link onClick={() => this.toTop()} className="public-product-links" to={`/products/${product.id}`}>
                    <img className="idx-images" src={product.photoUrl} alt="" /> 
                    {this.showLess(product.name)}
                    <h3 className="public-price">${product.price}</h3>
                </Link>
            </div>
        )
    }
}

export default PublicProductIdxItem