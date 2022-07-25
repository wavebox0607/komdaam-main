import React from 'react';

// import Swiper core and required modules
import { A11y, EffectFade, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { bannerImg } from '../../../../constant/imgUri';
import { HomePage } from '../../../../services';
// import SectionHeading from '../../../Components/Shared/SectionHeading';

const CurrentOffer = () => {

    const { data, isLoading } = HomePage.GetBanner()
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    return (
        <>
            <div className='bg-gray-100 py-12'>

                <div className="mt-10 ">
                    {/* <SectionHeading text={"Current Offers"} /> */}
                </div>

                <div className=" shadow-lg rounded-md p-8 m-4 bg-white">
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
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        className="mySwiper"
                    >
                        {data?.triple_banner?.map((b) =>
                            <SwiperSlide key={b.id}>
                                <img src={bannerImg + b?.image} alt="" />
                            </SwiperSlide>
                        )}


                    </Swiper>
                </div>



            </div>

        </>
    );
};

export default CurrentOffer;