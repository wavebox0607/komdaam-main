import React, { useState } from 'react';
import { categoryImg } from '../../../constant/imgUri';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { HomePage } from '../../../services';
import { Link, NavLink } from 'react-router-dom'
import offer from '../../../assets/offer.gif'

const LeftSide = ({ left }) => {
    const [show, setShow] = useState(null)
    const { data } = HomePage.GetCategory()
    return (
        <div className={`fixed left-0 top-[80px] bottom-0 h-auto  example  ${left ? "w-[200px]" : "w-[60px]"} transition-all duration-300 ease-linear`}>
            <div className="flex flex-col space-y-[6px] px-2">
                {left ?
                    <div className='flex items-center'>
                        <Link to={"/offer"}>
                            <div className="flex-1 flex space-x-1">
                                <img src={offer} className="h-5 w-5" alt="" />
                                <p>{"Offer"}</p>
                            </div>
                        </Link>
                    </div>
                    :
                    <NavLink to="/offer" className="flex justify-center">
                        <img src={offer} className="h-5 w-5" alt="" />
                    </NavLink>}
                {
                    data?.data?.map((item) => left ? <SingleCat key={item?.id} setShow={setShow} show={show} item={item} /> : <SingleCat2 key={item?.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default LeftSide;


const SingleCat = ({ item, show, setShow }) => {

    return <>
        <div onClick={() => show === item?.slug ? setShow(null) : setShow(item?.slug)} className='flex items-center justify-between py-1 px-[2px]  hover:bg-[#50c878] hover:text-white transition-all duration-200 ease-linear'>
            <Link to={"/category/" + item?.slug}>
                <div className="flex-1 flex space-x-[6px]">
                    <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
                    <p>{item.name}</p>
                </div></Link>
            {item?.subcategory ? <div className="">
                {show === item.slug ? <ChevronUpIcon className='h-4 w-4' /> :
                    <ChevronDownIcon className='h-4 w-4' />}
            </div> : null}
        </div>
        {show === item.slug ? item?.subcategory?.map((item) => <SingleSub item={item} />) : null}
    </>
}

const SingleSub = ({ item }) => {
    return (
        <div className='flex ml-4'>
            <Link to={'/subcategory/' + item?.slug}>
                <div className="flex-1 flex space-x-1">
                    <img src={categoryImg + item?.icon} className="h-6 w-6" alt="" />
                    <p>{item?.name}</p>
                </div>
            </Link>

        </div>
    )
}


const SingleCat2 = ({ item }) => {
    const [show, setShow] = useState(null)

    return <>
        <div className='relative w-full flex justify-center'>
            <NavLink to={'/category/' + item?.slug}
                onMouseEnter={() => setShow(item?.subcategory ? item?.slug : null)}
                onMouseLeave={() => setShow(null)}
                className="w-full flex justify-center">
                <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
            </NavLink>
            {show === item.slug ? <div
                onMouseEnter={() => setShow(item?.subcategory ? item?.slug : null)}
                onMouseLeave={() => setShow(null)}
                className='absolute -top-1 left-8 flex flex-col bg-white w-max p-2 space-y-2 shadow-lg overflow-hidden'>
                {item?.subcategory?.map((item) => <SingleSub2 key={item?.id} item={item} />)}
            </div> : null}
        </div>
    </>
}


const SingleSub2 = ({ item }) => {
    return (
        <Link to={'/subcategory/' + item?.slug} className='' >
            <div className="px-2 flex space-x-1">
                <img src={categoryImg + item?.icon} className="h-6 w-6" alt="" />
                <p>{item?.name}</p>
            </div>

        </Link>
    )
}