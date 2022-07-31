import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { CgMenuGridO } from "react-icons/cg"
import { GrHomeRounded } from "react-icons/gr"
import { NavLink } from 'react-router-dom';
import { Left, Right } from '../overly';

const MobileBottomNav = () => {
    const [category, setCategory] = useState(false)
    const [cart, setCart] = useState(false)
    return (
        <>
            <div className='fixed bottom-0 left-0 w-full px-8 py-2 bg-white shadow-lg md:hidden block z-20'>
                <div className="flex justify-between py-2">
                    <div onClick={() => setCategory(!category)} className="flex flex-col justify-center items-center text-black font-semibold text-lg">
                        <CgMenuGridO className='text-2xl' />
                    </div>
                    <NavLink to='/'>
                        <div className="flex flex-col justify-center items-center text-black font-semibold text-lg">
                            <GrHomeRounded className='text-2xl' />
                        </div>
                    </NavLink>
                    <div onClick={() => setCart(!cart)} className="flex flex-col justify-center items-center text-black font-semibold text-lg">
                        <HiOutlineShoppingBag className='text-2xl' />
                    </div>
                    <NavLink to={'/profile'} className="flex flex-col justify-center items-center text-black font-semibold text-lg">
                        <AiOutlineUser className='text-2xl' />
                    </NavLink>
                </div>
            </div>
            <Left setOpen={setCategory} open={category} />
            <Right setOpen={setCart} open={cart} />
        </>
    );
};

export default MobileBottomNav;