import * as actionType from "./ActionType"

const setHotest = (data) => {
    return {
        type: actionType.SET_LIST_HOTEST,
        payload: data
    }
}

const setLoadingHotest = (status) => {
    return {
        type: actionType.SET_LOADING_HOTEST,
        payload: status
    }
}

const setErroHotest = (error) => {
    return {
        type: actionType.SET_ERROR_HOTEST,
        payload: error
    }
}


export const fetchHotest = () => {
    return async (dispatch) => {
        setLoadingHotest(true)
        setErroHotest("")

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setHotest(res.hot));
            dispatch(setLoadingHotest(false));

        } catch (error) {
            dispatch(setLoadingHotest(false));
            dispatch(setErroHotest(error.message));
        }
    };
};