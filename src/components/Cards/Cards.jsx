import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import MoreCard from "../Home/Incredible/MoreCard";
import {useIncredibleOffers} from "/src/Hooks/Home/useIncredibleOffers"
const Cards = ({items = []}) => {
    const total = items.length;
    return (
        <Swiper
            dir="rtl"
            slidesPerView="auto"
            spaceBetween={2}
            grabCursor={true}

            className="w-full py-2"
        >
            {items?.map((item, index) => (
                <SwiperSlide key={index} className="w-fit! pb-3">
                    <Card
                        item={item}
                        index={index}
                        total={total}
                    />
                </SwiperSlide>
            ))}
                 <SwiperSlide className="w-fit! pb-3 ml-2">
                    <MoreCard/>
                 </SwiperSlide>
        </Swiper>
    );
}

export default Cards;