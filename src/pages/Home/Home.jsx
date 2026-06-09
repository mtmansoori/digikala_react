import AddressBar from "../../components/Home/AddressBar";
import CategoryNav from "../../components/Home/CategoryNav";
import SearchBar from "../../components/Home/SearchBar";
import { BiBell } from "react-icons/bi";
import TopSlider from "../../components/Home/TopSlider";
import BottomNav from "../../components/BottomNav/BottomNav"
import CategoryList from "../../components/Home/CategoryList";



const Home = () => {
    return (<div  >
        <img src='/assets/images/mobile-banner.gif' alt="" className=" block  object-cover h-9 !-full" />
        <div className="px-3 bg-neutral-100">
            <CategoryNav />
            <div className="w-full flex items-center gap-2">
                <SearchBar />
                <div className="border rounded-full bg-white border-stone-300">
                    <BiBell className="text-3xl text-neutral-600 p-2 w-full h-full" />
                </div>
            </div>
            <AddressBar />
            <TopSlider />
            <CategoryList />
        </div>
        <BottomNav />

    </div>);
}

export default Home;