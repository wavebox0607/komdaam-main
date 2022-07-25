import { ShoppingBagIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { productImg } from '../../../constant/imgUri';
import { bangla } from '../../../constant/language';
import Taka from '../utils/Taka';

const ProductCard = ({ item }) => {

    console.log(bangla);
    return (
        <div className='bg-white rounded-lg hover:bg-green-200 shadow-md group transition-all duration-300 ease-linear overflow-hidden max-h-full flex flex-col'>
            <div className="w-full h-[145px] md:h-[273px] p-2">
                <img className='w-full h-full bg-white' src={productImg + item?.images[0]} alt="" />
            </div>
            <div className="h-[1px] w-full my-2 group-hover:bg-green-200 bg-gray-200 transition-all duration-300 ease-linear"></div>
            <div className="p-2 flex-1 flex flex-col h-auto">
                <div className="flex-1">
                    <Link to={'/' + item?.slug}><h4 className='text-center font-semibold text-[14px] hover:text-[#50c878]'>{item?.name}</h4></Link>
                    <p className='text-center text-[#888] text-[13px] font-semibold'>{item?.per_unit ? bangla ? "প্রতি একক:" : "Per Unit:" : null}{item?.per_unit}</p>
                </div>
            </div>
            <div className="">
                <AddToCart item={item} />
            </div>
            {/* <div className=" absolute inset-0 bg-green-500" style={{zIndex:-1}}></div> */}
        </div>
    );
};

export default ProductCard;


const AddToCart = ({ item }) => {

    return (<div className="flex justify-between items-center p-2">
        <div className='text-[13px]'><Taka tk={item?.regular_price} className={`text-[#50c878]`} size={23} /></div>
        <div className="rounded-full border border-[#50c878] hover:bg-[#50c878] px-2 stroke-[#50c878] text-[#50c878] hover:text-white hover:stroke-white transition-all duration-300 ease-linear">
            <div className="flex items-center gap-2 ">
                <ShoppingBagIcon className='h-4 w-4  stroke-2 ' />
                <p className='font-semibold  text-sm'>Cart</p>
            </div>
        </div>
    </div>)
}