import React from 'react'
import UserProductItem from './user_product_item'
import PublicProductItem from './public_product_item'
import CreateProductContainer from '../product_show/create_product_container'
import { Link } from 'react-router-dom'

class ProductIndex extends React.Component {
    constructor(props){
        super(props)

        this.publicProductIndex = this.publicProductIndex.bind(this)
        this.userProductIndex = this.userProductIndex.bind(this)
    }

    componentDidMount(){
        this.props.getAllProducts()
    }

    userProductIndex(){

        return (
            <div>
                <h1 className="header">All Products</h1>
                <ul className="products">
                    {this.props.userProducts.map((product) => {
                        // return <UserProductItem
                        //     product={product}
                        //     deleteProduct={this.props.deleteProduct}
                        //     key={product.id}
                        //     currentUserId={this.props.currentUserId}
                        // />
                        return (
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                                <br />
                                ${product.price}
                            </Link>
                        )
                    })}
                </ul>
                <div> <CreateProductContainer /> </div>
            </div>
        )
    }

    publicProductIndex(){
        return(
            <div>
                <h1 className="header">All Products</h1>
                <ul className="products">
                    {this.props.allProducts.map((product) => {
                        // return <PublicProductItem
                        //     product={product}
                        //     key={product.id}
                        // />
                        return(
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                                <br/>
                                ${product.price}
                            </Link>
                        )
                    })}
                </ul>
            </div> 
        )
    }

    render(){
        // debugger;
        return this.props.indexType === "User" ? this.userProductIndex() : this.publicProductIndex()
            // <div>
            //     <h1>All Products</h1>
            //     <ul>
            //         {this.props.allProducts.map((product) => {
            //             return <ProductItem 
            //                 product={product}
            //                 deleteProduct={this.props.deleteProduct}
            //                 key={product.id}
            //                 currentUserId={this.props.currentUserId}
            //             />
            //         })}
            //     </ul>
            // </div>
    }
}

export default ProductIndex