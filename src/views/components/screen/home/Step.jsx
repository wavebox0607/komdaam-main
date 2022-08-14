import React from 'react';
import orderStep0 from '../../../../assets/icon-order-step-0.png'
import orderStep1 from '../../../../assets/Icon/Fast Delivery 1.png'
import orderStep2 from '../../../../assets/Icon/Easy Payment.png'
import orderStep3 from '../../../../assets/Icon/247 Online Support 1.png'
import { bangla } from '../../../../constant/language';

const Step = () => {
    return (
        <>
            <div className="">
                <div className=" bg-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:py-12 py-10">
                    {/* Delivery grid Card */}
                    <div className='flex justify-center items-center'>
                        <img className=' w-11 h-16' src={orderStep0} alt="" />
                        <h3 className=" text-3xl leading-8  text-gray-800">{bangla ? "ধাপ" : "Steps"} <br />
                            {bangla ? "অর্ডার" : "Order"}</h3>

                    </div>

                    {/* customer Grid Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4'>


                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">1</h3>
                        <div className="px-2"><img width={"72"} height={"72"} src={orderStep1} alt="" /></div>
                        <div>
                        <p className="text-lg font-semibold text-gray-600">{bangla ? "দ্রুত ডেলিভারি" : "Fast Delivery"} !</p>
                        <p className="text-sm font-normal text-gray-600">{bangla ? "আপনার অর্ডার ১ ঘন্টার মধ্যে পৌঁছে যাবে।" : "Get your ordered delivered within 1 hour."} !</p>
                        </div>
                     
                        
                    </div>

                    {/* Recycle Grid Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4'>


                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">2</h3>
                        <div className="px-2"><img width={"72"} height={"72"} src={orderStep2} alt="" /></div>
                        <div>
                        <p className="text-lg font-semibold text-gray-600">{bangla ? "সহজ পেমেন্ট" : "Easy Payment"} !</p>
                        <p className="text-sm font-normal text-gray-600">{bangla ? "আপনার সুবিধার্থে অর্থ প্রদান করুন যে কোন স্থান থেকে।" : "Pay at you convenience, From where you are."} </p>
                        </div>
                    </div>

                    {/* Secure Payment Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4'>


                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">3</h3>
                        <div className="px-2"><img width={"72"} height={"72"} src={orderStep3} alt="" /></div>
                        <div>
                        <p className="text-lg font-semibold text-gray-600">{bangla ? "২৪/৭ অনলাইন সাপোর্ট" : "24/7 Online Support"} !</p>
                        <p className="text-sm font-normal text-gray-600">{bangla ? "সর্বদা আমরা আপনার জন্য নিয়োজিত" : "A great support for you as always."} !</p>
                        </div>
                    </div>

                </div>
            </div>




        </>
    );
};

export default Step;