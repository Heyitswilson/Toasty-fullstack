import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import React from 'react'
import { Redirect } from 'react-router'

const Searched = ({ component: Component, path, search, exact }) => {
    return (<Route path={path} exact={exact} render={(props) => (
        search != "" ? ( <Component {...props} />) 
        :
            <Redirect to="/products" />
    )}
    
    />)
        
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {

    return (<Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />)
};

const Auth = ({ component: Component, path, loggedIn, exact}) => (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );





const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
    search: state.entities.search
});

export const SearchedRoute = withRouter(connect(mapStateToProps, null)(Searched))

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))