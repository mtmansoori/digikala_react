import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import styles from './Hotest.module.css';

const Hotest = ({ items , title , loading }) => {
    return (
        <div className={styles.container}>
            <h3 className='pb-2 px-2 font-bold'>{title}</h3>
            <Swiper
                slidesPerView={1.6}
                grid={{
                    rows: 3,
                    fill: 'column',
                }}
                spaceBetween={10}

                modules={[Grid, Pagination]}
                className={styles.swiper}
            >

                {items?.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='border border-neutral-300 rounded-2xl py-2 flex items-center justify-center'>

                                <img
                                    className="size-18 rounded-box shrink-0"
                                    src={item.img}
                                    alt={item.title}
                                />

                                <p className="text-neutral-700 items-center text-[11px] px-1 flex-1 leading-6 line-clamp-2">
                                    <span className='rounded-full text-h5-extra inline-flex justify-center items-center w-5.5 h-5.5 text-white bg-red-500 ml-2 leading-5'>{item.id}</span>
                                    {item.title}
                                </p>

                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div >
    );
};

export default Hotest;