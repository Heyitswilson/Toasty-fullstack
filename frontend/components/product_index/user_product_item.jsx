import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class UserProductIdxItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            popup: false
        }

        this.showLess = this.showLess.bind(this);
        this.imageTag = this.imageTag.bind(this);
        this.keep = this.keep.bind(this);
    }

    showLess(product) {
        let name = product.name;
        if (name.length > 16) {
            return (
                <h1 className="public-name-link" onClick={() => this.props.history.push(`/products/${product.id}`)}>{name.slice(0, 16) + "..."}</h1>
            )
        } else {
            return (
                <h1 className="public-name-link" onClick={() => this.props.history.push(`/products/${product.id}`)}>{name}</h1>
            )
        }
    }

    imageTag() {
        return (
            <img className="edit-idx-images"src={this.props.product.photoUrl} alt="" />
        )
    }

    keep() {
        let { product, deleteProduct } = this.props;
        if (product.keep) {
            setTimeout(this.clearPopUp, 5000)

            return (
                <div className="user-product-idx-item">
                    {this.showLess(product)}
                    {this.imageTag()}
                    <button className="disable-link" onClick={() => this.showPopUp()}>Update Product Listing</button>
                    <button className="disable-link" onClick={() => this.showPopUp()}>Delete Product</button>
                    <div className="disable-div">Products used to seed the database have their delete and update features disabled! Feel free to create a product listing and try out these features! </div>
                </div>
            )
        } else {
            return (
                <div className="user-product-idx-item">
                    {this.showLess(product)}
                    {this.imageTag()}
                    <Link className="product-links" to={`/products/${product.id}/edit`}>Update Product Listing</Link>
                    <button className="product-delete" onClick={() => deleteProduct(product.id)}>Delete Product</button>
                </div>
            )
        }
    }

    render() {
        return(
            this.keep()
        )
    }
}

export default withRouter(UserProductIdxItem)