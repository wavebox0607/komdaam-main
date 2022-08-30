// import React, { useState } from 'react';
// import { bangla } from '../../constant/language';
// import { Product } from '../../services';
// import ProductCard from '../components/card/ProductCard';
// import { Pagination } from '../components/utils';

const Offer = () => {
    // const [page, setPage] = useState('?page=1')
    // const [page] = useState('?page=1')
    // const { data } = Product.GetOffer(page)

    return (
        <div className='my-16 mx-auto px-4 h-[70vh]'>
            {/* <h3 className='text-[#1d1d1d] text-[20px] font-medium my-6 pb-2 border-b border-[#dac9c9]'>{bangla ? "হট অফার এবং ডিসকাউন্ট" : "Hot Offers & Discounts"}</h3>
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 2md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
                {
                    data?.paginate?.data?.map((item) => <ProductCard key={item?.id} item={item} />)
                }
            </div>

            <div className="mt-8">
                <Pagination setPage={setPage} paginate={data?.paginate} />
            </div> */}
        </div>
    );
};

export default Offer;