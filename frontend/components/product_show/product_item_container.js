import { connect } from 'react-redux'
import React from 'react'
import ProductItem from './product_item'
import { getProduct, getAllProducts } from '../../actions/product_actions'
import { createCartItem } from '../../actions/cart_item_action'
import { openModal } from '../../actions/modal_actions'
import { unmountProduct } from "../../actions/product_actions";


class ProductItemMiddleMan extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.productId);
  }

  componentWillUnmount() {
    this.props.unmountProduct();
  }

  render() {
    const {
      openModal,
      sessionId,
      product,
      createCartItem,
      cartItem,
    } = this.props;
    if (!product) return null;
    return (
      <ProductItem
        openModal={openModal}
        sessionId={sessionId}
        cartItem={cartItem}
        createCartItem={createCartItem}
        product={product}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      product: state.entities.product,
      cartItem: { customer_id: null, product_id: null },
      sessionId: state.session.id,
    };
}

const mapDispatchToProps = (dispatch) => ({
    getAllProducts: () => dispatch(getAllProducts()),
    openModal: () => dispatch(openModal("Sign In")),
    getProduct: (product) => dispatch(getProduct(product)),
    createCartItem: (product) => dispatch(createCartItem(product)),
    unmountProduct: () => dispatch(unmountProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemMiddleMan)





