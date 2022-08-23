import React from 'react';

import { bangla } from '../../../../constant/language';
import { Product } from '../../../../services';

import { SectionHeading } from '../../utils';

// import Slider from '../../utils/Slider';
import Slider from "react-slick";
import PersonalCareProduct from './../../card/personalCareProduct/PersonalCareProduct';

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
    slidesToShow: right ? 5 : 6,
    slidesToScroll: right ? 5 : 6,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: right? 6:7,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 2200,
        settings: {
          slidesToShow:right? 5:6,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: right? 4:5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: right? 3:4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:right? 2:3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

    <div className="mx-4 sm:px-0 ">

      <SectionHeading text={bangla ? "চলমান পণ্য" : "Running Product"} />


      <div className='px-3 '>
      <Slider {...settings}>
        {data?.data?.map((item) =>

          <PersonalCareProduct item={item} key={item?.id} />

        )}
      </Slider>
      </div>

    </div>
  );
};

export default CategoryProduct;