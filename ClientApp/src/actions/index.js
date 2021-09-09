import axios from 'axios'
export const SHOW_USERS = 'SHOW_USERS'
export const SHOW_USERS_NEW_RR = 'SHOW_USERS_NEW_RR'

export function showUsers() {

    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response)
            dispatch({ type: SHOW_USERS, payload: response.data })
        })
    }    
}
