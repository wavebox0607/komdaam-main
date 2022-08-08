import React from 'react';

const SectionHeading = ({text}) => {
    return (
        <div className='mt-4'>
            <h3 className='text-center font-semibold text-2xl'>{text}</h3>
            <div className="mx-auto my-3 w-52 h-[3px] rounded-full bg-[#4c9a2a]"></div>
        </div>
    );
};

export default SectionHeading;