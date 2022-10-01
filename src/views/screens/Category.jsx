import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryImg } from '../../constant/imgUri';
import { bangla } from '../../constant/language';
import { Product } from '../../services';
// import ProductCard from '../components/card/ProductCard';
// import { Pagination } from '../components/utils';
import { useSelector } from "react-redux";
import ProductCard from '../components/card/ProductCard';



const Category = ({dataSub}) => {
    const params = useParams()
   
    // const [page, setPage] = useState('?page=1')
    const [page] = useState('?page=1')
    const { data, isLoading } = Product.GetCatProduct(params?.slug, page)
    console.log(data,"data");
    const right = useSelector((state) => state.cart.cartOpen)
    // {right ? 'grid grid-cols-1 xs:grid-cols-2 2md:grid-cols-3 xl:grid-cols-4 gap-4 px-4':`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4`}
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading</div>
    }
 const subcategoryProduct=dataSub?.data.find(dataSub=>dataSub.id===data?.category.id)
 console.log(subcategoryProduct,"subcategoryProduct");
    // const dataSubItem=

    return (


        <div className="">
            <div className="mx-auto md:mt-0 mt-[-12px]">
                <img src={categoryImg + data?.category?.banner} className='w-full h-[150px] object-cover sm:object-fill xl:h-[350px] lg:h-[350px] md:h-[350px]' alt="" />
            </div>
            <div className="pt-0 md:pt-4 py-4 ">
                <div className="text-md flex items-center space-x-1 my-4 px-4">

                    <div className="font-semibold"> {bangla ? "ক্যাটাগরি" : "Categories"} </div>
                    <ChevronRightIcon className='h-4 w-4' />
                    <p>{bangla ? data?.category?.bn_name : data?.category?.name}</p>
                </div>
                <div className="h-[3px] bg-black w-full flex justify-center items-center"><p className='bg-white px-3 text-lg font-bold'>{bangla ? data?.category?.bn_name : data?.category?.name}</p></div>
            </div>

            {subcategoryProduct?.subcategory === null ? <div className={right ? ' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-1 gap-y-4 px-4 pb-10':`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-1 gap-y-4 px-2 pb-10`}>
            {data?.paginate?.data?.map(data=><ProductCard item={data} key={data?.id}/>)}
            {/* <div className='mt-8'>
               <Pagination paginate={data?.paginate} setPage={setPage} />
               </div> */}
            </div> : <>
                <div className={right ? ' grid grid-cols-2 xs:grid-cols-2 2md:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 gap-x-1 gap-y-4 px-2':`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-20 px-4 ml-0 sm:ml-10`}>
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
               {/* <div className='mt-8'>
               <Pagination paginate={data?.paginate} setPage={setPage} />
               </div> */}
            </>
            }
        </div >
    )

};

export default Category;