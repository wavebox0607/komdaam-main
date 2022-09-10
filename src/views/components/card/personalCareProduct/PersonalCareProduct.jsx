import { ShoppingBagIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productImg } from '../../../../constant/imgUri';
import { bangla } from '../../../../constant/language';
// import Taka from '../utils/Taka';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartList, decrementQty, incrementQty } from '../../../../redux/slice/cart';
import { Product } from '../../../../services';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import QuickView from '../../overly/QuickView';
import './PersonalCareProduct.css'
const PersonalCareProduct = ({ item }) => {
    const [open, setOpen] = useState(false)
  
    return (
        <>
            <div className='bg-white relative rounded-lg hover:bg-green-200 cardShadow group transition-all duration-300 ease-linear h-full flex flex-col mt-1 ml-1 mr-2 xl:mr-2 lg:mr-5 md:mr-5  mb-1 '>
            {item?.quantity==='0.00'&&<div className='absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-80 z-[2]'></div>}
                <div className="w-full h-[145px] md:h-[200px] relative p-2 overflow-hidden">
                    <Link to={'/product/' + item?.slug}>
                        <img className='w-full h-full bg-white' src={productImg + item?.images[0]} alt="" />
                    </Link>
                    {parseInt(item?.discount_amount) !== 0 && <div className="absolute z-[3] top-2 right-2 bg-[#ff576d] px-[7px] py-[2px] w-[95px] h-[22px] rounded-md text-white flex justify-center items-center text-xs font-semibold">
                            {parseInt(item?.quantity) === 0 ? <>{bangla ? `স্টক আউট` : 'Out Of Stock'}</> : <> {bangla?`${parseInt(item?.discount_amount)}% ছাড়` : `${parseInt(item?.discount_amount)}% OFF`}</>}
                        </div>}
                        {parseInt(item?.quantity) === 0 && <div className="absolute top-2 z-[3] right-2 bg-[#ff576d] px-[7px] py-[2px] w-[95px] h-[22px] rounded-md text-white flex justify-center items-center text-xs font-semibold">
                            {bangla ? `স্টক আউট` : 'Out Of Stock'}
                        </div>}
                    <button onClick={() => setOpen(true)} className='absolute -bottom-3 translate-y-6 group-hover:translate-y-0 transition-all duration-300 ease-linear left-0 right-0 mx-auto rounded-t-md px-1 font-semibold text-md pb-2 text-white text-md flex justify-center items-center gap-x-1 shadow-4xl bg-[#4c9a2a]'>Quick View</button>
                </div>
                <div className="h-[1px] w-full my-2 group-hover:bg-green-200 bg-gray-200 transition-all duration-300 ease-linear"></div>
                <div className="p-2 h-[80px]">
                    <Link to={'/product/' + item?.slug}><h4 className='text-center font-semibold text-[14px] xl:text-[15px] lg:text-[15px] md:text-[14px] hover:text-[#4c9a2a]'>{item?.name}</h4></Link>
                    <p className='text-center text-[#888] text-[13px] font-semibold'>{item?.per_unit ? bangla ? "প্রতি একক : " : "Per Unit : " : null} {item?.per_unit}</p>
                </div>
                <div className="h-[30px] flex flex-col justify-end pb-3 px-1">
                    {
                        item?.discount_amount==='0.00' ? <>     </> : <>     {item?.discount_price && <div className="text-[12px] px-2 line-through">

                            <p className={`text-[#d4463c] font-bold`}>৳ {item?.regular_price}</p>
                            {/* <Taka tk={item?.regular_price}  size={17} /> */}
                        </div>}</>
                    }
                    <div className="">
                        <AddToCart item={item} />
                    </div>
                </div>
            </div>

            <QuickView setModal={setOpen} modal={open} slug={item?.slug} />

        </>
    );
};

export default PersonalCareProduct;


const AddToCart = ({ item }) => {
    const { cartList } = useSelector((state) => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [already, setalready] = useState(null)

    useEffect(() => {
        const result = cartList.find(i => i.productId === item.id)

        setalready(result)

    }, [cartList, item.id])



    // only without variant product added to cart 
    const handleCart = () => {
console.log('item34',item);
        if (!item?.variant) {
            dispatch(addToCartList({
                cartId: Product.makeid(100),
                variantId: null,
                productId: item?.id,
                qty: 1,
                price: parseFloat(item?.regular_price).toFixed(2),
                name: item.name,
                slug: item.slug,
                images: item.images
            }))
        } else {
            navigate(`/product/${item?.slug}`)
        }
    }




    return (
        <div className="flex justify-between items-center px-2 ">

            <div className='text-[13px] selection:'>
                <p className={`text-[#4c9a2a] font-bold text-sm sm:text-base`}>৳ {item?.discount_price ? item?.discount_price : item?.regular_price} </p>
                {/* <Taka tk={item?.discount_price ? item?.discount_price : item?.regular_price} className={`text-[#4c9a2a] font-bold`} si
                e={18} /> */}
            </div>
            <div className={`${item?.quantity === '0.00' ? "rounded-full border relative z-[3] border-red-500 text-red-500 font-semibold test-base hover:border-red-500  hover:bg-red-500 stroke-[#4c9a2a]  hover:text-white hover:stroke-white transition-all duration-300 ease-linear" : "rounded-full border border-[#4c9a2a] hover:bg-[#4c9a2a] stroke-[#4c9a2a] text-[#4c9a2a] hover:text-white hover:stroke-white transition-all duration-300 ease-linear"}`}>

                {already?.cartId ?
                    <div className="flex items-center cursor-pointer h-[22px] w-[94px] justify-between">
                        <div onClick={() => dispatch(decrementQty(already?.cartId))} className="max-w-[18px] w-full border-r border-[#4c9a2a] h-full flex justify-center items-center">
                            <MinusIcon className='h-2 w-2  stroke-1 ' />
                        </div>
                        <div className="flex flex-1  h-full justify-center items-center">
                            <p className='font-semibold  text-xs '>{already?.qty}{"  "} {bangla ? "কার্টে" : "in cart"}</p>
                        </div>
                        <div onClick={() => dispatch(incrementQty(already?.cartId))} className="max-w-[18px] w-full h-full border-l border-[#4c9a2a] flex justify-center items-center">
                            <PlusIcon className='h-2 w-2  stroke-1 ' />
                        </div>
                    </div>
                    :
                    <div onClick={() => handleCart()} className="flex items-center gap-2 cursor-pointer px-2">
                              {
                            item?.quantity === '0.00' ? <button type='button' disabled className="cursor-not-allowed text-sm">
                                {bangla ? `স্টক আউট` : 'Out Of Stock'}
                            </button> : <>
                                <ShoppingBagIcon className='h-4 w-4  stroke-2 font-bold' />
                                <p className=' font-bold text-sm'>{bangla ? "কার্ট" : "Cart"}</p>
                            </>
                        }
                    </div>
                }
            </div>
        </div>)
}