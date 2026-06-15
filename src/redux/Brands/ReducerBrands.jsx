import * as actionType from "./ActionTypes"
const initState = {
    loading: true,
    brands: [],
    error: null
};

const ReducerBrands = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_BRANDS: {
            return { ...state, brands: action.payload };
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

export default ReducerBrands