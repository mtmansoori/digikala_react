import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import { useAds } from "../../../Hooks/Home/useAds";
const Ads = () => {
    const { data: ads = [], isLoading, isError } = useAds();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>خطا در دریافت اطلاعات</div>;
    }

    return (<div className="w-full px-1 py-4">
        <Swiper
            slidesPerView={2}
            grid={{
                rows: 2,
                fill: "row",
            }}
            spaceBetween={8}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
        >
            {ads?.map((item, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={item.img}
                        alt={item.title}
                        className="h-28 w-full rounded-xl object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>);
}

export default Ads;