import React from 'react';

// import Swiper core and required modules
import { A11y, EffectFade, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { HomePage } from '../../../../services';
import { SectionHeading } from '../../utils';
import { bannerImg } from '../../../../constant/imgUri';

const Banner = () => {
    const { data } = HomePage.GetBanner()
    return (
        <>
            <div className=''>

                <div className="mt-10 ">
                    <SectionHeading text={"Current Offers"} />
                </div>

                <div className=" shadow-lg rounded-md p-8 m-4 ">
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        navigation={true}

                        modules={[A11y, EffectFade, Navigation]}
                        breakpoints={{

                            380: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }
                        }}
                        className="mySwiper !-z-10"
                    >
                        {data?.triple_banner?.map((b) =>
                            <SwiperSlide className='overflow-visible' key={b?.id}>
                                <img className='overflow-visible' src={bannerImg + b?.image} alt="" />
                            </SwiperSlide>
                        )}


                    </Swiper>
                </div>



            </div>

        </>
    );
};

export default Banner;