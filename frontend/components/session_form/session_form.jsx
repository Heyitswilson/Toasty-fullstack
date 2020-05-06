import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", password: "", inProp: false }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        this.demoSubmit = this.demoSubmit.bind(this)
        this.toTop = this.toTop.bind(this)
    }

    toTop() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    demoSubmit() {
        this.setState({email: "wilson@gmail.com", password: "password"})
    }

    handleSubmit(e) {
        e.preventDefault()
        let user = {name: this.state.name, email: this.state.email, password: this.state.password}

        this.toTop()
        this.props.processForm(user)
        if (this.props.demoBuy) {
            setTimeout( function () {
                document.getElementsByClassName('signin-submit')[0].click()   
                }, 500
            )
        }
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
                <div className="signup-form">
                    <h3 className="header-form">{this.props.formType}</h3>
                    <input
                        className="signup-submit"
                        onClick={() => this.props.openModal("Sign In")}
                        type="submit"
                        value={"Sign In"}
                    />
                </div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div className="session-div">
                        <label className="label-input">Name</label>
                        <br/>
                        <input 
                            className="form-input"
                            onChange={this.update("name")} 
                            type="text" 
                            value={this.state.name} 
                        />
                    </div>
                    <br />
                    <div className="session-div">
                        <label className="label-input">Email</label>
                        <br/>
                        <input 
                            className="form-input"
                            onChange={this.update("email")} 
                            type="text" 
                            value={this.state.email} 
                        />
                    </div>
                    <br />
                    <div className="session-div">
                        <label className="label-input">Password</label>
                        <br/>
                        <input 
                            className="form-input"
                            onChange={this.update("password")} 
                            type="password" 
                            value={this.state.password} 
                        />
                    </div>
                    <br />
                    <input 
                        className="signup-button"
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
                        onClick={() => this.props.openModal("Sign Up")}
                        type="submit"
                        value={"Sign Up"}
                    />
                </div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div className="session-div">
                        <label className="label-input">Email</label>
                        <br/>
                        <input 
                            className="form-input"
                            onChange={this.update("email")} 
                            type="text" 
                            value={this.state.email} 
                        />
                    </div>
                    <br />
                    <div className="session-div">
                        <label className="label-input">Password</label>
                        <br/>
                        <input 
                            className="form-input"
                            onChange={this.update("password")} 
                            type="password" 
                            value={this.state.password} 
                        />
                    </div>
                    <br />
                    <div className="sign-demo">
                        <input 
                            className="signin-submit"
                            type="submit" 
                            value={this.props.formType} 
                        />
                        <button
                            className="demo-submit"
                            type="submit"
                            onClick={() => this.demoSubmit()}
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