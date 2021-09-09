const changeChartSerie = 'CHANGE_CHART_SERIE';
const initialState = {
    graphProtein: 0,
    graphCarb: 0,
    graphSugar: 0,
};

export const actionCreators = {
    cambioEnGrafico: () => ({ type: changeChartSerie })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === changeChartSerie) {
        return {
            ...state,
            graphProtein: state.graphProtein + 10,
            graphCarb: state.graphCarb + 1,
            graphSugar: state.graphSugar + 1000,
            
            seriesPrincipal: [{
                data: [
                    state.graphProtein,
                    state.graphCarb,
                    state.graphSugar
                ]
            }]
           
        };
    }

    

    return state;
};