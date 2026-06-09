import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [incredible, setIncredible] = useState([]);

    const fetchIndredible = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();

            setIncredible(res.incredible);
        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fetchIndredible();
    }, []);
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
        </Swiper>
    );
}

export default Cards;