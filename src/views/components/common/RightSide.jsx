import { ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { productImg } from '../../../constant/imgUri';
import { bangla } from '../../../constant/language';
import { decrementQty, incrementQty, removeToCartList } from '../../../redux/slice/cart';
import { Taka } from '../utils';

const RightSide = ({ right }) => {
    const { cartList } = useSelector((state) => state.cart)
    const priceList = cartList?.map(p => p.qty * p.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    return (
        <div className={`fixed right-0 top-[100px] bottom-0    ${right ? "w-[330px]" : "w-[0px]"} transition-all duration-300 ease-linear`}>
            <div className="flex flex-col justify-between h-full ">
                <div className="flex-1 w-full overflow-y-scroll example">
                    <h3>দ্রুত ডেলিভারী</h3>
                    {
                        cartList?.map((item) => <SingleCart key={item?.cartId} item={item} />)
                    }
                </div>
                <div className=" w-full mb-3">
                    <div className="flex mx-6 rounded-lg text-white overflow-hidden">
                        <NavLink to='/checkout' className="flex justify-center items-center bg-[#ff9eab] font-semibold flex-1 py-2">{bangla ? "অর্ডার করুন" : "Checkout"}</NavLink>
                        <div className="flex justify-center items-center bg-[#ff7358] flex-1 py-2"><Taka tk={total} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSide;



const SingleCart = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-300 last:border-0">
            <div className="flex flex-col space-y-2 items-center w-[10px] h-full">
                <div onClick={() => dispatch(incrementQty(item?.cartId))} className=""><ChevronUpIcon className='h-4 w-4' /></div>
                <div className="text-xs">{item?.qty}</div>
                <div onClick={() => dispatch(decrementQty(item?.cartId))} className=""><ChevronDownIcon className='h-4 w-4' /></div>
            </div>
            <div className="h-[40px] w-[40px] flex items-center">
                <img src={productImg + item?.images[0]} alt="" />
            </div>
            <div className="flex flex-col w-[120px] ">
                <Link to={'/product/' + item?.slug}><div className="text-[13px] text-[#1d1d1d] text-justify w-full">{item?.name.slice(0, 30)}</div></Link>
                <Taka className={"text-[10px]"} tk={item?.price} />
            </div>
            <div className="flex flex-col justify-center w-[63px]">

                <Taka tk={item?.price * item?.qty} />
            </div>
            <div className="flex flex-col justify-center items-center w-[10px] mr-4">
                <div onClick={() => dispatch(removeToCartList(item?.cartId))} className=""><XIcon className='h-4 w-4' /></div>
            </div>
        </div>
    )
}