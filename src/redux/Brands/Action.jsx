import * as acionType from "./ActionTypes"

export const setBrands = (data) => {
    return {
        type: acionType.SET_BRANDS,
        payload: data
    }
}

export const setLoading = (status) => {
    return {
        type: acionType.SET_LOADING,
        payload: status
    }
}
export const setError = (error) => {
    return {
        type: acionType.SET_ERROR,
        payload: error
    }
}

export const fetchBrands = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setBrands(res.brands));
            dispatch(setLoading(false));
            
            
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};