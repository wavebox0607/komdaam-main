import React, { useState } from 'react';
import { categoryImg } from '../../../constant/imgUri';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { HomePage } from '../../../services';
import { Link, NavLink } from 'react-router-dom'

const LeftSide = ({ left }) => {
    const [show, setShow] = useState(null)
    const { data } = HomePage.GetCategory()
    const result = data?.data?.filter(res => res?.slug === 'offer' || res?.slug === 'popular' || res?.slug === 'corporate-deal')
    const result1 = data?.data?.filter(res => res?.slug !== 'offer' && res?.slug !== 'popular' && res?.slug !== 'corporate-deal')

    return (

        <div className={`fixed left-0 top-[68px] bottom-0 h-auto  example  ${left ? "w-[240px]" : "w-[60px]"} transition-all duration-300 ease-linear !z-[10] shadow-lg`} >
            <div className="flex flex-col space-y-[1px] px-2 text-[14px] bg-[#ccf8cc] pb-0 font-semibold pt-3">


                {
                    result?.reverse().map((item) => left ? <SingleCat key={item?.id} setShow={setShow} show={show} item={item} /> : <SingleCat2 key={item?.id} item={item} />)
                }
            </div>
            <div className="flex flex-col space-y-[0px] px-2 text-[14px] pt-2">

                {
                    result1?.map((item) => left ? <SingleCat key={item?.id} setShow={setShow} show={show} item={item} /> : <SingleCat2 key={item?.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default LeftSide;


const SingleCat = ({ item, show, setShow }) => {

    return <>
        <div onClick={() => show === item?.slug ? setShow(null) : setShow(item?.slug)} className='flex items-center justify-between py-0 px-[2px]  hover:bg-[#50c878] hover:text-white transition-all duration-200 ease-linear'>
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


const SingleCat2 = ({ item }) => {
    const [show, setShow] = useState(null)

    return <>
        <div className='relative w-full flex justify-center text-[14px] py-1'>
            <NavLink to={'/category/' + item?.slug}
                onMouseEnter={() => setShow(item?.subcategory ? item?.slug : null)}
                onMouseLeave={() => setShow(null)}
                className="w-full flex justify-center">
                <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
            </NavLink>
            {show === item.slug ? <div
                onMouseEnter={() => setShow(item?.subcategory ? item?.slug : null)}
                onMouseLeave={() => setShow(null)}
                className='absolute -top-1 left-8 flex flex-col bg-white w-max p-2 space-y-2 shadow-lg overflow-hidden !z-[100000000000000]'>
                {item?.subcategory?.map((item) => <SingleSub2 key={item?.id} item={item} />)}
            </div> : null}
        </div>
    </>
}


const SingleSub2 = ({ item }) => {

    return (
        <Link to={'/subcategory/' + item?.slug} className='!z-50 overflow-hidden' >
            <div className="px-2 flex space-x-2">
                <img src={categoryImg + item?.icon} className="h-6 w-6" alt="" />
                <p className='!z-50'>{item?.name}</p>
            </div>

        </Link>
    )
}

