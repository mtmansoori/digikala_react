import {
    SET_INCREDIBLE_OFFERS,
    SET_LOADING_INCREDIBLE_OFFERS,
    SET_ERROR_INCREDIBLE_OFFERS,
    ADD_INCREDIBLE_OFFERS,
} from "./ActionTypes";

const initState = {
    loadingIncredible: true,
    incredibleOffers: [],
    errorIncredible: null,
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
        case SET_LOADING_INCREDIBLE_OFFERS: {
            return { ...state, loadingIncredible: action.payload }; 
        }
        case SET_ERROR_INCREDIBLE_OFFERS: {
            return { ...state, errorIncredible: action.payload };   
        }
        default:
            return state;
    }
};

export default ReducerIncredibleOffers;