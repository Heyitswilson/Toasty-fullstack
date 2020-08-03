import { connect } from 'react-redux';
import OrderItems from './order_items';
import { getAllOrderItems } from '../../actions/order_items_actions';

const mapStateToProps = state => {
    return ({
        userOrderItems: Object.values(state.entities.orderItems),
        currentUserId: state.session.id
    })
}

const mapDispatchToProps = dispatch => ({
    getAllOrderItems: () => dispatch(getAllOrderItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderItems)