import { AiOutlineLeft, AiOutlineArrowLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import MoreCard from "../Home/Incredible/MoreCard";

const SellOption = ({ title, items = [] }) => {

    return (<div className="p-3">
        <div>
            <div className="flex justify-between">
                <h3 className="text-neutral-900 font-bold">{title}</h3>
                <div className="flex flex-wrap items-center gap-1">
                    <span className="leading-5 h-full text-[13px] font-semibold text-neutral-900">مشاهده همه</span>
                    <AiOutlineLeft />
                </div>
            </div>
            <span className="text-neutral-500 mt-1 text-[12px] ">بر اساس سلیقه شما</span>
        </div>
        <Swiper
            dir="rtl"
            spaceBetween={7}
            slidesPerView="auto"
            className="mt-2">
            {items?.map((item, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                    <Card item={item} />
                </SwiperSlide>
            ))

            }
            <SwiperSlide className="w-fit! pb-3 ml-2">
                <div className="h-62 w-34.5 flex flex-col gap-2 items-center justify-center">
                    <div className="border rounded-full w-fit p-2.5">
                        <AiOutlineArrowLeft className="text-[18px]" />
                    </div>
                    <div className="text-center mt-1 text-[13px] text-neutral-900 font-semibold">مشاهده همه</div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>);
}

export default SellOption;