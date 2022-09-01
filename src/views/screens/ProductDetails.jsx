import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productImg } from '../../constant/imgUri';
import { bangla } from '../../constant/language';
import { Product } from '../../services';
import { Taka } from '../components/utils';
import ImageZoom from "../components/utils/ImageZoom";
import { AddToCart, Description } from '../components/screen/product-details';
import { useSelector } from 'react-redux';
import RelatedProducts from '../components/screen/product-details/RelatedProducts';

import {
    FacebookIcon,
    TwitterIcon,
    FacebookShareButton,
    TwitterShareButton
} from "react-share";

const ProductDetails = () => {
    let { slug } = useParams();
    const { data } = Product.GetSingle(slug)
    return (
        <div className='px-4 py-1 md:py-6 md:my-6 my-1'>
            <Details slug={slug} />

            <Description desc={data?.data?.description} />

            <div className=" py-5">
                <RelatedProducts slug={data?.data?.slug} />
            </div>
        </div>
    )
}



export default ProductDetails;

export const Details = ({ slug }) => {

    const [unit, setUnit] = useState(null)
    const { data, isLoading } = Product.GetSingle(slug)

    const { cartList } = useSelector((state) => state.cart)

    useEffect(() => {
        if (data?.data?.variant) {
            setUnit(data?.data?.variant[0])
        }
    }, [data?.data?.variant])


    if (isLoading) {
        return <div className='w-full h-[450px] flex justify-center items-center'>Loading...</div>
    }


    return (

        <div className="grid md:grid-cols-8 grid-cols-1 md:gap-4 ">

            <div className="md:col-span-3 h-[400px] sm:cursor-zoom-in overflow-hidden ">
                {data?.data?.images?.slice(0, 1).map((item, id) =>
                    <ImageZoom
                        key={id}
                        img={productImg + item}
               
                    />
                )}
            </div>
            <div className="md:col-span-4 md:px-2">
                <div className="flex items-center text-[#111111] text-[14px]">
                    <Link to={"/"} ><p>{bangla ? "হোম" : "Home"}</p></Link>
                    <ChevronRightIcon className='h-4 w-4' />
                    <Link to={"/category/" + data?.data?.category_slug} ><p>{data?.data?.category}</p></Link>
                    <ChevronRightIcon className='h-4 w-4' />
                    <Link to={"/subcategory/" + data?.data?.subcategory_slug} ><p>{data?.data?.subcategory}</p></Link>
                </div>
                <h2 className='text-[25px] font-bold text-[#1d1d1d]'>{data?.data?.name}</h2>
                <p className='text-[18px] text-[#888]  font-normal'>{data?.data?.per_unit ? bangla ? "প্রতি একক:" : "Per Unit:" : null} <span className='font-bold text-[#777]'>{data?.data?.per_unit}</span> </p>


                <div className="flex items-end space-x-3 ">
                    {
                       data?.data?.discount_type==='no_discount' ?<Taka tk={data?.data?.regular_price} additional={unit && unit?.additional_price} className={'text-[#4aa02c] font-bold text-[28px] -m-2 mt-0'} size={40} />: <Taka tk={data?.data?.discount_price} additional={unit && unit?.additional_price} className={'text-[#4aa02c] font-bold text-[28px] -m-2 mt-0'} size={40} />
                    }
                      {
                        data?.data?.discount_amount==='0.00'? <></>: <Taka tk={data?.data?.regular_price} additional={unit && unit?.additional_price} className={ 'text-red-600 line-through font-semibold text-[16px] pt-6'} size={20} />
                      }
                   
                </div>

                {data?.data?.variant &&
                    <div className="flex items-center space-x-2 my-2">
                        <h4>{bangla ? "ইউনিট" : "Unit"}:</h4>
                        {data?.data?.variant?.map((item) => <Unit key={item?.id} item={item} active={unit?.id === item?.id} onClick={() => unit ?  setUnit(item) : setUnit(null) }/>)}
                    </div>}

                {/* Add to cart  */}
                <AddToCart product={data?.data} unit={unit} already={cartList?.filter(i => i.productId === data?.data?.id)} />



                {/* Share Button  */}
                <div className="my-3 flex items-center space-x-2">
                    <h2 className='text-black font-semibold'>{bangla ? "ভাগ" : "Share"}: </h2>
                    <FacebookShareButton url={window.location.href}>
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href} >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                </div>



            </div>
        </div>


    );
};







const Unit = ({ item, onClick, active }) => {
   
    return (<div onClick={onClick} className={`border border-gray-100 rounded-md p-1 flex cursor-pointer ${active ?"bg-pink-400 text-white" : "bg-gray-50 text-black" }transition-all duration-300 ease-linear`}>
        <p>{item?.volume}</p>
        <p>{item?.unit}</p>
    </div>)
}