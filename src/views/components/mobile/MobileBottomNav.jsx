import React from 'react';
import { NavLink } from 'react-router-dom';

import { ShoppingBagIcon } from '@heroicons/react/solid';
import { MenuIcon, PhoneIcon, HomeIcon, ShoppingBagIcon as ShoppingOutline, UserIcon } from '@heroicons/react/outline';
import { IoMenuOutline } from 'react-icons/io5';





const MobileBottomNav = ({ cart, setCart, setCategory, category }) => {


    const handleCart = () => {
        setCart(!cart)
    }
    const handleCategory = () => {
        setCategory(!category)
    }

const phnftn=()=>{
    window.ReactNativeWebView.postmessage({message: "Message here"});
}
    return (
        <>
            <div className='fixed bottom-0 left-0 w-full px-8 py-2 bg-white shadow-lg 2md:hidden block !z-[100]'>
                <div className="flex justify-between py-2">
                    {category ? <div onClick={handleCategory} className="text-black font-semibold text-lg">
                        <IoMenuOutline className='text-[28px]' />
                    </div> : <div onClick={handleCategory} className="text-black font-semibold text-lg">
                        <MenuIcon className='w-7 h-7' />
                    </div>}
                    <NavLink to='/'>
                        <div className="text-black font-semibold text-lg">
                            <HomeIcon className='w-7 h-7' />
                        </div>
                    </NavLink>

                    {/* <a href='tel:+8801865460756' onClick='console.log("The link was clicked."); return false' >
                        <div className="text-black font-semibold text-lg p-3 rounded-full border absolute bottom-6 left-[46%] -translate-x-[20%]  bg-[#4c9a2a]">
                            <PhoneIcon className='w-7 h-7 text-white' />

                        </div>
                    </a> */}

                    
                        <div className="text-black font-semibold text-lg p-3 rounded-full border absolute bottom-6 left-[46%] -translate-x-[20%]  bg-[#4c9a2a]" onClick={phnftn}>
                            <PhoneIcon className='w-7 h-7 text-white' />

                        </div>
               
                    {cart ? <div className=" items-center text-black font-semibold text-lg">
                        <ShoppingOutline className='  w-7 h-7' />
                    </div> :
                        <div onClick={handleCart} className=" items-center text-black font-semibold text-lg">
                            <ShoppingBagIcon className=' w-7 h-7' />
                        </div>}
                    <NavLink to={'/profile'} className="flex flex-col justify-center items-center text-black font-semibold text-lg">
                        <UserIcon className='w-7 h-7' />
                    </NavLink>
                </div>
            </div>

        </>
    );
};


export default MobileBottomNav;

