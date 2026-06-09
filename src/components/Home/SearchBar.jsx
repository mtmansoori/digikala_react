import { BiSearch } from "react-icons/bi";
import { LuScanSearch } from "react-icons/lu";
const SearchBar = () => {
    return (<div className="w-full rounded-full px-2 border border-stone-200 bg-white">
        <div className="flex items-center  justify-between ellipsis ">
            <div >
                <BiSearch className="text-stone-400 h-6 text-3xl" />
            </div>
            <div className="h-10  relative flex-1 ellipsis ">
                <div className="pointer-events-none absolute px-1 inset-0 flex gap-1 items-center text-neutral-500 font-bold opacity-70">
                    <span className="text-sm mb-2 text-neutral-500 opacity-70">جستجو در</span>
                    <img
                        src="/public/assets/images/SearchBar/searchbar-breand.png"
                        alt=""
                        className="h-5  rounded-full inline-block object-cover"
                    />
                </div>
            </div>
            <div>
                <LuScanSearch className="text-stone-400 h-6 text-3xl" />
            </div>

        </div>
    </div>);
}

export default SearchBar;