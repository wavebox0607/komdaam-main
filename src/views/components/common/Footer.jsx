import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import payment from '../../../assets/payment.webp'
import { bangla } from '../../../constant/language';
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
    return <footer className="text-gray-600 bg-green-100">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

            <div className="flex-grow flex flex-wrap  -mb-10 md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">{bangla ? "গ্রাহক সেবা" : "Customer service"}</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800"> {bangla ? "এফএকিউ" : "FAQ"}</a>
                        </li>
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">{bangla ? "গোপনীয়তা নীতি" : "Privacy Policy"}</a>
                        </li>
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">{bangla ? "ব্যবহারের শর্তাবলী" : "Terms of use"}</a>
                        </li>
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">{bangla ? "রিটার্ন/বাতিল নীতি" : "Return/Cancel Policy"}</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">{bangla ? "তথ্য" : "Infomation"}</h2>
                    <nav className="list-none mb-10">
                        <li>
                            <a href='/' className="text-gray-600 hover:text-gray-800">{bangla ? "আমাদের সম্পর্কে" : "About us"}</a>
                        </li>

                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">{bangla ? "প্রচার" : "Promotions"}</h2>

                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 ">{bangla ? "যোগাযোগ করুন" : "Contact Us"}</h2>
                    <nav className="list-none mb-10 space-y-3">
                        <li className='flex justify-start items-center gap-x-4 text-sm leading-6'>
                            <div className="rounded-full border border-gray-700 p-1">
                                <GoLocation className="text-sm" />
                            </div>
                            <a href='/' className="text-gray-600 hover:text-gray-800">{bangla ? "137 তেজগাঁও শিল্প এলাকা, তেজগাঁও। ঢাকা-1208" : "137 Tejgaon Industrial Area, Tejgaon. Dhaka-1208"}.</a>
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
    return <footer className="text-gray-600  bg-green-300">
        <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center">{bangla ? "আমাদের সাথে যোগাযোগ করুন" : "Connect with us"}</h2>
                    <nav className="flex gap-x-2 justify-center">


                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><AiOutlineTwitter className=' text-2xl text-emerald-600' /></div>
                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><FaFacebookF className=' text-2xl text-blue-600' /></div>
                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><AiOutlineTwitter className=' text-2xl text-emerald-600' /></div>
                        <div className="rounded-full l border border-black p-2 flex justify-center items-center"><FaFacebookF className=' text-2xl text-blue-600' /></div>



                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center">{bangla ? "মূল্যপরিশোধ পদ্ধতি" : "Payment Method"}</h2>
                    <div className="">
                        <img src={payment} alt="" />
                    </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center">{bangla ? "আরো জানতে আমাদের কল করুন" : "Call us to know more"}</h2>

                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3 text-center ">{bangla ? "নিউজলেটার" : "Newsletter"}</h2>
                    <div className="form-control">
                        <div className="grid grid-cols-1 sm:grid-cols-5 shadow-lg rounded overflow-hidden">
                            <div className="sm:col-span-3">
                                <input type="text" placeholder={bangla ? "সর্বশেষ খবর পান" : "Receive the latest news"} className="input border-none outline-0  focus:border-0 focus:outline-0 w-full" />
                            </div>
                            <div className="sm:col-span-2 text-xs">
                                <button className=" border-0 bg-[#50c878] hover:bg-[#1aa749] text-white font-semibold capitalize lg:px-2  px-1 w-full min-h-[35px] h-full">{bangla ? "নিবন্ধন করুন" : "Sign Up"}</button>
                            </div>
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