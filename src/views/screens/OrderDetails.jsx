import { PhoneIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { productImg, profileImg } from '../../constant/imgUri';
import { HomePage, httpReq } from '../../services';
import GiveReview from '../components/screen/dashboard/Review';
import { Taka } from '../components/utils';


const OrderDetails = () => {
    const [pay, setPay] = useState('show')
    const [order, setOrder] = useState({})
    const [orderItem, setOrderItem] = useState([])
    // const [transaction, setTransaction] = useState({})
    const { user } = useSelector((state) => state.auth);

    const { data } = HomePage.GetUser()
    const params = useParams()
    const [call, setCall] = useState(false)

    // console.log(orderItem, "orders");

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const { order, orderitem } = await httpReq.post('getorder/details', { id: params?.order_id });


            setOrder(order)
            setOrderItem(orderitem)
            // setTransaction(transaction)

        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [params?.order_id, user?.id, call])

    const order_create_time = new Date(order?.created_at).getTime()

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            setPay('hide')
            return
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };
    return (
        <div className="py-6 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{order?.reference_no}</h1>
                <p className="text-base font-medium leading-6 text-gray-600">{new Date(order?.created_at).toLocaleString()}</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                        {orderItem?.map((item) => <SingleItem key={item.id} item={item} call={call} setCall={setCall} order={order} />)}
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600"><Taka tk={order?.subtotal} /></p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">
                                        Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                    </p>
                                    <p className="text-base leading-4 text-gray-600"><Taka tk={order?.discount} /></p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600"><Taka tk={order?.shipping} /></p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600"><Taka tk={order?.total} /></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                {!data?.image ?
                                    <img src="https://nwsid.net/wp-content/uploads/2015/05/dummy-profile-pic.png" className="w-14 object-cover h-14" alt="avatar" /> :
                                    <img src={profileImg + data?.image} className="w-14 object-cover h-14" alt="avatar" />}
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    {data?.name ? <p className="text-base font-semibold leading-4 text-left text-gray-800">{data?.name}</p> : null}
                                    <p className="text-sm leading-5 text-gray-600"><span className='font-semibold'>Join us:</span> {new Date(data?.created_at).toDateString()}</p>
                                </div>
                            </div>


                            {data?.phone ?
                                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <PhoneIcon className='font-extralight' height={20} />

                                    <p className="cursor-pointer text-sm leading-5 text-gray-800">{data?.phone}</p>
                                </div> : null
                            }
                            {data?.email ?
                                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <p className="cursor-pointer text-sm leading-5 text-gray-800">{data?.email}</p>
                                </div> : null}


                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <div className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        <h3 className='font-semibold tracking-wider'>Name: {order?.name}</h3>
                                        <p className='font-normal text-sm tracking-wider'><span className='text-base font-medium'>Phone:</span> {order?.phone}</p>
                                        <p className='font-normal text-sm tracking-wider'><span className='text-base font-medium'>Address: </span>{order?.address}
                                        </p>
                                    </div>

                                </div>

                            </div>
                            {order?.status === "Pending" && order?.payurl && <div className='text-red-500'>Expire In:  <Countdown date={order_create_time + 3000000} renderer={renderer} /></div>}
                            {order?.status === "Pending" && order?.payurl && pay === 'show' && <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button
                                    onClick={() => window.location.replace(order?.payurl)}
                                    className="mt-6 md:mt-0 py-5 hover:bg-gray-800 hover:text-white transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-semibold font-sans w-96 2xl:w-full text-base leading-4 text-gray-800">Pay Now</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;




const SingleItem = ({ item, setCall, call, order }) => {
    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState({})
    // const { data } = HomePage.GetUser()
    console.log(product,"pro");
    useEffect(() => {

        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const product  = await httpReq.post('productsss', {
                id: item?.product_id
            });


            setProduct(product.data)

        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [item?.product_id])

    return (
        <>
            {!product?.id ? <div>Loading..</div> : <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img className="w-full hidden md:block" src={productImg + product?.images[0]} alt="dress" />
                    <img className="w-full md:hidden" src={productImg + product?.images[0]} alt="dress" />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800"><NavLink to={"/product/" + item?.product_id}>{product?.name}</NavLink></h3>
                        <div className="flex justify-start items-start flex-col space-y-2">
                            {item?.color ? <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-500">Color: </span> {item?.color}
                            </p> : null}
                            {item?.size ? <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-500">Size: </span> {item?.size}
                            </p> : null}
                            {item?.unit ? <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-500">Unit: </span> {item?.unit} {item?.volume}
                            </p> : null}

                        </div>
                    </div>
                    <div className="flex flex-col  space-x-8 items-end w-full">
                        {/* <p className="text-base xl:text-lg leading-6">
                            $36.00 <span className="text-red-300 line-through"> $45.00</span>
                        </p> */}
                        <p className="text-base xl:text-lg leading-6 text-gray-800">QTY: {item?.quantity}</p>
                        <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800"><Taka tk={item?.price} /></p>
                        {order?.status === "Delivered" && !item.review ? <button
                            onClick={() => setOpen(true)}
                            className=" py-2 px-4 border border-transparent text-sm font-semibold tracking-widest rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            {"Give Review"}
                        </button> : null}
                        <GiveReview open={open} setOpen={setOpen} item={item} call={call} setCall={setCall} />
                    </div>
                </div>

            </div>}

        </>
    )
}