import React from 'react';

import { bangla } from '../../../../constant/language';
import { Product } from '../../../../services';

import { SectionHeading } from '../../utils';
<<<<<<< HEAD
import Slider from '../../utils/Slider';
=======
// import Slider from '../../utils/Slider';
import Slider from "react-slick";
import PersonalCareProduct from './../../card/personalCareProduct/PersonalCareProduct';
>>>>>>> e1427d63c9d14d5a221693442d6801eaf7b90486
import { useSelector } from 'react-redux';

const CategoryProduct = () => {
    const { data, isLoading } = Product.GetAll()
    const right = useSelector((state) => state.cart.cartOpen)
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    // if (isFetching) {
    //     return <div className='w-full h-screen flex justify-center items-center'>Fatching...</div> 
    // }
    const settings = {
        
        infinite: false,
        speed: 500,
        slidesToShow: right?5:6,
        slidesToScroll: right?5:6,
        initialSlide: 0,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (

        <div className="mx-4 sm:px-0 py-4 ">

<<<<<<< HEAD
            <SectionHeading text={bangla ? "ব্যক্তিগত যত্ন" : "Personal Care"} />
            <Slider
                prevEl={prev}
                nextEl={next}
                autoplay={{
                    delay: 5000
                }}
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
                    <SwiperSlide className="!-z-10" key={item?.id}>
                        <ProductCard item={item} />
                    </SwiperSlide>
=======
            <SectionHeading text={bangla ? "চলমান পণ্য" : "Running Product"} />
           
 <Slider {...settings} style={{paddingBottom:"10px"}}>
 {data?.data?.map((item) =>
                  
                        <PersonalCareProduct item={item}  key={item?.id}/>
                 
>>>>>>> e1427d63c9d14d5a221693442d6801eaf7b90486
                )}
        </Slider>
   
        </div>
    );
};

export default CategoryProduct;