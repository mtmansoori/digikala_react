import * as actionType from "./ActionTypes"

export const setCategorygrouping = (data) => {
    return {
        type: actionType.SET_CATEGORY_GROUPING,
        payload: data
    }
}

export const setLoading = (status) => {
    return {
        type: actionType.SET_LOADING,
        payload: status
    }
}

export const setError = (error) => {
    return {
        type: actionType.SET_ERROR,
        payload: error
    }
}


export const fetchCategoryGrouping = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setCategorygrouping(res.grouping));
            dispatch(setLoading(false));

    
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    }
}