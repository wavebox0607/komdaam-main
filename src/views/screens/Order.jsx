import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bangla } from '../../constant/language';
import { httpReq } from '../../services';

const Order = () => {
    const [call, setCall] = useState(false)
    const [orders, setOrder] = useState([])
    const [filters, setFilter] = useState([])
    const [btn, setBtn] = useState('All')
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {

        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            const data = await httpReq.post('getorder');


            setOrder(data)
            setFilter(data)

        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch((err) => {
                console.log(err);
            });
    }, [user?.id, call])

    const cancel_request = (id) => {

        confirmAlert({
            title: 'Confirm to Done',
            message: 'Are you sure to cancel this order.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        httpReq.post('order/cancel', { id, user_id: user?.id })
                            .then(res => {
                                if (res?.success) {

                                    setCall(!call)
                                    toast(res?.success, {
                                        type: "success"
                                    });
                                }
                            })

                    }
                },
                {
                    label: 'No',
                    onClick: () => toast('rejected', {
                        type: "warning"
                    })
                }
            ]
        });

    }
    const get_filter = (key) => {
        setBtn(key)
        if (orders.length) {
            if (key === 'All') {
                return setFilter(orders)
            }
            if (key === 'Pending') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Pending"))
            }
            if (key === 'Shipping') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Shipping"))
            }
            if (key === 'Processing') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Processing"))
            }
            if (key === 'Delivered') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Delivered"))
            }
            if (key === 'Returned') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Returned"))
            }
            if (key === 'Cancel') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Cancel"))
            }
            if (key === 'Failed') {
                setFilter([])
                return setFilter(orders?.filter(i => i.status === "Failed"))
            }
        }
    }

    const ar = ["All", "Pending", "Shipping", "Processing", "Delivered", "Returned", "Cancel", "Failed"]
    const arb = ["সব", "বিচারাধীন", "শিপিং", "প্রসেসিং", "ডেলিভার করা", "ফেরত", "বাতিল", "ব্যর্থ"]
    return (
        <>
            <div>
                <div className="sm:px-6 w-full">
                    <div className="px-4 md:px-10 py-2 md:py-4">
                        <div className="flex items-center justify-between">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">{bangla ? "অর্ডারসমূহ" : "Your Orders"}</p>

                        </div>
                    </div>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                {ar?.map((i, id) =>
                                    <div key={id} onClick={() => get_filter(i)}>
                                        <div className={`${btn === i ? "bg-indigo-100 text-[#AD173A]" : null} py-2 px-4 sm:px-8 font-medium bg-gray-100 text-gray-700 rounded-full text-xs sm:text-base`}>
                                            <p>{bangla ? arb[id] : i}</p>
                                        </div>
                                    </div>
                                )}

                            </div>

                        </div>
                        {/* filter.length === 0 ? <DataLoader />
                                    : */}
                        <div className="mt-7 overflow-x-auto">
                            {

                                <table className="min-w-full text-center">

                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                {bangla ? "অর্ডার" : "Order"}#
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                {bangla ? "ক্রয় করা হয়েছে" : "Purchased On"}
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                {bangla ? "পরিমাণ" : "Amount"}
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                {bangla ? "স্ট্যাটাস" : "Status"}
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                {bangla ? "কর্ম" : "Action"}
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orders?.length === 0 ? <tr>
                                            <td colSpan={"5"} className="font-bold text-xl py-8">No Order found</td>
                                        </tr> : <> {filters?.reverse().map((order) => <OrderItem key={order?.reference_no} cancel_request={cancel_request} item={order} />)}</>}

                                    </tbody>
                                </table>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </>

    );
};

export default Order;














const OrderItem = ({ item, cancel_request }) => {
    const date = new Date(item?.created_at)


    return (
        <tr
            className={`
                ${item?.status === "Pending" ? 'bg-purple-100 border-purple-200' :
                    item?.status === "Shipping" ? "bg-blue-100 border-blue-200" :
                        item?.status === "Processing" ? "bg-indigo-100 border-indigo-200" :
                            item?.status === "Delivered" ? "bg-green-100 border-green-200" :
                                item?.status === "Returned" ? "bg-yellow-100 border-yellow-200" :
                                    item?.status === "Cancel" ? "bg-red-200 border-red-200" :
                                        item?.status === "Failed" ? "bg-pink-300 border-pink-300" :
                                            item?.status === "On Hold" ? "bg-gray-100 border-gray-200" :
                                                item?.status === "Complete" ? "bg-sky-200 border-sky-300" :
                                                    null} border-b`}>
            {/* order reference no  */}
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                <NavLink to={"/profile/order/" + item?.id}>
                    #{item?.reference_no}
                </NavLink>
            </td>
            {/* date  */}
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {date.toLocaleString()}
            </td>
            {/* ammount  */}
            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {item?.subtotal}
            </td>
            {/* status  */}
            <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                {item?.status}
            </td>
            {/* actions */}
            <td className="text-sm text-gray-900 font-medium space-x-2 py-4 whitespace-nowrap">
                <NavLink
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    to={"/profile/order/" + item?.id}>
                    {bangla ? "দেখুন" : "View"}
                </NavLink>
                {item?.status !== "Cancel" ? <button
                    onClick={() => cancel_request(item?.id)}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {bangla ? "বাতিল অনুরোধ" : "Cancel Request"}
                </button> : null}
            </td>
        </tr>
    )
}










