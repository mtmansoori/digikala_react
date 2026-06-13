import { SET_INCREDIBLE_OFFERS, SET_LOADING, SET_ERROR , ADD_INCREDIBLE_OFFERS} from "./ActionTypes"

export const setIncredibleOffers = (data) => {
    return {
        type: SET_INCREDIBLE_OFFERS,
        payload: data
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


export const fetchIncredbleOffers = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setIncredibleOffers(res.incredible));
            dispatch(setLoading(false));
            
            
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};

export const addIncredibleOffers = (offer) => ({
  type: ADD_INCREDIBLE_OFFERS,
  payload: {
    id: Date.now(),
    ...offer,
  },
});
