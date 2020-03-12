import React from 'react'
import {openModal} from '../../actions/modal_actions'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", password: "" }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let user = this.state

        this.props.processForm(user)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        return (
            this.props.errors.map((error, i) => {
                return (<li className="errors" key={i}>
                    {error}
                </li>)
            })
        )
    }

    signup() {
        return( 
            <div>
                <h3 className="header-form">{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label className="label-input">Name</label>
                    <br/>
                    <input 
                        className="form-input"
                        onChange={this.update("name")} 
                        type="text" 
                        value={this.state.name} 
                    />
                    <br />
                    <label className="label-input">Email</label>
                    <br/>
                    <input 
                        className="form-input"
                        onChange={this.update("email")} 
                        type="text" 
                        value={this.state.email} 
                    />
                    <br />
                    <label className="label-input">Password</label>
                    <br/>
                    <input 
                        className="form-input"
                        onChange={this.update("password")} 
                        type="password" 
                        value={this.state.password} 
                    />
                    <br />
                    <input 
                        className="signin-submit"
                        type="submit" 
                        value={this.props.formType} 
                    />
                </form>
            </div>
        )
    }


    login() {
        return (
            <div>
                <div className="signup-form">
                    <h3 className="header-form">{this.props.formType}</h3>
                    <input
                        className="signup-submit"
                        onClick={() => dispatch(openModal("Sign Up"))}
                        type="submit"
                        value={"Sign Up"}
                    />
                </div>
                <form >
                    {this.renderErrors()}
                    <label className="label-input">Email</label>
                    <br/>
                    <input 
                        className="form-input"
                        onChange={this.update("email")} 
                        type="text" 
                        value={this.state.email} 
                    />
                    <br />
                    <label className="label-input">Password</label>
                    <br/>
                    <input 
                        className="form-input"
                        onChange={this.update("password")} 
                        type="password" 
                        value={this.state.password} 
                    />
                    <br />
                    <div className="sign-demo">
                        <input 
                            className="signin-submit"
                            onClick={this.handleSubmit} 
                            type="submit" 
                            value={this.props.formType} 
                        />
                        <button
                            className="demo-submit"
                            onClick={() => this.props.login({ name: "", email: "jack@gmail.com", password: "password" })}
                        >Demo User</button>
                    </div>
                </form>
            </div>
        )
    }



    render() {
        let component;
        this.props.modal === "Sign Up" ? component = this.signup() : component = this.login()
        return component
    }

}

export default SessionForm