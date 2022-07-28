import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryImg } from '../../constant/imgUri';
import { Product } from '../../services';
import ProductCard from '../components/card/ProductCard';
import { Pagination } from '../components/utils';

const Category = () => {
    const params = useParams()
    const [page, setPage] = useState('?page=1')
    const { data, isLoading } = Product.GetCatProduct(params?.slug, page)

    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading</div>
    }

    return (




        <div className="">
            <div className="mx-auto mt-16 pt-0">
                <img src={categoryImg + data?.category?.banner} className='w-full h-80' alt="" />
            </div>
            <div className=" py-4">
                <div className="text-md flex items-center space-x-1 my-4 px-4">

                    <div className="font-semibold"> Categores </div>
                    <ChevronRightIcon className='h-4 w-4' />
                    <p>{data?.category?.name}</p>
                </div>
                <div className="h-[3px] bg-black w-full flex justify-center items-center"><p className='bg-white px-3 text-lg font-bold'>{data?.category?.name}</p></div>
            </div>

            {data?.paginate?.data?.length === 0 ? <div className="flex  justify-center mt-20" style={{ minHeight: '50vh' }}>
                <h2 className='font-bold text-4xl text-center text-gray-400'>No Product Available</h2>
            </div> : <>
                <div className="grid grid-cols-6 gap-4 px-4">
                    {data?.paginate?.data?.map((item) => <ProductCard key={item?.id} item={item} />)}
                </div>
                <Pagination paginate={data?.paginate} setPage={setPage} />
            </>
            }
        </div >
    )

};

export default Category;