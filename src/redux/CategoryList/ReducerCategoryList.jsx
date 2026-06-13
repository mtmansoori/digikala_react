import { SET_CATEGORY_LIST, SET_LOADING, SET_ERROR } from "./ActionTypes";

const initState = {
    loading: true,
    categoryList: [],
    error: null
};

const ReducerCategoryList = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST: {
            return { ...state, categoryList: action.payload };
        }
        case SET_LOADING: {
            return { ...state, loading: action.payload};
        }
        case SET_ERROR: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}

export default ReducerCategoryList