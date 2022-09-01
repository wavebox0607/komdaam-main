import React from 'react';
import logo from '../../../../assets/logo.png'
import help from '../../../../assets/hotline.jpg'
import { bangla } from '../../../../constant/language';
import { HomePage } from '../../../../services';

const Help = () => {
    const { data } = HomePage.GetSettings()
    console.log(data);
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 shadow-md mx-4'>
            <div className=" flex flex-col space-y-2">
                <h3 className='text-xl text-red-500 text-center font-semibold'>{bangla ? "সাহায্য দরকার" : "NEED HELP"}?</h3>
                <p className='text-center font-bold'>{bangla ? "আমরা শুধু একটি কল দূরে" : "We are just a call away"}.</p>
                <div className="flex flex-col">
                    <h3 className='text-xl text-red-500 text-center font-semibold'>{data?.settings?.phone}</h3>
                    {/* <h3 className='text-xl text-red-500 text-center font-semibold'>+880 1715425218 </h3> */}
                </div>
                <div className="flex justify-center mx-auto"><img src={logo} alt="" className='w-full h-8' /></div>
            </div>
            <div className="justify-self-center">
                <img src={help} alt="" className='h-52' />
            </div>
        </div>
    );
};

export default Help;