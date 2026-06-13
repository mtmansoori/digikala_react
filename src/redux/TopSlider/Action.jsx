import { SET_TOP_SLIDER, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setTopSlider = (topSliderList) => {
    return {
        type: SET_TOP_SLIDER,
        payload: topSliderList
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

export const fetchTopSlider = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();
            
            dispatch(setTopSlider(res.slider));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};