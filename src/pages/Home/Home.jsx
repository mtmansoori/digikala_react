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
import { fetchSellOption } from "../../redux/SellOption/Action"
import { fetchHotest } from "../../redux/Hotest/Action"
import Brands from "../../components/Home/Brands";
import TopSlider from "../../components/TopSlider/TopSlider";
import SellOption from "../../components/SellOption/SellOption";
import * as theme from "../../Constants/themes"
import CategoryGrouping from "../../components/Home/CategoryGrouping";
import Hotest from "../../components/Home/Hotest/Hotest";
import Footer from "../../components/Home/Footer/Footer";
import SupportFab from "../../components/Home/SupportFab";
const Home = () => {

    const { incredibleOffers, loadingIncredible, errorIncredible } = useSelector((state) => state.useIncredibleOffers)
    const { incredibleOffers2, loading2, error2 } = useSelector((state) => state.useIncredibleOffers2)
    const { data, loadingOption, errorOption } = useSelector((state) => state.useSellOption)
    const { data2, loadingHotest, errorHotest } = useSelector((state) => state.useHotest)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIncredbleOffers())
        dispatch(fetchIncredbleOffers2())
        dispatch(fetchSellOption("optionsM1"))
        dispatch(fetchSellOption("optionsM2"))
        dispatch(fetchSellOption("optionsM3"))
        dispatch(fetchSellOption("optionsM4"))
        dispatch(fetchSellOption("optionsM5"))
        dispatch(fetchHotest("hot"))
        dispatch(fetchHotest("mostSell"))
    }, [dispatch])



    return (
        <div className="pb-17 bg-neutral-100 ">
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
                    <Incredible items={incredibleOffers} loading={loadingIncredible} className={theme.bgIncredible} />
                </div>

                <Ads />
                <div className="-mx-3">
                    <FastDelivery />
                </div>
                <Ads />
                <div className="-mx-3">
                    <Incredible items={incredibleOffers2} className={`${theme.bgIncredible2} mt-3`} />
                </div>
                <CategoryGrouping />
                <Brands />
                <div className="-mx-3">

                    <hr className=" w-full h-2 bg-neutral-200 mt-3 border-none" />

                    <SellOption title="کیف و کاور گوشی" items={data.optionsM1} loading={loadingOption?.optionsM1} />

                    <hr className=" w-full h-2 bg-neutral-200 mt-3 border-none" />

                    <SellOption title="ویتامین ها و مواد معدنی" items={data.optionsM2} loading={loadingOption?.optionsM2} />

                    <SellOption title="گوشی موبایل" items={data.optionsM3} loading={loadingOption?.optionsM3} />

                    <hr className=" w-full h-2 bg-neutral-200 mt-3 border-none" />

                    <SellOption title="هدفون، هدست و هندزفری" items={data.optionsM4} loading={loadingOption?.optionsM4} />

                    <hr className=" w-full h-2 bg-neutral-200 mt-3 border-none" />

                    <SellOption title="سایر لوازم خودرو" items={data.optionsM5} loading={loadingOption?.optionsM5} />
                    <hr className=" w-full h-2 bg-neutral-200 mt-3 border-none" />
                    <div className="-mx-3">

                        <Hotest
                            items={data2?.mostSell}
                            title="پرفروش‌ترین کالاها"
                            loading={loadingHotest?.mostSell}
                        />
                        <hr className=" w-full h-2 bg-neutral-200 mt-3 border-none" />
                        <Hotest
                            items={data2?.hot}
                            title="داغ‌ترین چند ساعت گذشته"
                            loading={loadingHotest?.hot}
                        />
                    </div>
                </div>
            </div>
            <SupportFab />
            <Footer />
            <BottomNav />

        </div>
    );
};
export default Home;