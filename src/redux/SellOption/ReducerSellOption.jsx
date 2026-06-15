import * as actionType from "./ActionType"
const initState = {
    loading: true,
    sellOptionList: [],
    error: null
};

const ReducerSellOption = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_SELL_OPTION: {
            return { ...state, sellOptionList: action.payload };
        }
        case actionType.SET_LOADING: {
            return { ...state, loading: action.payload};
        }
        case actionType.SET_ERROR: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}

export default ReducerSellOption