import AddressBar from "../../components/Home/AddressBar";
import CategoryNav from "../../components/Home/CategoryNav";

import TopSlider from "../../components/Home/TopSlider";
import BottomNav from "../../components/BottomNav/BottomNav"
import CategoryList from "../../components/Home/CategoryList";
import AmazingOffers from "../../components/Home/AmazingOffers/AmazingOffers";



const Home = () => {
    return (
        <div className="pb-20 bg-neutral-100">
            <img
                src="/assets/images/mobile-banner.gif"
                alt=""
                className="block object-cover h-9 w-full"
            />

            <CategoryNav />

            <div className="px-3">
                <AddressBar />
                <TopSlider />
                <CategoryList />

                <div className="-mx-3">
                    <AmazingOffers />
                </div>
            </div>

            <BottomNav />
        </div>
    );
};
export default Home;