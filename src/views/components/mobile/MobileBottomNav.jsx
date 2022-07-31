import React from 'react';
import { AiOutlineUser } from "react-icons/ai"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { CgMenuGridO } from "react-icons/cg"
import { GrHomeRounded } from "react-icons/gr"
import { NavLink } from 'react-router-dom';

const MobileBottomNav = ({ cart, setCart, setCategory, category }) => {

    const handleCart = () => {
        setCart(!cart)
    }
    const handleCategory = () => {
        setCategory(!category)
    }
    return (
        <>
            <div className='fixed bottom-0 left-0 w-full px-8 py-2 bg-white shadow-lg md:hidden block z-50'>
                <div className="flex justify-between py-2">
                    <div onClick={() => handleCategory()} className="text-black font-semibold text-lg p-2">
                        <CgMenuGridO className='text-2xl' />
                    </div>
                    <NavLink to='/'>
                        <div className="text-black font-semibold text-lg">
                            <GrHomeRounded className='text-2xl' />
                        </div>
                    </NavLink>
                    <div className=" items-center text-black font-semibold text-lg">
                        <HiOutlineShoppingBag onClick={() => handleCart()} className='text-2xl' />
                    </div>
                    <NavLink to={'/profile'} className="flex flex-col justify-center items-center text-black font-semibold text-lg">
                        <AiOutlineUser className='text-2xl' />
                    </NavLink>
                </div>
            </div>

        </>
    );
};

export default MobileBottomNav;