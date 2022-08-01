import React from 'react';
import { bangla } from '../../../../constant/language';

const Description = ({ desc }) => {
    return (
        <div className='my-6'>
            <h3 className='font-medium text-xl font-sans'>{bangla ? "বর্ণনা বাংলা" : 'Description'}</h3>
            <div className="h-[1px] bg-gray-300 mb-3 mt-1 "></div>
            <p className='text-xs my-3 text-[#888]'>{desc}</p>
        </div>
    );
};

export default Description;