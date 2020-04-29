import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

const receiveAllUsers = (users) => {
    debugger
    return ({
        type: RECEIVE_ALL_USERS,
        users
    })
}

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => {
    return ({
        type: RECEIVE_ERRORS,
        errors

    })
}

export const login = user => dispatch => {
    return (
        SessionAPIUtil.login(user) 
            .then( currentUser => dispatch(receiveCurrentUser(currentUser)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
    )
}

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then ( currentUser => dispatch(receiveCurrentUser(currentUser)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const fetchUser = userId => dispatch => (
    SessionAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const fetchAllUsers = () => dispatch => (
    SessionAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)),
        err => dispatch(receiveErrors)(err.responseJSON)
        )
)