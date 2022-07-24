import React, { useState } from 'react';
import { httpReq } from '../../../services';
import { useQuery } from '@tanstack/react-query'
import { categoryImg } from '../../../constant/imgUri';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const LeftSide = ({ left }) => {
    const [show, setShow] = useState(null)
    const { data, isLoading, isFetching } = useQuery(['allcategory'], () => httpReq.get('allcategory'), {
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })
    console.log(data);
    console.log(isLoading);
    console.log(isFetching);
    return (
        <div className={`fixed left-0 top-[100px] bottom-0 overflow-y-scroll example  ${left ? "w-[200px]" : "w-[60px]"} transition-all duration-300 ease-linear`}>
            <div className="flex flex-col space-y-2">
                {
                    data?.data?.map((item) => left ? <SingleCat setShow={setShow} show={show} item={item} /> : <SingleCat2 item={item} />)
                }
            </div>
        </div>
    );
};

export default LeftSide;


const SingleCat = ({ item, show, setShow }) => {

    return <>
        <div onClick={() => setShow(item?.slug)} className='flex items-center'>
            <div className="flex-1 flex space-x-1">
                <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
                <p>{item.name}</p>
            </div>
            <div className="">
                {show ? <ChevronUpIcon className='h-4 w-4' />:
                <ChevronDownIcon className='h-4 w-4' />}
            </div>
        </div>
        {show === item.slug ? item?.subcategory?.map((item) => <SingleSub item={item} />) : null}
    </>
}

const SingleSub = ({ item }) => {
    return (
        <div className='flex ml-4'>
            <div className="flex-1 flex space-x-1">
                <img src={categoryImg + item?.icon} className="h-6 w-6" alt="" />
                <p>{item?.name}</p>
            </div>

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
                className="flex space-x-1">
                <img src={categoryImg + item?.icon} className="h-5 w-5" alt="" />
            </div>
            {show === item.slug ? <div className='absolute right-0 top-0  flex flex-col bg-white overflow-visible' style={{ zIndex: 100000000 }}>
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