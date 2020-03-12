import React from 'react'
import { Link } from 'react-router-dom'

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        
        this.handleFile = this.handleFile.bind(this)
        this.imagePreview = this.imagePreview.bind(this)
        this.imageFile = this.imageFile.bind(this)
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
        if (this.state.photoFile) {
            formData.append('product[photo]', this.state.photoFile)
        }
        // if(this.props.formType === "update") {
        //     formData.append("_method", "PATCH")
        // }
        // let newState = Object.assign({}, this.state, {artist_id: this.props.artistId})
        // let newFormData = Object.assign({}, this.state, { artist_id: this.props.artistId })
        // this.props.processForm(formData)
        this.props.processForm(formData, this.props.product.id)
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
        console.log(this.state)
        const preview = this.state.photoUrl ? <img className="preview" src={this.state.photoUrl} /> : null
        return (
            <div >

                <div className="page">
                    <h3 className="add-listing">Add a new Listing</h3>
                    <div className="form-page">

                            <form className="product-form-flex" onSubmit={this.handleSubmit}>
                                <div className="form-boxes">
                                    {this.renderErrors()}
                                    <div className="individual-input">
                                        <label>Name</label>
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
                                        <label>Description</label>
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
                                        <label>Price</label>
                                        <br/>
                                        <input
                                            className="product-form-inputs"
                                            onChange={this.update("price")}
                                            type="number"
                                            value={this.state.price}
                                        />
                                    </div>
                                    <br />
                                    <input type="file"
                                        onChange={this.imageFile}
                                    />
                                    <br />
                                    {/* <label >Category</label>
                                    <select>
                                        <option onChange={this.update("category")} onSelect={this.update("category")} value={this.state.category}>Art & Collectibles</option>
                                        <option onChange={this.update("category")} onSelect={this.update("category")} value={this.state.category}>Clothing & Shoes</option>
                                        <option onChange={this.update("category")} onSelect={this.update("category")} value={this.state.category}>Home & Living</option>
                                        <option onChange={this.update("category")} onSelect={this.update("category")} value={this.state.category}>Vintage</option>
                                    </select> */}
                                    <br />
                                    <button>{this.props.formType}</button>
                                </div>
                                <div className="image-input">
                                    <h3>Preview</h3>
                                    {preview}
                                </div>
                            </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProductForm