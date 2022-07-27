import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import {  MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { SearchIcon, PhoneIcon } from '@heroicons/react/solid'
import logo from '../../../assets/logo1.png'
import { Link, NavLink } from 'react-router-dom';
const Header = ({ left, setLeft, right, setRight }) => {
    const handleLeft = () => {
        setLeft(!left)
    }
    const handleRight = () => {
        setRight(!right)
    }
    return (
        <div className='fixed top-0 left-0 right-0' style={{ zIndex: 10000000 }}>
            <HeaderTop />
            <HeaderDown handleLeft={handleLeft} handleRight={handleRight} />
        </div>
    );
};

export default Header;

const HeaderDown = ({ handleRight, handleLeft }) => {
    return (
        <div className='grid grid-cols-12 py-2 px-2 max-h-[45px] shadow-lg bg-white'>
            {/* menu and logo section  */}
            <div className="flex items-center space-x-2 col-span-4 md:col-span-3 h-[27px] " style={{ zIndex: 100000 }}>
                <div className="">
                    <div className="border border-gray-300 p-1 cursor-pointer" onClick={() => handleLeft()}>
                        <MenuIcon className='h-5 w-5' />
                    </div>
                </div>
                <Link to='/'>
                    <div className="w-[100px] h-full">
                        <img src={logo} className="w-full h-full object-fit" alt="" />
                    </div>
                </Link>
            </div>

            {/* search section  */}
            <div className="col-span-7 md:col-span-6 max-h-[30px] relative">
                <input className='border border-gray-300 rounded-full w-full h-full focus:border focus:ring-0 focus:outline-0 focus:border-[#96fcb8] px-4 transition-all duration-300 ease-linear bg-[#ccf8cc]' type="text" />
                <div className="absu absolute right-2 top-0 bottom-0 flex items-center  ">
                    <div className="rounded-full p-1 bg-[#50c878] text-white">
                        <SearchIcon className='h-4 w-4 stroke-2 stroke-white' />
                    </div>
                </div>
            </div>

            <div className="flex justify-end col-span-4 md:col-span-3 space-x-2">
                <NavLink to='/offer' className="">
                    <p className='font-semibold text-md font-sans text-white px-6 py-1 rounded-lg bg-[#50c878]'>Offer</p>
                </NavLink>
                <div className="">
                    <p className='font-semibold text-md font-sans text-white px-6 py-1 rounded-lg bg-[#50c878]'>Need help</p>
                </div>
                <div className="flex items-center px-2">
                    <div className="cursor-pointer" onClick={() => handleRight()}>

                        <ShoppingCartIcon className='h-6 w-6 ' />
                    </div>
                </div>
            </div>

        </div>
    )
}


const HeaderTop = () => {
    const [lan, setLan] = useState(null)
    useEffect(() => {

        const result = localStorage.getItem('lan')
        setLan(result)

    }, [])

    const handleLanguage = (str) => {
        localStorage.setItem('lan', str)
        window.location.reload()
    }
    return (
        <div className={`w-full flex justify-between bg-[#50c878] h-6`}>
            {/* <div className='flex items-center divide-x-2 space-x-2'> */}
                {/* <p className='cursor-pointer text-white hover:text-red-600 transition-all duration-300 ease-linear'>Hot Offer</p> */}
                <div className='flex items-center space-x-1 pl-2'>
                    <SvgComponent className=" fill-white hover:fill-red-500 transition-all duration-300 ease-linear" />
                    <SvgComponent className=" fill-white hover:fill-red-500 transition-all duration-300 ease-linear" />
                    <SvgComponent className=" fill-white hover:fill-red-500 transition-all duration-300 ease-linear" />
                    <SvgComponent className=" fill-white hover:fill-red-500 transition-all duration-300 ease-linear" />
                </div>
            {/* </div> */}
            <div className="space-x-4 flex pr-2 text-sm items-center font-medium text-white">
                {/* language  */}
                <div className="divide-x-2 flex space-x-2 ">
                    <p onClick={() => handleLanguage('en')} className={`${lan === "en" ? 'bg-green-700' : 'bg-none'} cursor-pointer  hover:text-red-600`}>EN</p>
                    <p onClick={() => handleLanguage('bn')} className={`${lan === "bn" ? 'bg-green-700' : 'bg-none'} cursor-pointer pl-2  hover:text-red-600`}>BN</p>
                </div>

                {/* phone */}
                <div className="flex items-center space-x-1 group">
                    <PhoneIcon className='h-4 w-4 stroke-white stroke-2 group-hover:stroke-red-600 text-white group-hover:text-red-600 transition-all duration-300 ease-linear' />
                    <p className='text-white group-hover:text-red-600'>01991666031</p>
                </div>
                {/* login */}
                <div className="">
                    <p className='text-white hover:text-red-600'>Login</p>
                </div>
                {/* Signup */}
                <div className="">
                    <p className='text-white hover:text-red-600'>Sign Up</p>
                </div>
            </div>
        </div>
    )
}









const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 30 30"

        {...props}
    >
        <path d="M15 3C8.373 3 3 8.373 3 15c0 6.016 4.432 10.984 10.206 11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C22.481 26.083 27 21.075 27 15c0-6.627-5.373-12-12-12z" />
    </svg>
)
