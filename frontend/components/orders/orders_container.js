import { connect } from 'react-redux'
import Orders from './orders'

const mapStateToProps = state => ({
    currentUser: state.session.id
})

export default connect(mapStateToProps, null)(Orders)