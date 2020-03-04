// import React from 'react'

// class LoginForm extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {email: "", password: ""}
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.renderErrors = this.renderErrors.bind(this)
//     }
    
//     handleSubmit(e){
//         e.preventDefault()
//         let user = this.state
//         this.props.processForm(user)
//     }

//     update(field){
//         return e =>this.setState({
//             [field]: e.currentTarget.value
//         })
//     }

//     renderErrors(){
//         return (
//             this.props.errors.map((error, i) => {
//                 return (<li key={i}>
//                     {error}
//                 </li>)
//             })
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>                    
//                 {this.renderErrors()}
//                     <label>Email
//                         <input onChange={this.update("email")} type="text" value={this.state.email}/>
//                     </label>
//                     <br/>
//                     <label>Password
//                         <input onChange={this.update("password")} type="password" value={this.state.password}/>
//                     </label>
//                     <br/>
//                     <input type="submit" value={this.props.formType}/>
//                 </form>
//             </div>
//         )
//     }

// }

// export default LoginForm