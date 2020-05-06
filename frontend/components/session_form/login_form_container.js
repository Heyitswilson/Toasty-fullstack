import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions'
import { receiveBuy } from '../../actions/demo_buy_action'

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Sign In",
    modal: state.ui.modal,
    demoBuy: state.entities.demoBuy
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    receiveBuy: () => dispatch(receiveBuy())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)