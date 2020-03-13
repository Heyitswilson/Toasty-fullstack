import React from 'react'

class ProductItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {quantity: 1}

        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(e) {
        e.preventDefault()
        let { sessionId, product } = this.props

        if (sessionId === null) {
            this.props.openModal()
        }

        this.setState({quantity: this.state.quantity + 1})

        this.props.createCartItem({customer_id: sessionId, product_id: product.id, quantity: this.state.quantity})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render(){
        let { product } = this.props
        return (
            <div className="show-div">
                <img className="show-image" src={product.photoUrl} alt="" />
                <div className="info-div">
                    <div className="name-product">{product.name}</div>
                    <h2 className="price-product">${product.price}</h2>
                    {/* <input onChange={this.update("quantity")} type="text" value={this.state.quantity}/> */}
                    <button onClick={this.addToCart} className="signin-submit">Add to Cart</button>
                    <div>
                            <label className="label-description">Description</label>
                        <h2 className="description-product">{product.description}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem