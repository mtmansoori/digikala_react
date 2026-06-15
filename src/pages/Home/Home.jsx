import AddressBar from "../../components/Home/AddressBar";
import CategoryNav from "../../components/Home/CategoryNav";


import BottomNav from "../../components/BottomNav/BottomNav"
import CategoryList from "../../components/Home/CategoryList";
import Incredible from "../../components/Home/Incredible/Incredible";
import Ads from "../../components/Home/Ads/Ads";
import FastDelivery from "../../components/Home/FastDelivery/FastDelivery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIncredbleOffers } from "../../redux/IncredibleOffers/Action"
import { fetchIncredbleOffers2 } from "../../redux/IncredibleOffers2/Action";
import Brands from "../../components/Home/Brands";
import TopSlider from "../../components/TopSlider/TopSlider";

const Home = () => {

    const { incredibleOffers, loading, error } = useSelector((state) => state.useIncredibleOffers)
    const { incredibleOffers2, loading2, error2 } = useSelector((state) => state.useIncredibleOffers2)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIncredbleOffers())
        dispatch(fetchIncredbleOffers2())
    }, [dispatch])



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
                    <Incredible items={incredibleOffers} className={`bg-[linear-gradient(225deg,#d22c4e_0%,#ee384e_100%)]`} />
                </div>

                <Ads />
                <div className="-mx-3">
                    <FastDelivery />
                </div>
                <Ads />
                <div className="-mx-3">
                    <Incredible items={incredibleOffers2} className={`bg-[linear-gradient(225deg,#6BB927_0%,#9DC44D_100%)] mt-3`} />
                </div>

                <Brands/>
            </div>

            <BottomNav />
        </div>
    );
};
export default Home;