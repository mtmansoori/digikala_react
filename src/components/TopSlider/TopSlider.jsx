import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopSlider } from "../../redux/TopSlider/Action"
import styles from "./TopSlider.module.css"

const TopSlider = () => {
    const { topSlider, loading, error } = useSelector((state) => state.useTopSlider);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopSlider());
    }, [dispatch])

    return (
        <div className='{styles.topSliderWrapper}'>

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
                {topSlider.map((item) => (
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
        </div>
    );
}

export default TopSlider;