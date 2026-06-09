import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const TopSlider = () => {
    const [slider, setSlider] = useState([]);
    const fetchSlidedr = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setSlider(res.slider);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchSlidedr();
    }, [])
    return (<div>
        <Swiper
            dir="rtl"
            spaceBetween={10}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full">
            {slider.map((item) => (
                <SwiperSlide key={item.id} className='flex items-center align-middle'>
                    <a href={item.link} className="block h-45 w-full">
                        <img
                            src={item.Msrc}
                            alt={item.title}
                            title={item.title}
                            className="h-full w-full rounded-md object-cover"
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    </div >);
}

export default TopSlider;