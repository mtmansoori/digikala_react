import { SET_CATEGORY_NAV_LIST, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setCategoryNavList = (categoryNavList) => {
    return {
        type: SET_CATEGORY_NAV_LIST,
        payload: categoryNavList
    }
}

export const setLoading = (status) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}

export const setError = (error) => {
    return {
        type: SET_ERROR,
        payload: error
    }
}

export const fetchCategoryNav = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setCategoryNavList(res.services));
            dispatch(setLoading(false));
            
            
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};