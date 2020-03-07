import React from 'react'

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.form = this.form.bind(this)

    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        let newState = Object.assign({}, this.state, {artist_id: this.props.artistId})
        this.props.processForm(newState)
        
    }

    renderErrors() {
        return (
            this.props.errors.map((error, i) => {
                return (<li key={i}>
                    {error}
                </li>)
            })
        )
    }

    form(){
        return(
            <div>
                <div className="page">
                <h3>Listing Details</h3>
                    <form className="form-page"onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <label>Name</label>
                        <input 
                            onChange={this.update("name")}
                            type="text" 
                            value={this.state.name}
                        />
                        <br/>
                        <label>Description</label>
                        <textarea 
                            onChange={this.update("description")}
                            value={this.state.description} 
                            cols="30" 
                            rows="10"
                        />
                        <br/>
                        <label>Price</label>
                        <input 
                            onChange={this.update("price")}
                            type="number" 
                            value={this.state.price}
                        />
                        <br/>
                        {/* <label >Category</label>
                        <select>
                            <option onSelect={this.update("category")} value={this.state.category}>Art & Collectibles</option>
                            <option onSelect={this.update("category")} value={this.state.category}>Clothing & Shoes</option>
                            <option onSelect={this.update("category")} value={this.state.category}>Home & Living</option>
                            <option onSelect={this.update("category")} value={this.state.category}>Jewelry & Accessories</option>
                        </select>
                        <br/> */}
                        <input type="submit" value={this.props.formType}/>
                    </form>
                </div>
            </div>
        )
    }


    render() {
        return (
            this.form()
        )
    }
}

export default ProductForm