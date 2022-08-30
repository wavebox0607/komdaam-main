import React from 'react';
import { HomePage } from '../../../../services';
import { SectionHeading } from '../../utils';
import { bannerImg } from '../../../../constant/imgUri';
import { bangla } from '../../../../constant/language';

const Banner = () => {
    const { data } = HomePage.GetBanner()
   
    
    return (
        <>
            <div className=''>

                <div className="mt-0 ">
                    <SectionHeading text={bangla ? "ব্যানার" : "Banner"} />
                </div>


                <div className="shadow-lg rounded-md grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-3 px-4">
                    {data?.double_banner?.map((b) => <img key={b?.id} className='w-[100%] h-[250px] md:h-[400px]' src={bannerImg + b?.image} alt="" />)}

                

                </div>

            </div>

        </>
    );
};

export default Banner;