import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { bangla } from '../../../../constant/language';
import { Product } from '../../../../services';
import ProductCard from '../../card/ProductCard';
import { SectionHeading } from '../../utils';
import Slider from '../../utils/Slider';

const CategoryProduct = () => {
    const { data, isLoading } = Product.GetAll()
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    // if (isFetching) {
    //     return <div className='w-full h-screen flex justify-center items-center'>Fatching...</div> 
    // }
    const prev = 'CategoryProductPrev'
    const next = 'CategoryProductNext'

    return (

        <div className="mx-4 sm:px-0 py-12 ">

            <SectionHeading text={bangla ? "ব্যক্তিগত যত্ন" : "Personal Care"} />
            <Slider
                prevEl={prev}
                nextEl={next}
                autoplay={{
                    delay: 5000
                }}
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
                    <SwiperSlide className="!-z-10" key={item?.id}>
                        <ProductCard item={item} />
                    </SwiperSlide>
                )}
            </Slider>
        </div>
    );
};

export default CategoryProduct;