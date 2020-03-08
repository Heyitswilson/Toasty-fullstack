import React from 'react'
import UserProductIdxItem from './user_product_item'
import PublicProductIdxItem from './public_product_item'
import CreateProductContainer from '../product_show/create_product_container'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
        this.state={displayCreate: false}

        this.publicProductIndex = this.publicProductIndex.bind(this)
        this.userProductIndex = this.userProductIndex.bind(this)
        this.displayCreate = this.displayCreate.bind(this)
    }

    componentDidMount(){
        this.props.getAllProducts()
    }

    displayCreate(){
        this.setState({displayCreate: true})
    }

    userProductIndex(){
        if (this.state.displayCreate) {
            return <CreateProductContainer />
        }

        return (
            <div>
                <h1 className="header">All Products</h1>
                    <ul className="grid-container">
                        {this.props.userProducts.map((product) => {
                            return (
                                <div className="grid-item">
                                    <UserProductIdxItem 
                                        product={product}
                                        deleteProduct={this.props.deleteProduct}
                                        key={product.id}
                                    />
                                </div>
                            )
                        })}
                    </ul>
                        
                <button onClick={() => this.displayCreate()}>Create Product Listing</button>   
            </div>
        )
    }

    publicProductIndex(){
        return(
            <div>
                <h1 className="header">All Products</h1>
                <ul className="grid-container">
                    {this.props.allProducts.map((product) => {
                        return(
                            <div className="grid-item">
                                <PublicProductIdxItem
                                    product={product}
                                    key={product.id}
                                />
                            </div>
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