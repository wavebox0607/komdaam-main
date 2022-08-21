import React from 'react';

import { bangla } from '../../../../constant/language';
import { Product } from '../../../../services';
import ProductCard from '../../card/ProductCard';
import { SectionHeading } from '../../utils';

import { useSelector } from "react-redux";

const FeatureProduct = () => {
    const { data, isLoading } = Product.GetAll()
    const right = useSelector((state) => state.cart.cartOpen)
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
  

    const filterDataSize=10
    const updateFilterData=data?.data?.slice(0, filterDataSize)
 
    return (

        <div className="mx-4 sm:px-0 py-1 ">

             <SectionHeading text={bangla ? "বিশেষ পণ্য" : "Trading"} />

          
             <div className={right ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 px-2':`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-y-4 xl:gap-y-4 lg:gap-y-4 md:gap-4 px-0 xl:px-0 2xl:px-4 lg:px-4 md:px-4`}>
             {updateFilterData?.map((item) =>
                   
                        <ProductCard item={item} key={item?.id}/>
                   

                )}
                
</div>
        </div>
    );
};

export default FeatureProduct;