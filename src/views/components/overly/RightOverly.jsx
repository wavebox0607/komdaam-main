/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { productImg } from '../../../constant/imgUri'
import { ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { decrementQty, incrementQty, removeToCartList } from '../../../redux/slice/cart'
import { Link, NavLink } from 'react-router-dom'
import { Taka } from '../utils'
import { bangla } from '../../../constant/language'


export default function Right({ setOpen, open }) {
   
    const { cartList } = useSelector((state) => state.cart)
    const priceList = cartList?.map(p => p.qty * p.price)
    const total = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md pl-10">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 w-full overflow-y-scroll example ">
                                            <div className="flex justify-between bg-[#4c9a2a] px-2 h-[40px] items-center">
                                                <div className="flex items-center text-[15px] font-bold text-white gap-2">
                                                    <ShoppingCartIcon className='h-5 w-5 ' color='white' />
                                                    <p>{cartList.length + " "}ITEMS</p>
                                                </div>
                                                <div className="">
                                                    <button onClick={() => setOpen(!open)} className='border border-white px-4 hover:text-[#4c9a2a] text-white hover:bg-gray-50 transition-all duration-300 ease-linear py-0'>close</button>
                                                </div>
                                            </div>
                                            <h3 className='bg-gray-50 font-semibold px-2 py-1'>{bangla ? "দ্রুত ডেলিভারী" : "Express delivery"}</h3>
                                            {
                                                cartList?.map((item) => <SingleCart key={item?.cartId} item={item} bangla={bangla}/>)
                                            }
                                        </div>
                                        <div className=" w-full mb-16">
                                            <div className="flex mx-6 rounded-lg text-white overflow-hidden">
                                                <NavLink to='/checkout' className="flex justify-center items-center bg-[#ff9eab] font-semibold flex-1 py-2">{bangla ? "অর্ডার করুন" : "Checkout"}</NavLink>
                                                <div className="flex justify-center items-center bg-[#ff7358] flex-1 py-2"><Taka tk={total} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}



const SingleCart = ({ item ,bangla}) => {
   
    const dispatch = useDispatch()
 
    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-300 last:border-0  ml-2">
            <div className="flex flex-col space-y-2 items-center w-[10px] h-full">
                <div onClick={() => dispatch(incrementQty(item?.cartId))} className=""><ChevronUpIcon className='h-4 w-4 ' /></div>
                <div className="text-xs">{item?.qty}</div>
                <div onClick={() => dispatch(decrementQty(item?.cartId))} className=""><ChevronDownIcon className='h-4 w-4' /></div>
            </div>
            <div className="h-[40px] w-[40px] flex items-center">
                <img src={productImg + item?.images[0]} alt="" />
            </div>
            <div className="flex flex-col w-[120px] ">
                <Link to={'/product/' + item?.slug}><div className="text-[13px] text-[#1d1d1d] text-justify w-full">{bangla?item?.name.slice(0, 30):item?.slug.slice(0, 30)}</div></Link>
                <Taka className={"text-[10px]"} tk={item?.price} />
            </div>
            <div className="flex flex-col justify-center w-[63px]">

                <div className="flex text-xs font-semibold">
                    <Taka className={"text-[11px] pr-[2px] font-normal"} tk={item?.price}/> <p> / {item?.unit + item?.volume}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[10px] mr-4">
                <div onClick={() => dispatch(removeToCartList(item))} className=""><XIcon className='h-4 w-4' /></div>
            </div>
        </div>
    )
}