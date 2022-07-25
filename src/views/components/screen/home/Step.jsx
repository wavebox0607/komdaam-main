import React from 'react';
import orderStep0 from '../../../../assets/icon-order-step-0.png'
import orderStep1 from '../../../../assets/icon-order-step-1.png'
import orderStep2 from '../../../../assets/icon-order-step-2.png'
import orderStep3 from '../../../../assets/icon-order-step-3.png'

const Step = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className=" bg-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:py-12 py-10">
                    {/* Delivery grid Card */}
                    <div className='flex justify-center items-center'>
                        <img className=' w-11 h-16' src={orderStep0} alt="" />
                        <h3 className=" text-3xl leading-8  text-gray-800">Steps <br />
                            Order</h3>

                    </div>

                    {/* customer Grid Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4'>


                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">1</h3>
                        <div className=""><img width={"72"} height={"72"} src={orderStep1} alt="" /></div>
                        <p className="text-base font-normal text-gray-600">Place your order !</p>
                    </div>

                    {/* Recycle Grid Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4'>


                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">2</h3>
                        <div className=""><img width={"72"} height={"72"} src={orderStep2} alt="" /></div>
                        <p className="text-base font-normal text-gray-600">Place your order !</p>
                    </div>

                    {/* Secure Payment Card */}

                    <div className='flex justify-start items-center border-b border-yellow-200 pb-4'>


                        <h3 className=" text-xl font-semibold text-gray-800 rounded-full bg-slate-300 w-9 h-9 flex justify-center items-center">3</h3>
                        <div className=""><img width={"72"} height={"72"} src={orderStep3} alt="" /></div>
                        <p className="text-base font-normal text-gray-600">Place your order !</p>
                    </div>

                </div>
            </div>

            


        </>
    );
};

export default Step;