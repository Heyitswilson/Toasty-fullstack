import { connect } from 'react-redux';
import SearchPage from './search_page';

const mSTP = state => ({
    search: state.entities.search,
    input: state.entities.input
})

export default connect(mSTP, null) (SearchPage)