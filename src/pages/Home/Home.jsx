import AddressBar from "../../components/Home/AddressBar";
import CategoryNav from "../../components/Home/CategoryNav";

import TopSlider from "../../components/Home/TopSlider";
import BottomNav from "../../components/BottomNav/BottomNav"
import CategoryList from "../../components/Home/CategoryList";
import Incredible from "../../components/Home/Incredible/Incredible";
import Ads from "../../components/Home/Ads/Ads";
import { useIncredibleOffers } from "/src/Hooks/Home/useIncredibleOffers"
import FastDelivery from "../../components/Home/FastDelivery/FastDelivery";


const Home = () => {
    const { incredible } = useIncredibleOffers();
    
    

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
                    <Incredible items = {incredible} />
                </div>
                <Ads />
                   <div className="-mx-3">
                    <FastDelivery/>
                </div>
            </div>

            <BottomNav />
        </div>
    );
};
export default Home;