import { SET_INCREDIBLE_OFFERS, SET_LOADING, SET_ERROR, ADD_INCREDIBLE_OFFERS } from "./ActionTypes"

const initState = {
    loading: true,
    incredibleOffers: [],
    error: null
};

const ReducerIncredibleOffers = (state = initState, action) => {
    switch (action.type) {
        case SET_INCREDIBLE_OFFERS: {
            return { ...state, incredibleOffers: action.payload };
        }
        case ADD_INCREDIBLE_OFFERS:
            return {
                ...state,
                incredibleOffers: [...state.incredibleOffers, action.payload],
            };
        case SET_LOADING: {
            return { ...state, loading: action.payload };
        }
        case SET_ERROR: {
            return { ...state, error: action.payload };
        }
        default:
            return state;
    }
}

export default ReducerIncredibleOffers