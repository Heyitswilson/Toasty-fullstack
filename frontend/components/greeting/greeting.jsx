import React from 'react'

const Greeting = ( {currentUser, logout}) =>{
    const loggedOut = () => (
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

    const loggedIn = () => (
        <div>
            <form>
                <h2 className="welcome">{`Welcome back, ${currentUser.name}!`}</h2>
                <input onClick={logout} type="submit" value="Log out"/>
            </form>
        </div>
    )

    return currentUser ? loggedIn() : loggedOut()
}

export default Greeting