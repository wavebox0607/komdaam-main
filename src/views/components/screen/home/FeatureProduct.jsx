import React from 'react';
import { Product } from '../../../../services';
import ProductCard from '../../card/ProductCard';

const FeatureProduct = () => {
    const { data, isLoading } = Product.GetAll()
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    // if (isFetching) {
    //     return <div className='w-full h-screen flex justify-center items-center'>Fatching...</div> 
    // }
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4'>
            {data?.data?.map((item) => <ProductCard item={item} />)}
        </div>
    );
};

export default FeatureProduct;