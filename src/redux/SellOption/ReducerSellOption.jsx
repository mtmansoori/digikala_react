import * as actionType from "./ActionType"
const initState = {
    loading: {},
    data: {},
    error: {}
};

const ReducerSellOption = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_SELL_OPTION: {
            const { key, data } = action.payload;
            return { ...state, data: { ...state.data, [key]: data } };
        }
        case actionType.SET_LOADING: {
            const { key, status } = action.payload;
            return { ...state, loading: { ...state.loading, [key]: status } };
        }
        case actionType.SET_ERROR: {
            const { key, error } = action.payload;
            return { ...state, error: { ...state.error, [key]: error } };
        }
        default:
            return state;
    }
}
export default ReducerSellOption