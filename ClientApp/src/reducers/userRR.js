const initialState = {
    listUsuario: [],
    loading: false
}

export const reducer = (state, action) => {
    state = state || initialState;
    console.log('tt5');
    if (action.type === 'ADD_LIST_USER') {
        console.log('tt6');
        return {
            ...state,
            listUsuario: action.listUser,
            loading: true
        };
    } 
    
    return state;
};


