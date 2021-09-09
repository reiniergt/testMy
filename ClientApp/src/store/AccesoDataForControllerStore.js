const requestUsersType = 'REQUEST_USER';
const receiveUsersType = 'RECEIVE_USER';

const initialState = { listUsuarios: [], isLoading: false };

export const actionCreators = {
    requestCargarUsuarios: loadUsers => async (dispatch, getState) => {
        
        //const stateAfter4 = getState();
        //console.log(`Counter after: ${stateAfter4.listUsuarios}`);
        //dispatch({ type: requestUsersType, loadUsers });

        const url = `api/SampleData/getUser12`;
        const response = await fetch(url);
        const listUsuarios = await response.data;

        dispatch({ type: receiveUsersType, payload: listUsuarios});

        //const stateAfter1 = getState()
        //console.log(`Counter after: ${stateAfter1.listUsuarios}`)
    }
};

export const reducer = (state, action) => {
    state = state || initialState;    

    if (action.type === requestUsersType) {
        return {
            ...state,
            loadUsers: action.loadUsers,
            isLoading: true
        };
    }

    if (action.type === receiveUsersType) {
        //return {
        //    ...state,
        //    loadUsers: action.loadUsers,
        //    listUsuarios: action.listUsuarios,
        //    isLoading: false
        //};
        return Object.assign({}, state, { listUsuarios: action.payload })
    }

    return state;
};