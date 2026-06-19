import * as actionType from './ActionType'
const initState = {
    loadingHotest: {},
    data2: {},
    errorHotest: {},
};

const ReducerHotest = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_LIST_HOTEST: {
            const { key, data } = action.payload;
            return { ...state, data2: { ...state.data2, [key]: data } };
        }
        case actionType.SET_LOADING_HOTEST: {
            const { key, status } = action.payload;
            return { ...state, loadingHotest: { ...state.loadingHotest, [key]: status } };
        }
        case actionType.SET_ERROR_HOTEST: {
            const { key, error } = action.payload;
            return { ...state, errorHotest: { ...state.errorHotest, [key]: error } };
        }
        default:
            return state;
    }
};

export default ReducerHotest;