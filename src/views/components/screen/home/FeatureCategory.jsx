import React from 'react';
import { categoryImg } from '../../../../constant/imgUri';
import { HomePage } from '../../../../services';
import { NavLink } from 'react-router-dom'
import { SectionHeading } from '../../utils';
import { bangla } from '../../../../constant/language';
const FeatureCategory = () => {
    const { data } = HomePage.GetCategory()
    return (
        <div className='py-1 mx-4'>

            <SectionHeading text={bangla ? "পণ্যের ধরণ" :"Feature Categories"} />
            <div className="grid md:grid-cols-6 grid-cols-3 md:gap-4 gap-2  my-2" >
                {data?.data?.map((item) => <NavLink to={'/category/' + item?.slug} key={item?.id} className='shadow-lg hover:shadow-4xl hover:bg-gray-300 flex flex-col md:h-[180px] h-[120px] ease-in-out duration-300 justify-center items-center rounded-md space-y-3'>
                    <div className="">
                        <img src={categoryImg + item?.icon} className='w-16 h-16' alt="" />
                    </div>
                    <span className='md:text-lg font-semibold text-md'>{item?.name}</span>
                </NavLink>)}
            </div>
        </div>
    );
};

export default FeatureCategory;