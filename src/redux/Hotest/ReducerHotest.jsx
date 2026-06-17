import * as actionType from './ActionType'
const initState = {
    loadingHotest: true,
    hotestList: [],
    errorHotest: null,
};

const ReducerHotest = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_LIST_HOTEST: {
            return { ...state, hotestList: action.payload };
        }
        case actionType.SET_LOADING_HOTEST: {
            return { ...state, loadingHotest: action.payload };
        }
        case actionType.SET_ERROR_HOTEST: {
            return { ...state, errorHotest: action.payload };
        }
        default:
            return state;
    }
};

export default ReducerHotest;