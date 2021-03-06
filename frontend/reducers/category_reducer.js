import { RECEIVE_CATEGORY, UNMOUNT_CATEGORY } from '../actions/category_actions'

const categoryReducer = (state="All", action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CATEGORY:
            return action.category
        case UNMOUNT_CATEGORY:
            return "All"
        default:
            return state
    }
}

export default categoryReducer