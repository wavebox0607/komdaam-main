import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { bangla } from '../../constant/language';
import { Product } from '../../services';
import ProductCard from '../components/card/ProductCard';
const Search = () => {
    const [filter, setFilter] = useState([])
    const params = useParams()
    console.log(params.src);
    const { data } = Product.GetAll()
    console.log();
    useEffect(() => {
        const result = data?.data?.filter(p => p?.name.toLowerCase().includes(params.src.toLowerCase()))
        setFilter(result)
    }, [data?.data, params.src])
console.log(filter);
    return (
        <>
            <div className="mt-16 mb-3">
                <h2 className='text-[#1d1d1d] text-[20px]'>{bangla ? "অনুসন্ধান এর ফলাফল" : "Search Results for"} <span className='font-bold text-[#4c9a2a]'>{` "${params.src}"`}</span></h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 2md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gp-4 2md:gap-4 lg-gap-4 mb-10">
                {
                    filter?.map((item) => <ProductCard key={item?.id} item={item} />)
                }
            </div>
        </>
    );
};

export default Search;