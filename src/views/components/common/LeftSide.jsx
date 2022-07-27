import React, { useState } from 'react';
import { categoryImg } from '../../../constant/imgUri';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { HomePage } from '../../../services';
import { Link } from 'react-router-dom'

const LeftSide = ({ left }) => {
    const [show, setShow] = useState(null)
    const { data } = HomePage.GetCategory()
    return (
        <div className={`fixed left-0 top-[80px] bottom-0 overflow-y-scroll example  ${left ? "w-[200px]" : "w-[60px]"} transition-all duration-300 ease-linear`}>
            <div className="flex flex-col space-y-2 px-2">
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
        <div onClick={() => show === item?.slug ? setShow(null) : setShow(item?.slug)} className='flex items-center'>
            <Link to={"/category/" + item?.slug}>
                <div className="flex-1 flex space-x-1">
                    <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
                    <p>{item.name}</p>
                </div></Link>
            {item?.subcategory ? <div className="">
                {show ? <ChevronUpIcon className='h-4 w-4' /> :
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
            <div
                onMouseEnter={() => setShow(item?.slug)}
                onMouseLeave={() => setShow(null)}
                className="">
                <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
            </div>
            {show === item.slug ? <div className='absolute top-4 left-10 flex flex-col bg-white'>
                {item?.subcategory?.map((item) => <SingleSub2 item={item} />)}
            </div> : null}
        </div>
    </>
}


const SingleSub2 = ({ item }) => {
    return (
        <div className='' >
            <div className="flex-1 flex space-x-1">
                <img src={categoryImg + item?.icon} className="h-6 w-6" alt="" />
                <p>{item?.name}</p>
            </div>
            <div className="">

            </div>
        </div>
    )
}