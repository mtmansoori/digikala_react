import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/Brands/Action"
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {

    const { brands, loading, error } = useSelector((state) => state.useBrands);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBrands())
    }, [dispatch])
    return (
        <div>
            <div className="flex mt-5  gap-2  ">
                <div>
                        <img src="/public/assets/images/brands/ic-brands.svg" alt="" />
                </div>
                <h5 className="text-neutral-900 font-bold leading-5">محبوب ترین برندها</h5>
            </div>
            <Swiper
                dir="rtl"
                spaceBetween={7}
                slidesPerView="auto"
                className="mt-2">
                {brands?.map((brand) => (
                    <SwiperSlide key={brand.id} style={{ width: 'auto' }}>
                        <div className="card border border-gray-200 bg-base-100 w-22.5 h-32">
                            <div className="w-22.5 h-22.5 p-1.5">
                                <img
                                    src={brand.img}
                                    alt={brand.title}
                                    className="w-19.5 h-19.5 object-contain"
                                />
                            </div>
                            <div className="w-full h-full leading-7.5 text-[12px] border-gray-300 border-t items-center text-center overflow-hidden whitespace-nowrap text-ellipsis">
                                <h2 className="text-[11px]  px-3 truncate">{brand.title}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Brands;