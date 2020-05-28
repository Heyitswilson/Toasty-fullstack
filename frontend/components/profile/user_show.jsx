import React from 'react'
import UserProductIndexContainer from '../product_index/user_product_index_container'

class UserShow extends React.Component{
    constructor(props) {
        super(props)
        
        this.loggedIn = this.loggedIn.bind(this)
    }

    loggedIn(){
        return(
            <div >
                <div className="user-shop">Your Store</div>
                <div> <UserProductIndexContainer /> </div>
            </div>
        )
    }

    render() {
        return this.loggedIn()
    }
}

export default UserShow