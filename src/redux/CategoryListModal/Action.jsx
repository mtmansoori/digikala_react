import { SET_CATEGORY_LIST_MODAL, SET_MODAL_SERVICES, SET_LOADING, SET_ERROR } from "./ActionType"

export const setCategoryListModal = (categoryListModal) => {
    return {
        type: SET_CATEGORY_LIST_MODAL,
        payload: categoryListModal
    }
}

export const setModalServices = (data) => ({
    type: SET_MODAL_SERVICES,
    payload: data,
});

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

export const fetchCategoryListModal = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const data = await fetch("/db.json");

            if (!data.ok) {
                throw new Error("Failed to fetch category nav");
            }

            const res = await data.json();

            dispatch(setCategoryListModal(res.listModal));
            dispatch(setModalServices(res.modalService));
            
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            dispatch(setError(error.message));
        }
    };
};