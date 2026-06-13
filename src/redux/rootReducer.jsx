import { combineReducers } from "redux";
import ReducerCategoryNav from "./CategoryNav/ReducerCategoryNav";
import ReducerTopSlider from "./TopSlider/ReducerTopSlider";
import ReducerCategoryList from "./CategoryList/ReducerCategoryList";
import ReducerCategoryListModal from "./CategoryListModal/ReducerCategoryListModal";

const rootReducer = combineReducers({
    useCategoryNav: ReducerCategoryNav,
    useTopSlider:ReducerTopSlider,
    useCategoryList:ReducerCategoryList,
    useCategoryListModal:ReducerCategoryListModal
}
)

export default rootReducer;