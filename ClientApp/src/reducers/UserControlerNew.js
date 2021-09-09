import { SHOW_USERS_NEW } from '../actions'

const initialState = {
    list: []
}
export function showUserNew(state = initialState, action) {
    switch (action.type) {
        case SHOW_USERS_NEW:
            return {
                ...state,
                listUsuarios: action.payload
            }
        default:
            return state
    }
}