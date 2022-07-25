import React from 'react';

const SectionHeading = ({text}) => {
    return (
        <div className='mt-4'>
            <h3 className='text-center font-semibold text-2xl'>{text}</h3>
            <div className="m-auto my-3 w-52 border-2 rounded-full border-orange-400"></div>
        </div>
    );
};

export default SectionHeading;