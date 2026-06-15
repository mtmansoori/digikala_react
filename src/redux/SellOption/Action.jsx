import * as actionType from "./ActionType"

const setSellOption = (data) => {
    return {
        type: actionType.SET_SELL_OPTION,
        payload: data
    }
}

const setLoading = (status) => {
    return {
        type: actionType.SET_LOADING,
        payload: status
    }
}

const setError = (error) => {
    return {
        type: actionType.SET_ERROR,
        payload: error
    }
}

export const fetchSellOption = (option) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setSellOption(res[option]));
            dispatch(setLoading(false));

        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
}