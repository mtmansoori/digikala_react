import { SET_TOP_SLIDER, SET_LOADING, SET_ERROR } from "./ActionTypes";

const initState = {
    loading: true,
    topSlider: [],
    error: null
};

const ReducerTopSlider = (state = initState, action) => {
    switch (action.type) {
        case SET_TOP_SLIDER: {
            return { ...state, topSlider: action.payload };
        }
        case SET_LOADING: {
            return { ...state, loading: action.payload};
        }
        case SET_ERROR: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}

export default ReducerTopSlider