import { connect } from 'react-redux';
import { getAllProducts, deleteProduct } from '../../actions/product_actions';
import ProductIndex from './product_index';
import { unmountCategory } from '../../actions/category_actions';

function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let left = array.filter(el => el.name < pivot.name);
    let right = array.filter(el => el.name >= pivot.name);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}

const mapStateToProps = state => ({
    allProducts: quickSort(Object.values(state.entities.products)),
    currentUserId: state.session.id,
    category: state.entities.category
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    deleteProduct: productId => dispatch(deleteProduct(productId)),
    unmountCategory: () => dispatch(unmountCategory())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);