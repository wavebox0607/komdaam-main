import React from 'react';
import logo from '../../../../assets/gb-logo.jpg'
import help from '../../../../assets/help.webp'
import { bangla } from '../../../../constant/language';

const Help = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mt-24 mb-12 shadow-md mx-4'>
            <div className=" flex flex-col space-y-2">
                <h3 className='text-4xl text-red-500 text-center font-semibold'>{bangla ? "সাহায্য দরকার" : "NEED HELP"}?</h3>
                <p className='text-center font-bold'>{bangla ? "আমরা শুধু একটি কল দূরে" : "We are just a call away"}.</p>
                <div className="flex flex-col">
                    <h3 className='text-4xl text-red-500 text-center font-semibold'>+88 09611 848484</h3>
                    <h3 className='text-4xl text-red-500 text-center font-semibold'>+88 09611 848484</h3>
                </div>
                <div className="flex justify-center"><img src={logo} alt="" /></div>
            </div>
            <div className="">
                <img src={help} alt="" />
            </div>
        </div>
    );
};

export default Help;