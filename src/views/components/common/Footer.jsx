import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import payment from '../../../assets/payment.webp'
const Footer = () => {
    return (
        <>
            <FooterTop />
            <FooterBottom />
        </>
    );
};

export default Footer;
const FooterTop = () => {
    return <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

            <div className="flex-grow flex flex-wrap  -mb-10 md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">Customer service</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800"> FAQ</a>
                        </li>
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                        </li>
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">Terms of use</a>
                        </li>
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">Return/Cancel Policy</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">Infomation</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">About us</a>
                        </li>

                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">Promotions</h2>

                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">Contact Us</h2>
                    <nav className="list-none mb-10 space-y-3">
                        <li className='flex justify-start items-center gap-x-4 text-sm leading-6'>
                            <div className="rounded-full border border-gray-700 p-1">
                                <GoLocation className="text-sm" />
                            </div>
                            <a href='/' className="text-gray-600 hover:text-gray-800">137 Tejgaon Industrial Area, Tejgaon. Dhaka-1208.</a>
                        </li>
                        <li className='flex justify-start items-center gap-x-4 text-sm leading-6'>

                            <div className="rounded-full border border-gray-700 p-1">
                                <IoCallOutline className="text-sm" />
                            </div>
                            <a href='/' className="text-gray-600 hover:text-gray-800">(+88) 09611 84 84 84</a>
                        </li>
                        <li className='flex justify-start items-center gap-x-4 text-sm leading-6'>
                            <div className="rounded-full border border-gray-700 p-1">
                                <AiOutlineMail className="text-sm" />
                            </div>
                            <a href='/' className="text-gray-600 hover:text-gray-800">support@ghorebazar.com</a>
                        </li>

                    </nav>
                </div>
            </div>
        </div>

    </footer>
}

const FooterBottom = () => {
    return <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center">Connect with us</h2>
                    <nav className="flex gap-x-2 justify-center">


                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><AiOutlineTwitter className=' text-2xl text-emerald-600' /></div>
                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><FaFacebookF className=' text-2xl text-blue-600' /></div>
                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><AiOutlineTwitter className=' text-2xl text-emerald-600' /></div>
                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><FaFacebookF className=' text-2xl text-blue-600' /></div>



                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center">Payment Method</h2>
                    <div className="">
                        <img src={payment} alt="" />
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center">Call us to know more</h2>

                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center ">Newsletter</h2>
                    <div className="form-control">
                        <div className="flex flex-wrap shadow-lg rounded overflow-hidden">
                            <input type="text" placeholder="Receive the latest news" className="input flex-1 border-none outline-0  focus:border-0 focus:outline-0" />
                            <button className=" border-0 bg-[#50c878] hover:bg-[#1aa749] text-white font-semibold capitalize lg:px-2 xl:px-8 px-1 w-full sm:w-max">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-200 px-6 py-4">
            <p className='text-right'>© 2022, wavebox.com, All Rights Reserved</p>
        </div>
    </footer>
}