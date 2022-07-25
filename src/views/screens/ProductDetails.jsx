import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../services';

const ProductDetails = () => {
    let { slug } = useParams();
    const { data, isLoading } = Product.GetSingle(slug)
    console.log(data);
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    return (
        <div>

        </div>
    );
};

export default ProductDetails;