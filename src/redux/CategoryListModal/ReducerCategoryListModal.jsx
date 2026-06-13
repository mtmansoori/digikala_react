import { SET_CATEGORY_LIST_MODAL, SET_MODAL_SERVICES, SET_LOADING, SET_ERROR } from "./ActionType"

const initState = {
    loading: true,
    modalServices:[],
    categoryListModal: [],
    error: null
};

const ReducerCategoryListModal = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST_MODAL: {
            return { ...state, categoryListModal: action.payload };
        }
        case SET_MODAL_SERVICES: {
            return { ...state, modalServices: action.payload, };
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

export default ReducerCategoryListModal