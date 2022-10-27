import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { SectionHeading } from '../../utils';
import { HomePage } from '../../../../services';
import { bannerImg } from '../../../../constant/imgUri';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { bangla } from '../../../../constant/language';

const CurrentOffer = () => {
    const { data } = HomePage.GetBanner()
    return (

        <div className='py-1 sm:py-4 '>
            <div className="pt-2">
                <SectionHeading text={bangla ? "বর্তমান অফার" : "Current Offer"} />
            </div>
            <div className="relative">

                <div className="px-4 shadow-lg rounded-md py-1 mt-1">


                    <Swiper
                        loop={true}


                        autoplay={{
                            delay: 5000
                        }}
                        breakpoints={{

                            380: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            786: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }
                        }}
                        modules={[Autoplay, Navigation]}

                        navigation={{
                            prevEl: `.offer_prev`,
                            nextEl: `.offer_next`,
                        }}
                        className="mySwiper"
                    >

                        {
                            data?.triple_banner?.map((item) =>
                                <SwiperSlide className='hiji' key={item.id}>
                                    <img src={bannerImg + item?.image} alt='' className='sm:h-[280px] h-[200px] w-full rounded-md !-z-10' />
                                </SwiperSlide>
                            )
                        }



                    </Swiper>
                </div>
                <div className=" absolute inset-0 flex justify-between items-center">
                    <div className={`rounded-full bg-white shadow-lg p-[6px] z-[8] offer_prev`}> <ChevronLeftIcon className='h-4 w-4' /></div>
                    <div className={`rounded-full bg-white shadow-lg p-[6px] z-[8] offer_next`}> <ChevronRightIcon className='h-4 w-4' /></div>
                </div>
            </div>
        </div>
    );
};

// bg-[#4c9a2a]

export default CurrentOffer;


