import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryImg } from '../../constant/imgUri';
import { Product } from '../../services';
import ProductCard from '../components/card/ProductCard';
import { Pagination } from '../components/utils';
import { useSelector } from 'react-redux';

const SubCategory = () => {
    const params = useParams()
    const right = useSelector((state) => state.cart.cartOpen)
    const [page, setPage] = useState('?page=1')
    const { data, isLoading } = Product.GetSubCatProduct(params?.slug, page)


    console.log(data);
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading</div>
    }

    return (




        <div className="">
            <div className="mx-auto md:mt-0 mt-[-12px]">
                <img src={categoryImg + data?.category?.banner} className='w-full h-[150px] object-cover sm:object-fill xl:h-[350px] lg:h-[350px] md:h-[350px]' alt="" />
            </div>
            <div className=" py-4">
                <div className="text-md flex items-center space-x-1 my-4 px-4">

                    <div className="font-semibold"> Categories </div>
                    <ChevronRightIcon className='h-4 w-4' />
                    <p>{data?.category?.name}</p>
                </div>
                <div className="h-[3px] bg-black w-full flex justify-center items-center"><p className='bg-white px-3 text-lg font-bold'>{data?.category?.name}</p></div>
            </div>

            {data?.paginate?.data?.length === 0 ? <div className="flex  justify-center mt-20" style={{ minHeight: '50vh' }}>
                <h2 className='font-bold text-4xl text-center text-gray-400'>No Product Available</h2>
            </div> : <>
                <div className={right? "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-1 gap-y-4  px-2 pb-10":"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-1 gap-y-4 px-2 pb-10"}>
                    {data?.paginate?.data?.map((item) => <ProductCard key={item?.id} item={item} />)}
                </div>
                <Pagination paginate={data?.paginate} setPage={setPage} />
            </>
            }
        </div >
    )

};

export default SubCategory;