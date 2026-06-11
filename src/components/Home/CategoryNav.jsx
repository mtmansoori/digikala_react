import SearchBar from "../../components/Home/SearchBar";
import { BiBell } from "react-icons/bi";
import { useCategoryNav } from "../../Hooks/Home/useCategoryNav";
import { themeClasses } from "../../Constants/themes";

const CategoryNav = () => {

    const { services, isScrolled, handleActiveService } = useCategoryNav();

    return (<div className="sticky top-0 w-full p-1 overflow-scroll  z-99 bg-neutral-100 scrollbar-none [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-2  py-2 whitespace-nowrap">
            {services.map((item, index) => (
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
        <div className="w-full flex items-center gap-2 py-2">
            <SearchBar />
            <div className="border rounded-full bg-white border-stone-300">
                <BiBell className="text-3xl text-neutral-600 p-2 w-full h-full" />
            </div>
        </div>
    </div >
    );
}

export default CategoryNav;