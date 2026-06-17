import SearchBar from "../../components/Home/SearchBar";
import { BiBell } from "react-icons/bi";
import { themeClasses } from "../../Constants/themes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryNav } from "../../redux/CategoryNav/Action"
const CategoryNav = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const { categoryNavList, loading, error } = useSelector(
        (state) => state.useCategoryNav
    );



    const dispatch = useDispatch();

    const handleScroll = () => setIsScrolled(window.scrollY > 60);

    useEffect(() => {
        dispatch(fetchCategoryNav());

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [dispatch]);

    return (
        <div className="sticky top-0 z-99">


            <div className=" w-full p-1 overflow-scroll   bg-neutral-100 scrollbar-none [&::-webkit-scrollbar]:hidden">
                <div className="flex items-center gap-2 px-3 pt-1 whitespace-nowrap">
                    {categoryNavList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleActiveService(index)}
                            className={`flex flex-col border rounded-lg items-center justify-center min-w-18 gap-1 transition-all duration-300 ${isScrolled ? "h-8 align-middle px-3 py-1" : "h-16 min-h-17 "
                                } ${item.active ? themeClasses[item.theme] : themeClasses.default
                                }`}
                        >
                            <img
                                src={item.Simg}
                                alt={item.Stitle}
                                className={`w-8 object-contain transition-all duration-300 ${isScrolled ? "h-0 opacity-0 scale-75" : "h-8 opacity-100"
                                    }`}
                            />

                            <span className="text-xs font-medium -top-1 leading-none">{item.Stitle}</span>


                        </div>
                    ))}
                </div>
            </div >
            <div className="w-full flex items-center gap-2 px-3 py-2 bg-neutral-100 ">
                <SearchBar />
                <div className="border rounded-full bg-white border-stone-300">
                    <BiBell className="text-3xl text-neutral-600 p-2 w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default CategoryNav;