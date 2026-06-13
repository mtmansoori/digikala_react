import * as actionType from "./ActionType"

export const setIncredibleOffers2 = (data)=>{
    return {
        type :actionType.SET_INCREDIBLE_OFFERS2,
        payload:data
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


export const fetchIncredbleOffers2 = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setIncredibleOffers2(res.incredible2));
            dispatch(setLoading(false));
            
            
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};