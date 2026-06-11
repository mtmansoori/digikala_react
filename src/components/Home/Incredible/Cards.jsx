import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import MoreCard from "./MoreCard";
import {useIncredibleOffers} from "../../../Hooks/Home/useIncredibleOffers";

const Cards = () => {
    const { incredible } = useIncredibleOffers();
    return (
        <Swiper
            dir="rtl"
            slidesPerView="auto"
            spaceBetween={2}
            grabCursor={true}

            className="w-full py-2"
        >
            {incredible?.map((item, index) => (
                <SwiperSlide key={index} className="w-fit! pb-3">
                    <Card
                        item={item}
                        index={index}
                        total={incredible.length}
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