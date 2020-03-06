import React from 'react'
import ProductItem from './product_item'

class ProductIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllProducts()
    }

    render(){
        return(
            <div>
                <h1>All Products</h1>
                <ul>
                    {this.props.allProducts.map((product) => {
                        return <ProductItem 
                            product={product}
                            deleteProduct={this.props.deleteProduct}
                            key={product.id}
                            currentUserId={this.props.currentUserId}
                        />
                    })}
                </ul>
            </div>
        )
    }
}

export default ProductIndex