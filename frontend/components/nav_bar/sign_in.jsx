import React from 'react'
import { openModal } from '../../actions/modal_actions'

const SignIn = () => {
    return (
        <button className="test" onClick={() => (dispatch(openModal("Sign In")))}>Sign In</button>
    )
}

export default SignIn