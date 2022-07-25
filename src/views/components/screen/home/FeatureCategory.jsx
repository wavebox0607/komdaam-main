import React from 'react';
import { categoryImg } from '../../../../constant/imgUri';
import { HomePage } from '../../../../services';
import { NavLink } from 'react-router-dom'
import { SectionHeading } from '../../utils';
const FeatureCategory = () => {
    const { data } = HomePage.GetCategory()
    return (
        <div className='py-10 mx-4'>

            <SectionHeading text={"Feature Categories"} />
            <div className="grid md:grid-cols-6 grid-cols-2 gap-4 my-4" >
                {data?.data?.map((item) => <NavLink to={'/category/' + item?.slug} key={item?.id} className='shadow-lg hover:shadow-4xl hover:bg-gray-300 flex flex-col p-2 py-4 ease-in-out duration-300 justify-center items-center rounded-md'>
                    <div className=""><img src={categoryImg + item?.icon} className='w-14 h-14' alt="" /></div>
                    <span className='text-xs'>Baby Care</span>
                </NavLink>)}
            </div>
        </div>
    );
};

export default FeatureCategory;