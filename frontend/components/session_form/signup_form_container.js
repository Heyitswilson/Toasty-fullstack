import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "Sign Up",
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)