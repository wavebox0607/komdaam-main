import { ChevronRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productImg } from '../../constant/imgUri';
import { bangla } from '../../constant/language';
import { Product } from '../../services';
import { Taka, Zoom } from '../components/utils';
import { useDispatch } from 'react-redux'
import { addToCartList } from '../../redux/slice/cart';

const ProductDetails = () => {
    const [unit, setUnit] = useState(null)
    let { slug } = useParams();
    const { data, isLoading } = Product.GetSingle(slug)
    if (isLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>
    }
    console.log(unit);
    return (
        <div className='px-4 py-6'>
            <div className="grid md:grid-cols-8 grid-cols-1 md:gap-4 ">

                <div className="md:col-span-3 h-[400px] w-full">
                    {data?.data?.images?.slice(0, 1).map((item) =>
                        <Zoom
                            key={item}
                            img={productImg + item}
                            zoomScale={3}
                            width={100}
                            height={100}
                            transitionTime={0.5}
                        />
                    )}
                </div>
                <div className="md:col-span-4 md:px-2">
                    <div className="flex items-center text-[#111111] text-[14px]">
                        <Link to={"/"} ><p>{bangla ? "হোম" : "Home"}</p></Link>
                        <ChevronRightIcon className='h-4 w-4' />
                        <Link to={"/category/" + data?.data?.category_slug} ><p>{data?.data?.category}</p></Link>
                        <ChevronRightIcon className='h-4 w-4' />
                        <Link to={"/subcategory/" + data?.data?.subcategory_slug} ><p>{data?.data?.subcategory}</p></Link>
                    </div>
                    <h2 className='text-[25px] font-bold text-[#1d1d1d]'>{data?.data?.name}</h2>
                    <p className='text-[18px] text-[#888]  font-normal'>{data?.data?.per_unit ? bangla ? "প্রতি একক:" : "Per Unit:" : null} <span className='font-bold text-[#777]'>{data?.data?.per_unit}</span> </p>


                    <Taka tk={data?.data?.regular_price} additional={unit && unit?.additional_price} className={'text-[#4aa02c] font-bold text-[28px] -m-2 mt-4'} size={40} />


                    <div className="flex items-center space-x-2 my-2">
                        <h4>{"Unit:"}</h4>
                        {data?.data?.variant.map((item) => <Unit key={item?.id} item={item} active={unit?.id === item?.id} onClick={() => unit ? setUnit(null) : setUnit(item)} />)}
                    </div>

                    {/* Add to cart  */}
                    <AddToCart product={data?.data} unit={unit} />






                </div>
            </div>
        </div>
    );
};

export default ProductDetails;







const AddToCart = ({ product, unit }) => {
    const dispatch = useDispatch()

    const handleCart = () => {
        if (product?.variant && unit) {
            dispatch(addToCartList({
                cartId: Product.makeid(100),
                variantId: unit?.id,
                productId: product?.id,
                qty: 1,
                price: product?.regular_price
            }))
        } else {
            alert('please select variant')
        }
        if (!product?.variant) {
            dispatch(addToCartList({
                cartId: Product.makeid(100),
                variantId: unit?.id,
                productId: product?.id,
                qty: 1,
                price: product?.regular_price
            }))
        }

    }
    return (<div className="flex mt-6">
        <div className="rounded-full flex items-center border border-black  hover:stroke-white  divide-x divide-black h-[36px] overflow-hidden">
            <div className="h-full flex items-center hover:bg-[#000] px-2 hover:stroke-[#fff]  stroke-[#50c878] text-[#50c878] hover:text-white transition-all duration-300 ease-linear">
                <MinusIcon className='h-4 w-4' />
            </div>
            <div className="flex items-center gap-2 h-full px-4">
                <p>0</p>
                <p>{bangla ? "কার্টে" : 'in cart'}</p>
            </div>
            <div onClick={() => handleCart()} className="hover:bg-[#000] px-2 hover:stroke-[#fff] stroke-[#50c878] text-[#50c878] hover:text-white h-full flex items-center transition-all duration-300 ease-linear">
                <PlusIcon className='h-4 w-4' />
            </div>
        </div>
    </div>
    )
}


const Unit = ({ item, onClick, active }) => {
    return (<div onClick={onClick} className={`border border-gray-100 rounded-md p-1 flex cursor-pointer ${active ? "bg-pink-400 text-white" : "bg-gray-50 text-black"} hover:bg-pink-400 hover:text-white transition-all duration-300 ease-linear`}>
        <p>{item?.volume}</p>
        <p>{item?.unit}</p>
    </div>)
}