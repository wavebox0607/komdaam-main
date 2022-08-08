import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { bangla } from '../../../../constant/language';
import { Product } from '../../../../services';
import ProductCard from '../../card/ProductCard';
import { SectionHeading } from '../../utils';
import Slider from '../../utils/Slider';

const FeatureProduct = () => {
    const { data, isLoading } = Product.GetAll()
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    // if (isFetching) {
    //     return <div className='w-full h-screen flex justify-center items-center'>Fatching...</div> 
    // }
    const prev = 'newArrrival_productThirteen_prev'
    const next = 'newArrrival_productThirteen_next'

    return (

        <div className="mx-4 sm:px-0 py-6 ">

            <SectionHeading text={bangla ? "বিশেষ পণ্য" : "Feature Product"} />
            <Slider
                prevEl={prev}
                nextEl={next}
               
                breakpoints={{
                    75: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}

                className="mySwiper !-z-10"
            >

                {data?.data?.map((item) =>
                    <SwiperSlide key={item?.id}>
                        <ProductCard item={item} />
                    </SwiperSlide>
                )}
            </Slider>
        </div>
    );
};

export default FeatureProduct;