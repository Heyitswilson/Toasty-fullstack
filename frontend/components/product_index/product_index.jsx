import React from 'react'
import UserProductIdxItem from './user_product_item'
import PublicProductIdxContainer from './public_product_idx_container'
import CreateProductContainer from '../product_show/create_product_container'

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
        
        this.state={displayCreate: false};

        this.publicProductIndex = this.publicProductIndex.bind(this);
        this.userProductIndex = this.userProductIndex.bind(this);
        this.categoryProductIndex = this.categoryProductIndex.bind(this);
        this.displayCreate = this.displayCreate.bind(this);
        this.admin = this.admin.bind(this);
    }

    displayCreate(){
        this.setState({displayCreate: true})
    }

    admin() {
        this.props.otherProducts.forEach(product => this.props.deleteProduct(product.id))
    }

    quickSort(arr) {
        if (arr.length <= 1) return arr;

        let pivot = array.shift();
        let left = array.filter(el => el.name < pivot.name);
        let right = array.filter(el => el.name >= pivot.name);

        let leftSorted = quickSort(left);
        let rightSorted = quickSort(right);

        return [...leftSorted, pivot, ...rightSorted];
    }

    userProductIndex(){
        if (this.state.displayCreate) {
            return <CreateProductContainer />
        }
        if (this.props.userID === 44) {
            return (
                <button onClick={() => this.admin()}>DELETE ALL</button>
            )
        }

        return (
            <div className="idx-div">
                
                <div className="create-button">
                    <button className="test" onClick={() => this.displayCreate()}>Create Product Listing</button>
                </div>
                    <ul className="grid-user-container">
                        {this.props.userProducts.map((product) => {
                            return (
                                <div key={product.id} className="grid-item-user">
                                    <UserProductIdxItem 
                                        product={product}
                                        deleteProduct={this.props.deleteProduct}
                                    />
                                </div>
                            )
                        })}
                    </ul>
                      
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
                            <div key={product.id} className="grid-item">
                                <PublicProductIdxContainer
                                    product={product}
                                />
                            </div>
                        )
                    })}
                </ul>
            </div> 
        )
    }

    categoryProductIndex() {
        const { category } = this.props;
        let filteredProducts = this.props.allProducts.filter(product => 
            product.category === category
        )
        return (
            <div>
                <h1 className="header">{this.props.category}</h1>
                <ul className="grid-container">
                    {filteredProducts.map((product) => {
                        return (
                            <div key={product.id} className="grid-item">
                                <PublicProductIdxContainer
                                    product={product}
                                />
                            </div>
                        )
                    })}
                </ul>
            </div> 
        )
    }

    render(){
        const { category } = this.props;

        if (category != "All") {
            return this.categoryProductIndex()
        } else {
            return (this.props.indexType === "User" ? this.userProductIndex() : this.publicProductIndex())
        }

        
    }
}

export default ProductIndex