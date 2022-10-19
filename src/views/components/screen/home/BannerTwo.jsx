import React from 'react';
import { HomePage } from '../../../../services';
import { SectionHeading } from '../../utils';
import { bannerImg } from '../../../../constant/imgUri';
import { bangla } from '../../../../constant/language';

const BannerTwo = () => {
    const { data } = HomePage.GetBanner()
   
    
    return (
        <>
            <div className=''>

                <div className="mt-0 ">
                    <SectionHeading text={bangla ? "ব্যানার" : "Banner"} />
                </div>


                <div className="shadow-lg rounded-md grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-3 px-4">
                    {data?.double_banner?.slice(4,8).map((b) => <img key={b?.id} className='w-[100%] h-[190px] md:h-[400px]' src={bannerImg + b?.image} alt="" />)}

                

                </div>

            </div>

        </>
    );
};

export default BannerTwo;