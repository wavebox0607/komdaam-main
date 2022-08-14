import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryImg } from '../../constant/imgUri';
import { bangla } from '../../constant/language';
import { Product } from '../../services';
import ProductCard from '../components/card/ProductCard';
import { Pagination } from '../components/utils';
import { useSelector } from "react-redux";

const Category = () => {
    const params = useParams()
    const [page, setPage] = useState('?page=1')
    const { data, isLoading } = Product.GetCatProduct(params?.slug, page)
    const right = useSelector((state) => state.cart.cartOpen)
    // {right ? 'grid grid-cols-1 xs:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4 gap-4 px-4':`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4`}
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading</div>
    }

    return (




        <div className="">
            <div className="mx-auto mt-2 pt-0">
                <img src={categoryImg + data?.category?.banner} className='w-full h-80' alt="" />
            </div>
            <div className=" py-4">
                <div className="text-md flex items-center space-x-1 my-4 px-4">

                    <div className="font-semibold"> {bangla ? "ক্যাটাগরি" : "Categories"} </div>
                    <ChevronRightIcon className='h-4 w-4' />
                    <p>{bangla ? data?.category?.bn_name : data?.category?.name}</p>
                </div>
                <div className="h-[3px] bg-black w-full flex justify-center items-center"><p className='bg-white px-3 text-lg font-bold'>{bangla ? data?.category?.bn_name : data?.category?.name}</p></div>
            </div>

            {data?.paginate?.data?.length === 0 ? <div className="flex  justify-center mt-20" style={{ minHeight: '50vh' }}>
                <h2 className='font-bold text-4xl text-center text-gray-400'>{bangla ? "কোনো পণ্য নেই" : "No Product Available"}</h2>
            </div> : <>
                <div className={right ? 'grid grid-cols-1 xs:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4 gap-4 px-2':`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4`}>
                    {data?.paginate?.data?.map((item) => <ProductCard key={item?.id} item={item} />)}
                </div>
                <Pagination paginate={data?.paginate} setPage={setPage} />
            </>
            }
        </div >
    )

};

export default Category;