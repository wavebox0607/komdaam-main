import { ShoppingBagIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productImg } from '../../../constant/imgUri';
import { bangla } from '../../../constant/language';
import Taka from '../utils/Taka';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCartList, decrementQty, incrementQty } from '../../../redux/slice/cart';
import { Product } from '../../../services';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';

const ProductCard = ({ item }) => {

    return (
        <div className='bg-white rounded-lg hover:bg-green-200 shadow-md group transition-all duration-300 ease-linear overflow-hidden h-full flex flex-col'>
            <Link to={'/product/' + item?.slug}>
                <div className="w-full h-[145px] md:h-[273px] p-2">
                    <img className='w-full h-full bg-white' src={productImg + item?.images[0]} alt="" />
                </div>
            </Link>
            <div className="h-[1px] w-full my-2 group-hover:bg-green-200 bg-gray-200 transition-all duration-300 ease-linear"></div>
            <div className="p-2 h-[80px]">
                <Link to={'/product/' + item?.slug}><h4 className='text-center font-semibold text-[14px] hover:text-[#50c878]'>{item?.name}</h4></Link>
                <p className='text-center text-[#888] text-[13px] font-semibold'>{item?.per_unit ? bangla ? "প্রতি একক:" : "Per Unit:" : null}{item?.per_unit}</p>
            </div>
            <div className="h-[50px] flex flex-col justify-end">
                {item?.discount_price && <div className="text-[12px] px-2 line-through">
                    <Taka tk={item?.regular_price} className={`text-[#d4463c]`} size={17} />
                </div>}
                <div className="">
                    <AddToCart item={item} />
                </div>
            </div>
            {/* <div className=" absolute inset-0 bg-green-500" style={{zIndex:-1}}></div> */}
        </div>
    );
};

export default ProductCard;


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

        if (!item?.variant) {
            console.log("ase");
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
            console.log("nei");
            navigate(`/product/${item?.slug}`)
        }
    }




    return (
        <div className="flex justify-between items-center px-2 pb-2">

            <div className='text-[13px]'>
                <Taka tk={item?.discount_price ? item?.discount_price : item?.regular_price} className={`text-[#50c878]`} size={23} />
            </div>
            <div className="rounded-full border border-[#50c878] hover:bg-[#50c878] px-2 stroke-[#50c878] text-[#50c878] hover:text-white hover:stroke-white transition-all duration-300 ease-linear">

                {already?.cartId ?
                    <div className="flex items-center gap-2 cursor-pointer h-[20px] divide-x divide-[#50c878] justify-between">
                        <div onClick={() => dispatch(decrementQty(already?.cartId))} className="h-full flex justify-center items-center">
                            <MinusIcon className='h-2 w-2  stroke-1 ' />
                        </div>
                        <p className='font-semibold  text-xs pl-1 h-full'>{already?.qty} {bangla ? "" : "in cart"}</p>
                        <div onClick={() => dispatch(incrementQty(already?.cartId))} className="pl-1 h-full flex justify-center items-center">
                            <PlusIcon className='h-2 w-2  stroke-1 ' />
                        </div>
                    </div>
                    :
                    <div onClick={() => handleCart()} className="flex items-center gap-2 cursor-pointer ">
                        <ShoppingBagIcon className='h-4 w-4  stroke-2 ' />
                        <p className='font-semibold  text-sm'>Cart</p>
                    </div>
                }
            </div>
        </div>)
}