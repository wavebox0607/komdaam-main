import React from 'react';
import { categoryImg } from '../../../../constant/imgUri';
import { HomePage } from '../../../../services';
import { NavLink } from 'react-router-dom'
import { SectionHeading } from '../../utils';
import { bangla } from '../../../../constant/language';
const FeatureCategory = () => {
    const { data } = HomePage.GetCategory()
    return (
        <div className='py-10 mx-4'>

            <SectionHeading text={bangla ? "পণ্যের ধরণ" :"Feature Categories"} />
            <div className="grid md:grid-cols-6 grid-cols-2 gap-4 my-4" >
                {data?.data?.map((item) => <NavLink to={'/category/' + item?.slug} key={item?.id} className='shadow-lg hover:shadow-4xl hover:bg-gray-300 flex flex-col h-[180px] ease-in-out duration-300 justify-center items-center rounded-md space-y-3'>
                    <div className="">
                        <img src={categoryImg + item?.icon} className='w-16 h-16' alt="" />
                    </div>
                    <span className='text-md font-semibold'>{item?.name}</span>
                </NavLink>)}
            </div>
        </div>
    );
};

export default FeatureCategory;