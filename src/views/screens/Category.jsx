import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryImg } from '../../constant/imgUri';
import { bangla } from '../../constant/language';
import { Product } from '../../services';
// import ProductCard from '../components/card/ProductCard';
import { Pagination } from '../components/utils';
import { useSelector } from "react-redux";



const Category = ({dataSub}) => {
    const params = useParams()
   
    const [page, setPage] = useState('?page=1')
    const { data, isLoading } = Product.GetCatProduct(params?.slug, page)
    const right = useSelector((state) => state.cart.cartOpen)
    // {right ? 'grid grid-cols-1 xs:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4 gap-4 px-4':`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4`}
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading</div>
    }
 const subcategoryProduct=dataSub?.data.find(dataSub=>dataSub.id===data?.category.id)
    // const dataSubItem=
console.log(data,'data')
console.log(dataSub?.data,'dataSub');
console.log('sub',subcategoryProduct);
    return (




        <div className="ml-2">
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

            {subcategoryProduct?.subcategory?.length === 0 ? <div className="flex  justify-center mt-20" style={{ minHeight: '50vh' }}>
                <h2 className='font-bold text-4xl text-center text-gray-400'>{bangla ? "কোনো পণ্য নেই" : "No Product Available"}</h2>
            </div> : <>
                <div className={right ? ' grid grid-cols-2 xs:grid-cols-2 2md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 gap-4 px-2':`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-20 px-4 ml-10`}>
                    {/* {data?.paginate?.data?.map((item) => <SubProduct key={item?.id} item={item} />)} */}
                    {subcategoryProduct?.subcategory?.map(data=><Link to={'/subcategory/' + data?.slug}>
                       <div className='border-b-2 py-2 cursor-pointer'>
                       <img src={categoryImg + data?.icon} className='w-[100%] h-[140px]' alt=''/>
                       </div>
                       <div className='text-center p-2 font-semibold cursor-pointer'>
                        {data?.name}
                       </div>
                    </Link>)}
                </div>
               <div className='mt-8'>
               <Pagination paginate={data?.paginate} setPage={setPage} />
               </div>
            </>
            }
        </div >
    )

};

export default Category;