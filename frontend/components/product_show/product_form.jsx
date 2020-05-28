import React from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        
        this.handleFile = this.handleFile.bind(this)
        this.imagePreview = this.imagePreview.bind(this)
        this.imageFile = this.imageFile.bind(this)
        this.update = this.update.bind(this)
        this.toTop = this.toTop.bind(this)
    }

    toTop () {
        $('html, body').scrollTop(0);
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    imageFile(e){
        this.imagePreview(e)
        this.handleFile(e)
    }

    imagePreview(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });
    
        if(file) {
            reader.readAsDataURL(file);
        } else {
        this.setState({ photoUrl: "", photoFile: null });
        }
    }

    
    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('product[name]', this.state.name)
        formData.append('product[description]', this.state.description)
        formData.append('product[price]', this.state.price)
        formData.append('product[artist_id]', this.state.artist_id)
        formData.append('product[category]', this.state.category)
        if (this.state.photoFile) {
            formData.append('product[photo]', this.state.photoFile)
        }
        this.toTop()
        this.props.processForm(formData, this.props.product.id)
        this.props.history.push(`/`)
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    renderErrors() {
        return (
            this.props.errors.map((error, i) => {
                return (<li className="errors" key={i}>
                    {error}
                </li>)
            })
        )
    }



    render() {
        const preview = this.state.photoUrl ? <img className="preview" src={this.state.photoUrl} /> : null
        if (this.state.category != "") {
            $("select").val(this.state.category);
        }
        return (
            <div >

                <div className="page">
                    <h3 className="add-listing">Add a New Listing</h3>
                    <div className="form-page">

                            <form className="product-form-flex" onSubmit={this.handleSubmit}>
                                <div className="form-boxes">
                                    {this.renderErrors()}
                                    <div className="individual-input">
                                        <label className="product-form-labels">Name</label>
                                        <br/>
                                        <input
                                            className="product-form-inputs"
                                            onChange={this.update("name")}
                                            type="text"
                                            value={this.state.name}
                                        />
                                    </div>
                                    <br />
                                    <div className="individual-input">
                                    <label className="product-form-labels">Description</label>
                                        <br/>
                                        <textarea
                                            className="product-form-inputs"
                                            onChange={this.update("description")}
                                            value={this.state.description}
                                            cols="30"
                                            rows="10"
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="product-form-labels">Price</label>
                                        <br/>
                                        <input
                                            className="product-form-inputs"
                                            onChange={this.update("price")}
                                            type="number"
                                            value={this.state.price}
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="product-form-labels">Category</label>
                                        <br />
                                        <select
                                            className="product-form-select"
                                            onChange={this.update("category")}  
                                        >
                                            <option value="Jewelry &amp; Accessories" >Jewelry &amp; Accessories</option>
                                            <option value="Clothing &amp; Shoes">Clothing &amp; Shoes</option>
                                            <option value="Home &amp; Living">Home &amp; Living</option>
                                            <option value="Wedding &amp; Party" >Wedding &amp; Party</option>
                                            <option value="Toys &amp; Entertainment" >Toys &amp; Entertainment</option>
                                            <option value="Art &amp; Collectibles" >Art &amp; Collectibles</option>
                                            <option value="Craft Supplies" >Craft Supplies</option>
                                            <option value="Vintage" >Vintage</option>
                                            <option value="Gifts" >Gifts</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="product-form-b-div">
                                        <input 
                                            className="product-form-button"
                                            type="file"
                                            onChange={this.imageFile}
                                        />
                                        <br />
                                        <br />
                                        <button className="product-form-button" type="submit">{this.props.formType}</button>
                                    </div>
                                </div>
                                <div className="image-preview">
                                    <h3 className="product-form-labels">Preview</h3>
                                    <div className="image-input">
                                        {preview}
                                    </div>
                                </div>
                            </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductForm)