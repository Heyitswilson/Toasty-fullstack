import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props)

        this.loggedOut = this.loggedOut.bind(this)
        this.loggedIn = this.loggedIn.bind(this)
    }


    loggedOut(){
        return(
        <nav>
            <h3 className="quote">If it's handcrafted, vintage, custom, or unique, it's on Toasty.</h3>
            <div className="splash">
                {/* <div className="succulent-statement">It's always succulent season.</div> */}
                <button className="succulent-statement">It's always succulent season.
                    <div className="ceramics-statement">Shop ceramics</div>
                </button>
                <div className="image">Succulent image placeholder</div>
                <div>
                    <div>Image placeholder 2</div>
                    <div className="statement">Catchy statement 2</div>
                </div>
            </div>
        </nav>
        )
    }

    loggedIn(){
        let { currentUser, logout } = this.props
        return(
        <div>
                
            <h2 className="welcome">{`Welcome back, ${currentUser.name}!`}</h2>

            <Link to="/">
                <button className="test" onClick={logout}>Logout</button>
            </Link>
        </div>
        )
    }

    render(){
        let { currentUser } = this.props
        return currentUser ? this.loggedIn() : this.loggedOut()
    }
}

export default Greeting