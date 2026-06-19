import * as actionType from "./ActionType"

const setHotest = (key, data) => {
    return {
        type: actionType.SET_LIST_HOTEST,
        payload: { key, data }
    }
}

const setLoadingHotest = (key, status) => {
    return {
        type: actionType.SET_LOADING_HOTEST,
        payload: { key, status }
    }
}

const setErroHotest = (key, error) => {
    return {
        type: actionType.SET_ERROR_HOTEST,
        payload: { key, error }
    }
}


export const fetchHotest = (option) => {
    return async (dispatch) => {
        dispatch(setLoadingHotest(option, true));
        dispatch(setErroHotest(option, null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setHotest(option, res[option]));
            dispatch(setLoadingHotest(option, false));

        } catch (error) {
            dispatch(setLoadingHotest(option, false));
            dispatch(setErroHotest(option, error.message));
        }
    };
};