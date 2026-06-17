import * as actionType from "./ActionType"

const setSellOption = (key, data) => {
    return {
        type: actionType.SET_SELL_OPTION,
        payload: { key, data }
    }
}

const setLoading = (key, status) => {
    return {
        type: actionType.SET_LOADING,
        payload: { key, status }
    }
}

const setError = (key, error) => {
    return {
        type: actionType.SET_ERROR,
        payload: { key, error }
    }
}

export const fetchSellOption = (option) => {
    return async (dispatch) => {
        dispatch(setLoading(option , true));
        dispatch(setError(option , null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setSellOption(option , res[option]));
            dispatch(setLoading(option , false));

        } catch (error) {
            dispatch(setLoading(option , false));
            dispatch(setError(option , error.message));
        }
    };
}