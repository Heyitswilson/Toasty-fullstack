import { connect } from 'react-redux';
import ProductForm from './product_form'
import { updateProduct, getProduct } from '../../actions/product_actions'
import React from 'react'

class UpDateProductForm extends React.Component {
    componentDidMount() {
        this.props.getProduct(this.props.match.params.productId)
    }

    render() {
        const { processForm, formType, product, errors } = this.props;

        if (!product) return null;
        return (
            <ProductForm
                errors={errors}
                processForm={processForm}
                formType={formType}
                product={product} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    formType: "Update Product Listing",
    errors: state.errors.product,
    product: state.entities.products[ownProps.match.params.productId]
})

const mapDispatchToProps = dispatch => ({
    processForm: product => dispatch(updateProduct(product)),
    getProduct: productId => dispatch(getProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpDateProductForm)