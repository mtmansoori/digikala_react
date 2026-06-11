import CategoryListModal from "./CategoryListModal";
import { useCategoryList } from "../../Hooks/Home/useCategoryList";

const CategoryList = () => {
    const { data: categoryList = [], isLoading, isError } = useCategoryList();
    const handleCategoryClick = (index) => {
        const isLastItem = index === categoryList.length - 1;

        if (isLastItem) {
            document.getElementById("my_modal_3")?.showModal();
            return;
        }

        handleActiveService(index);
    };
    if (isLoading) return null;
    if (isError) return null;
    return (
        <>
            <div className="w-full py-4 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
                <div className="flex items-start gap-2 py-2 whitespace-nowrap">
                    {categoryList.map((item, index) => {
                        const isLastItem = index === categoryList.length - 1;

                        return (
                            <div
                                key={index}
                                onClick={() => handleCategoryClick(index)}
                                className="flex shrink-0 w-20 cursor-pointer flex-col rounded-lg items-center justify-start gap-1 transition-all duration-300"
                            >
                                {isLastItem ? (
                                    <div className="w-12 h-12 flex items-center justify-center bg-stone-200 rounded-full">
                                        <div className="flex items-center justify-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-stone-700"></span>
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={item.icon}
                                        alt={item.text}
                                        className="w-12 h-12 object-contain transition-all duration-300"
                                    />
                                )}

                                <span className="w-full text-xs text-center leading-tight whitespace-normal wrap-break-word line-clamp-2">
                                    {item.text}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <CategoryListModal />
        </>
    );
}

export default CategoryList;