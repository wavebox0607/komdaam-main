import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { PhoneIcon, SearchIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/slice/auth';
import { toggleCart } from '../../../redux/slice/cart';
import Options from '../dropdown/Options';
import { bangla, handleLanguage } from '../../../constant/language';
import { HomePage } from '../../../services';
import { settingImg } from '../../../constant/imgUri';
import { Taka } from '../utils';



const Header = ({ left, setLeft }) => {
    const handleLeft = () => {
        setLeft(!left)
    }

    return (
        <div className='fixed top-0 left-0 right-0' style={{ zIndex: 10 }}>
            <HeaderTop />
            <HeaderDown handleLeft={handleLeft} />
        </div>
    );
};

export default Header;

const HeaderDown = ({ handleLeft }) => {
    const { cartList } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const { data } = HomePage.GetSettings()
    const priceList = cartList?.map(p => p.qty * p.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    return (
        <div className='grid grid-cols-12 py-2 px-2 max-h-[45px] shadow-lg bg-white'>
            {/* menu and logo section  */}
            <div className="flex items-center space-x-2 col-span-3 2md:col-span-3 h-[27px] " style={{ zIndex: 100000 }}>
                <div className="hidden 2md:flex">
                    <div className="border border-gray-300 p-1 cursor-pointer" onClick={() => handleLeft()}>
                        <MenuIcon className='h-5 w-5' />
                    </div>
                </div>
                <Link to='/'>
                    <div className="w-[80px] md:w-full  h-[37px] flex items-center">
                        <img src={settingImg + data?.settings?.logo} className="w-full h-[27px] md:h-full object-fit" alt="" />
                    </div>
                </Link>
            </div>

            {/* search section  */}
            <div className="col-span-7 2md:col-span-6 max-h-[30px] relative">
                <input
                    placeholder={bangla ? 'একটি পণ্য অনুসন্ধান করুন...' : "Search a product..."}
                    onChange={(e) => navigate(`/search/${e.target.value}`)} className='border border-gray-300 rounded-full w-full h-full focus:border focus:ring-0 focus:outline-0 focus:border-[#96fcb8] px-4 transition-all duration-300 ease-linear bg-[#ccf8cc] text-xs flex items-center' type="text" />
                <div className="absolute right-2 top-0 bottom-0 flex items-center">
                    <div className="rounded-full p-1 bg-[#4c9a2a] text-white">
                        <SearchIcon className='h-4 w-4 stroke-2 stroke-white' />
                    </div>
                </div>
            </div>

            <div className=" 2md:flex  justify-end col-span-1 2md:col-span-3 space-x-2">

                <div className="flex items-center px-2 space-x-2">
                    <div className="cursor-pointer relative" onClick={() => dispatch(toggleCart())}>
                        <div className="rounded-full absolute -top-2 -right-2 bg-[#4c9a2a] text-white "><p className='text-xs px-1'>{cartList?.length}</p></div>
                        <ShoppingCartIcon className='h-6 w-6 ' />
                    </div>
                    <div className='hidden'>
                        <Taka tk={total} size={24} className="font-bold text-lg hidden" />
                    </div>
                </div>
            </div>
            
            <div className="2md:hidden order-last flex justify-center items-center " >

                {/* <DotsVerticalIcon className='h-5 w-5' /> */}
                <Options />
            </div>



        </div>
    )
}


const HeaderTop = () => {
    const [lan, setLan] = useState(null)
    const { user } = useSelector((state) => state.auth)
    const { data } = HomePage.GetSettings()
    useEffect(() => {
        const result = localStorage.getItem('lan')
        setLan(result)
    }, [])



    const dispatch = useDispatch()
    return (
        <div className={`w-full hidden 2md:flex justify-between bg-[#4c9a2a] h-6`}>
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
                <div className="flex ">
                    <p onClick={() => handleLanguage('en')} className={`${lan === "en" ? 'bg-green-700' : 'bg-none'} cursor-pointer px-2 hover:text-red-600 border-r-2 border-[#fff]`}>EN</p>
                    <p onClick={() => handleLanguage('bn')} className={`${lan === "bn" ? 'bg-green-700' : 'bg-none'} cursor-pointer px-2 hover:text-red-600`}>BN</p>
                </div>

                {/* phone */}
                <div className="flex items-center space-x-1 group">
                    <PhoneIcon className='h-4 w-4 stroke-white stroke-2 group-hover:stroke-red-600 text-white group-hover:text-red-600 transition-all duration-300 ease-linear' />
                    <p className='text-white group-hover:text-red-600'>{data?.settings?.phone}</p>
                </div>
                {/* login */}
                {!user?.verify && <div className="">
                    <NavLink to='/login' className='text-white hover:text-red-600'>{bangla ? "প্রবেশ করুন" : "Login"}</NavLink>
                </div>}
                {/* Signup */}
                {!user?.verify && <div className="">
                    <NavLink to={'/sign-up'} className='text-white hover:text-red-600'>{bangla ? "নিবন্ধন করুন" : "Sign Up"}</NavLink>
                </div>}

                {user?.verify && <NavLink to="/profile" className="">
                    <p className='text-white hover:text-red-600'>{bangla ? "প্রোফাইল" : "Profile"}</p>
                </NavLink>}
                {user?.verify && <div onClick={() => dispatch(logout())} className="cursor-pointer">
                    <p className='text-white hover:text-red-600'>{bangla ? "প্রস্থান" : "Logout"}</p>
                </div>}

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
