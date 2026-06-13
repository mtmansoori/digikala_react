import { combineReducers } from "redux";
import ReducerCategoryNav from "./CategoryNav/ReducerCategoryNav";
import ReducerTopSlider from "./TopSlider/ReducerTopSlider";
import ReducerCategoryList from "./CategoryList/ReducerCategoryList";
import ReducerCategoryListModal from "./CategoryListModal/ReducerCategoryListModal";
import ReducerIncredibleOffers from "./IncredibleOffers/ReducerIncredibleOffers";
import ReducerIncredibleOffers2 from "./IncredibleOffers2/ReducerIncredibleOffers2";

const rootReducer = combineReducers({
    useCategoryNav: ReducerCategoryNav,
    useTopSlider:ReducerTopSlider,
    useCategoryList:ReducerCategoryList,
    useCategoryListModal:ReducerCategoryListModal,
    useIncredibleOffers:ReducerIncredibleOffers,
    useIncredibleOffers2:ReducerIncredibleOffers2
}
)

export default rootReducer;