const loadData = 'LOAD_DATA';
const initialState = { list: [] };

export const actionCreators = {
    loadDataView: () => ({ type: loadData }),
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === loadData) {
        console.log('oo0');
        return {
            ...state,
            list: state.listUsuarios
        };
    }

    

    return state;
};