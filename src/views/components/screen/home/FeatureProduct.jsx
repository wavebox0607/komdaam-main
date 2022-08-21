import React from 'react';

import { bangla } from '../../../../constant/language';
import { Product } from '../../../../services';
import ProductCard from '../../card/ProductCard';
import { SectionHeading } from '../../utils';

import { useSelector } from "react-redux";

const FeatureProduct = () => {
    const { data, isLoading } = Product.GetAll()
    const right = useSelector((state) => state.cart.cartOpen)
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
  

    const filterDataSize=10
    const updateFilterData=data?.data?.slice(0, filterDataSize)
 
    return (

        <div className="mx-4 sm:px-0 py-1 ">

             <SectionHeading text={bangla ? "বিশেষ পণ্য" : "Trading"} />
          
<<<<<<< HEAD
            <Slider
                prevEl={prev}
                nextEl={next}
               
                breakpoints={{
                    75: {

                        slidesPerView: 2,

                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: right?2:3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: right?3:4,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: right?4:5,
                        spaceBetween: 20,
                    },
                }}

                className="mySwiper !-z-10"
            >

                {data?.data?.map((item) =>
                    <SwiperSlide key={item?.id}>
                        <ProductCard item={item} />
                    </SwiperSlide>
=======
          
             <div className={right ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 px-2':`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-y-4 xl:gap-y-4 lg:gap-y-4 md:gap-4 px-0 xl:px-0 2xl:px-4 lg:px-4 md:px-4`}>
             {updateFilterData?.map((item) =>
                   
                        <ProductCard item={item} key={item?.id}/>
                   
>>>>>>> e1427d63c9d14d5a221693442d6801eaf7b90486
                )}
                
</div>
        </div>
    );
};

export default FeatureProduct;