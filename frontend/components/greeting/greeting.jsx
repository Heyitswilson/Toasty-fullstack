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
        <nav className="splash-nav">
            <h3 className="quote">If it's handcrafted, vintage, custom, or unique, it's on Toasty.</h3>
            <div className="splash">
                {/* <div className="succulent-statement">It's always succulent season.</div> */}
                <div className="succulent-2">
                    <img className="succulent-pots-image" src="https://toasty-dev.s3-us-west-1.amazonaws.com/succulent_pottery.jpg" alt=""/>
                    {/* <button className="succulent-statement">It's always succulent season.
                        <div className="ceramics-statement">Shop ceramics</div>
                    </button> */}
                </div>

                <div className="wall-art-2">
                    <img className="wall-art-image" src="https://toasty-dev.s3-us-west-1.amazonaws.com/ideas.jpg" alt=""/>
                    <div className="statement">Ideas to make your home feel fresh.</div>
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