import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { HomePage } from '../../../../services';
import { sliderImg } from '../../../../constant/imgUri';


const Hero = () => {
    const { data, isLoading } = HomePage.GetSlider()
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    return (
        <div className='pt-2  hidden md:block'>
            <Swiper
                loop={true}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 1000
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                {data?.data?.map((item) => <SwiperSlide key={item?.image}>
                    <img src={sliderImg + item?.image} className={"w-full h-[600px]"} alt="" />
                </SwiperSlide>)}



            </Swiper>

        </div>
    );
};

export default Hero;