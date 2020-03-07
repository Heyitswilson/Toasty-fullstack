import React from 'react'
// import { Link } from 'react-router-dom'
import ProductIndexContainer from '../product_index/product_index_container'

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
            <ul>
                <ProductIndexContainer />
            </ul>
            <button 
                className="test"
                onClick={() => this.props.login({name: "", email: "bob@gmail.com", password: "password"})}
            >Demo User</button>
            
        </nav>
        )
    }

    loggedIn(){
        let { currentUser } = this.props
        return(
        <div>
            <h2 className="welcome">{`Welcome back, ${currentUser.name}!`}</h2>
            <ul>
                <ProductIndexContainer />
            </ul>
        </div>
        )
    }

    render(){
        let { currentUser } = this.props
        return currentUser ? this.loggedIn() : this.loggedOut()
    }
}

export default Greeting