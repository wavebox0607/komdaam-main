import React from 'react';
import { GiShoppingBag } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
import { bangla } from '../../../constant/language';
import { toggleCart } from '../../../redux/slice/cart';
import Taka from '../utils/Taka';
import { useLocation } from 'react-router-dom'

const CartPopUp = ({ right }) => {

    const dispatch = useDispatch()
    const { cartList } = useSelector((state) => state.cart)
    const priceList = cartList?.map(p => p.qty * p.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    const location = useLocation()
    return (
        <div className={`${location?.pathname === "/checkout" && "hidden"}`}>
            <div className={`${right ? "hidden" : "hidden 2md:block"} `}>
                <div onClick={() => dispatch(toggleCart())} className='fixed z-20 p-2  right-0 top-1/2  shadow-lg rounded-l-md cursor-pointer md:block bg-[#4c9a2a]'>
                    <div className="flex flex-col items-center space-y-2 p-1">
                        <div className="flex justify-center py-1 gap-x-1 items-center ">
                            <GiShoppingBag className='font-semibold ' color='white' />
                            <div className="flex flex-col leading ">
                                <span className=' font-semibold text-white text-sm'>{cartList?.length} {bangla ? "আইটেম" : "item"}
                                </span>

                            </div>

                        </div>
                        <span className='bg-white px-2 py-1 text-xs  rounded-md text-black font-semibold tracking-wider hover:bg-gray-200'><Taka tk={total} size={16} /></span>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default CartPopUp;