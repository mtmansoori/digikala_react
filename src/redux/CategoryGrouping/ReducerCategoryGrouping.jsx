import * as actionType from "./ActionTypes"
const initState = {
    loading: true,
    categoryGrouping: [],
    error: null
};
const ReducerCategoryGrouping = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CATEGORY_GROUPING: {
            return { ...state, categoryGrouping: action.payload };
        }
        case actionType.SET_LOADING: {
            return { ...state, loading: action.payload };
        }
        case actionType.SET_ERROR: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}

export default ReducerCategoryGrouping;