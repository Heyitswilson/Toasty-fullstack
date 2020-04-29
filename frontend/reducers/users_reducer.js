import { RECEIVE_ALL_USERS } from '../actions/session_actions'

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_ALL_USERS:
            // newState[action.currentUser.id] = action.currentUser
            // return newState
            return action.users
        default:
            return state
    }
}

export default usersReducer