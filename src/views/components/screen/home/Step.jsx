import React from 'react';
import orderStep0 from '../../../../assets/icon-order-step-0.png'
import orderStep1 from '../../../../assets/Icon/Fast Delivery 1.png'
import orderStep2 from '../../../../assets/Icon/Easy Payment.png'
import orderStep3 from '../../../../assets/Cart 1.png'
import { bangla } from '../../../../constant/language';

const Step = () => {
    return (
        <>
            <div className="">

                <div className=" bg-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 py-4 px-2">


                    {/* Delivery grid Card */}
                    <div className='flex justify-center items-center'>
                        <img className=' w-11 h-16' src={orderStep0} alt="" />
                        <h3 className=" text-3xl leading-8  text-gray-800">{bangla ? "ধাপ" : "Steps"} <br />
                            {bangla ? "অর্ডার" : "Order"}</h3>

                    </div>

                    {/* customer Grid Card */}



                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4 px-2'>

                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">1</h3>
                        <div className="px-2"><img width={"72"} height={"72"} src={orderStep3} alt="" /></div>
                        <div>
                            <p className="text-lg font-semibold text-gray-600">{bangla ? "কার্ডে পণ্য যোগ করুন" : "Add Product To Card!"}</p>
                            <p className="text-sm font-normal text-gray-600">{bangla ? "আপনার পছন্দের পন্যটি বাছাই করুন এবং কার্ট-এ যুক্ত করুন" : "Find Your desire product and add to card."}</p>
                        </div>
                    </div>

                    {/* Recycle Grid Card */}


                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4 px-2'>




                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">2</h3>
                        <div className="px-2"><img width={"72"} height={"72"} src={orderStep2} alt="" /></div>
                        <div>
                            <p className="text-lg font-semibold text-gray-600">{bangla ? "সহজে অর্থ প্রদান করুন" : "Make Easy Payment!"} </p>
                            <p className="text-sm font-normal text-gray-600">{bangla ? "আপনার সুবিধার্থে অর্থ প্রদান করুন যে কোন স্থান থেকে।" : "Pay at you convenience, From where you are."} </p>
                        </div>
                    </div>

                    {/* Secure Payment Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4 px-2'>



                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">3</h3>
                        <div className="px-2"><img width={"72"} height={"72"} src={orderStep1} alt="" /></div>
                        <div>
                            <p className="text-lg font-semibold text-gray-600">{bangla ? "দ্রুত পণ্য বুঝে নিন" : "Get Fast Delivery"} !</p>
                            <p className="text-sm font-normal text-gray-600">{bangla ? "আপনার অর্ডার স্বল্প সময়ের মধ্যে পৌঁছে যাবে।" : "Get your ordered delivered within shortest possible time!"} </p>
                        </div>


                    </div>



                </div>
            </div>




        </>
    );
};

export default Step;