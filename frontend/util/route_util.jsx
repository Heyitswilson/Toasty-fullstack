import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import React from 'react'
import { Redirect } from 'react-router'


const Protected = ({ component: Component, path, loggedIn, exact }) => {

    return (<Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />)
};

const User = ({ component: Component, path, correctUser, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        correctUser ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);



const mapStateToProps = (state, ownProps) => ({
    // correctLogin: Boolean(state.session.id) && Boolean(state.session.id === ownProps.match.params.userId)
    // correctLogin: Boolean(state.session.id) && Boolean(state.session.id != state.entities.users[2])
    loggedIn: Boolean(state.session.id)
    // correctUser: window.currentUser,
    // correctUser: Boolean(state.session.id != state.users[0])
});

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);

// export const UserRoute = withRouter(
//     connect(
//         mapStateToProps, null
//     )(User)
// )