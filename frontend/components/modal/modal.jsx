import React from 'react'
import { connect } from 'react-redux'
import LoginFormContainer from '../session_form/login_form_container'
import SignupFormContainer from '../session_form/signup_form_container'
import { closeModal } from '../../actions/modal_actions'

const Modal = ( {modal, closeModal } ) => {
    if (!modal) {
        return null
    }

    let component;

    switch(modal){
        case "Sign Up":
            component = <SignupFormContainer />;
            break;
        case "Sign In":
            component = <LoginFormContainer />;
            break;
        default: 
            return null
    }
    return (
        <div className="modal-background" >
            <div className="close" onClick={closeModal}>X</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )

}

// const mapStateToProps = (state) => ({
//     modal: state.ui.modal
// })

// const mapDispatchToProps = dispatch => ({
//     closeModal: () => dispatch(closeModal())
// })



// class Modal extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             component: <div>
//                             <LoginFormContainer />
//                             <button onClick={() => dispatch(openModal("Sign Up"))
//                                 }>Sign Up</button>
//                        </div>
//         }
//         this.checkModal = this.checkModal.bind(this)
//     }

//     checkModal(modal) {
        
//         switch (modal) {
//             case "Sign Up":
                
//                 this.state.component = <SignupFormContainer />;
//                 break;
//             case "Sign In":
                
//                 this.state.component = 
//                 <div>
//                         <LoginFormContainer />;
//                         <button onClick={() => changeComponent()}>Sign Up</button>
//                 </div>
//                 break;
//             default:
//                 return null
//         }
//     }

//     render(){
//         const { modal, closeModal } = this.props
        
//         if (!modal) {
//             return null
//         }

//         // const changeComponent = () => {
//         //     return(
//         //         this.state.component = <SignupFormContainer />
//         //     )
//         // }

//         this.checkModal()
        
//         return (
//             <div className="modal-background" onClick={closeModal}>
//                 <div className="modal-child" onClick={e => e.stopPropagation()}>
//                     {this.state.component}
//                 </div>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
