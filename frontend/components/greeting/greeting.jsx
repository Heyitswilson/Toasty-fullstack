import React from 'react'

const Greeting = ( {currentUser, logout}) =>{
    const loggedOut = () => (
        <nav>
            <h3>Splash page placeholder!</h3>
        </nav>
    )

    const loggedIn = () => (
        <div>
            <form>
                <h2>{`Welcome back, ${currentUser.name}!`}</h2>
                <input onClick={logout} type="submit" value="Log out"/>
            </form>
        </div>
    )

    return currentUser ? loggedIn() : loggedOut()
}

export default Greeting