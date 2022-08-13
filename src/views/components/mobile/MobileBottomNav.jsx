import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import { PhoneIcon,HomeIcon, MenuIcon as MenuOutline, ShoppingBagIcon as ShoppingOutline, UserIcon } from '@heroicons/react/outline';
import { HomePage } from '../../../services';

const MobileBottomNav = ({ cart, setCart, setCategory, category }) => {
    const { data } = HomePage.GetSettings()
    const handleCart = () => {
        setCart(!cart)
    }
    const handleCategory = () => {
        setCategory(!category)
    }
    console.log(data);
    return (
        <>
            <div className='fixed bottom-0 left-0 w-full px-8 py-2 bg-white shadow-lg 2md:hidden block !z-[100]'>
                <div className="flex justify-between py-2">
                    {category ? <div className="text-black font-semibold text-lg">
                        <MenuOutline className='w-7 h-7' />
                    </div> : <div onClick={handleCategory} className="text-black font-semibold text-lg">
                        {/* <MenuIcon className='w-7 h-7' /> */}
                    </div>}
                    <NavLink to='/'>
                        <div className="text-black font-semibold text-lg">
                            <HomeIcon className='w-7 h-7' />
                        </div>
                    </NavLink>
                    <NavLink to='/' className=' '>
                        <div className="text-black font-semibold text-lg p-3 rounded-full border absolute bottom-6 left-[46%] -translate-x-[20%]  bg-[#4c9a2a]">
                            <PhoneIcon className='w-7 h-7 text-white' />
                           
                        </div>
                    </NavLink>
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