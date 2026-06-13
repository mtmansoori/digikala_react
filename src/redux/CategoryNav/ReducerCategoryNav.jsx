import { SET_CATEGORY_NAV_LIST, SET_LOADING, SET_ERROR } from "./ActionTypes";

const initState = {
    loading: true,
    categoryNavList: [],
    error: null
};

const ReducerCategoryNav = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORY_NAV_LIST: {
            return { ...state, categoryNavList: action.payload };
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

export default ReducerCategoryNav