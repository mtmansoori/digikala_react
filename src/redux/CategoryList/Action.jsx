import { SET_CATEGORY_LIST, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setCategoryList = (categoryList) => {
    return {
        type: SET_CATEGORY_LIST,
        payload: categoryList
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

export const fetchCategoryList = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setCategoryList(res.list));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};