import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { HomePage } from '../../../services'
import { categoryImg } from '../../../constant/imgUri'
import { ChevronDownIcon, ChevronUpIcon, ViewListIcon } from '@heroicons/react/solid'
import { bangla } from '../../../constant/language'


export default function Left({ setOpen, open }) {
    const [show, setShow] = useState(null)
    const { data } = HomePage.GetCategory()

    // const [show, setShow] = useState(null)
    // const { data } = HomePage.GetCategory()
    const result = data?.data?.filter(res => res?.slug === 'popular' || res?.slug === 'corporate' || res?.slug === 'offer-whole-sale')
    const result1 = data?.data?.filter(res => res?.slug !== 'offer' && res?.slug !== 'popular' && res?.slug !== 'corporate')
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
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex w-full pr-20">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className=" w-full overflow-y-scroll example">
                                            <div className="flex justify-between bg-[#4c9a2a] px-2 h-[40px] items-center">
                                                <div className="flex items-center text-[15px] font-bold text-white gap-2">
                                                    <ViewListIcon className='h-5 w-5 ' color='white' />
                                                    <p>{bangla ? `সকল ক্যাটাগরি` : 'All Category'}</p>
                                                </div>
                                                <div className="">
                                                    <button onClick={() => setOpen(false)} className='border border-white px-4 hover:text-[#4c9a2a] text-white hover:bg-gray-50 transition-all duration-300 ease-linear py-0 focus:outline-none'>{bangla ? `বন্ধ` : 'Close'}</button>
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-[6px] ">

                                                <div>
                                                    <div className="flex flex-col space-y-[1px] text-[14px] bg-[#ccf8cc] pb-0 font-semibold pt-3 px-2">

                                                        {
                                                            result?.map((item) => <SingleCat key={item?.id} setShow={setShow} show={show} item={item} />)
                                                        }
                                                    </div>
                                                    <div className="flex flex-col space-y-[0px] px-2 text-[14px] pt-2">

                                                        {
                                                            result1?.map((item) => <SingleCat key={item?.id} setShow={setShow} show={show} item={item} />)
                                                        }
                                                    </div>
                                                </div>

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


const SingleCat = ({ item, show, setShow }) => {

    return <>
        <div onClick={() => show === item?.slug ? setShow(null) : setShow(item?.slug)} className='flex items-center justify-between py-0  hover:bg-[#50c878] hover:text-white transition-all duration-200 ease-linear'>
            <Link to={"/category/" + item?.slug}>
                <div className="flex-1 flex space-x-[8px]">
                    <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
                    <p>{item.name}</p>
                </div>
            </Link>
            
            {item?.subcategory ? <div className="">
                {show === item.slug ? <ChevronUpIcon className='h-4 w-4' /> :
                    <ChevronDownIcon className='h-4 w-4' />}
            </div> : null}
        </div>
        <div className='flex'>
            <div className="w-[1px] max-h-max bg-[#4c9a2a] ml-3 mb-[14px]"></div>
            <div className="flex-1">
                {show === item.slug ? item?.subcategory?.map((item) => <SingleSub item={item} />) : null}
            </div>

        </div>
    </>
}

const SingleSub = ({ item }) => {
    return (
        <div className='flex items-center space-x-1 hover:text-[#50c878] text-[14px] '>
            <div className="h-[1px] w-3 bg-[#4c9a2a]"></div>
            <Link to={'/subcategory/' + item?.slug}>
                <div className="flex-1 flex space-x-3 py-1">
                    <img src={categoryImg + item?.icon} className="h-4 w-4" alt="" />
                    <p>{item?.name}</p>
                </div>
            </Link>

        </div>
    )
}
