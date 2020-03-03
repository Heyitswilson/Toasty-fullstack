import { connect } from 'react-redux'
import LoginForm from './login_form' 
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Sign In"
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)