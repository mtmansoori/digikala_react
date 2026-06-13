import { SET_INCREDIBLE_OFFERS2 , SET_LOADING , SET_ERROR} from "./ActionType"

const initState = {
    loading: true,
    incredibleOffers2: [],
    error: null
};

const ReducerIncredibleOffers2 = (state = initState, action) => {
    switch (action.type) {
        case SET_INCREDIBLE_OFFERS2: {
            return { ...state, incredibleOffers2: action.payload };
        }
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

export default ReducerIncredibleOffers2