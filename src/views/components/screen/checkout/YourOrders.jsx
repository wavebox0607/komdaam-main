
import React from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown, MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';

import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { productImg } from '../../../../constant/imgUri';
import { bangla } from '../../../../constant/language';
import {  clearCartList,  removeToCartList } from '../../../../redux/slice/cart';
import { HomePage, httpReq } from '../../../../services';
import { Taka } from '../../utils';
import { getCupon } from '../../utils/getPrice';


const YourOrders = ({ cuponDis, selectAddress, selectPayment, shipping_area }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { cartList } = useSelector((state) => state.cart)
	
	const { user } = useSelector((state) => state.auth)
	const { data } = HomePage.GetSettings()
	const priceList = cartList?.map(p => p.qty * p.price)
	const total = priceList.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
	const applycupon = cuponDis?.id ? getCupon(total, cuponDis?.discount_amount, cuponDis?.discount_type) : 0
	console.log(applycupon);
	const tax = (parseFloat(data?.settings?.tax).toFixed(2) / 100) * parseFloat(total).toFixed(2)
console.log(cartList);
	const handleCheckout = () => {
		
		const cart = cartList.map(item => ({
			id: item.cartId,
			quantity: item.qty,
			discount: item.regular_price - item?.discount_price,
			price: item.price,
			size: item.size,
			color: item.color,
			additional_price: item.additional_price,
			unit: item.unit,
			volume: item.volume,
		}))
		console.log('product',cart);

		const data = {
			name: selectAddress?.name,
			phone: selectAddress?.phone,
			payment_type: selectPayment,
			address: selectAddress?.address,
			subtotal: applycupon ? total - applycupon : total,
			shipping: parseInt(shipping_area),
			total: (total + tax + parseInt(shipping_area)) - applycupon,
			discount: applycupon,
			product: cart,
			tax: 0,
			cupon: 'khakfdhksf'
		}
		

const userToken = {
    headers: { Authorization: `Bearer ${user?.token}` }
};
		console.log(data,'cart',cart,user);
		if (!data.phone) {
			alert("Please Given The Address")
			//   AlertWraning("Please Select Delivery Address") 
		}
		if (!data.payment_type) {
			alert("Please Select Payment Method")
			//   AlertWraning("Please Select Payment Method") 
		}
		if (data.total && data.payment_type && data.product) {

			httpReq.post(`placeorder`, data,userToken)
				.then((response) => {
					if (response?.order) {
						toast(`Your #${response?.order?.reference_no} order complete successfully!`, {
							type: "success"
						});
						dispatch(clearCartList())
						navigate("/profile/order")

					}
					if (response?.payment) {
						localStorage.setItem("easy", response?.payment)
						window.location.replace(response?.payment)
					}

					if (response?.user) {
						localStorage.setItem("user", JSON.stringify(response.user));
					}
					if (response?.error) {
						toast(response?.error, {
							type: "warning"
						});
					}
				})
				.catch((error) => {
					const { errors, message } = error.response.data
					console.log(errors);
					console.log(message);
					// error.response.data?.errors.map(i => alert.show(i.message, { type: 'error' }))

				})
		} else {

		}
	}


	return (
		<div>
			{/* {error && <SnackBar open={true} msg={error} />} */}

			<h3 className='text-center font-semibold text-lg text-black'>{bangla ? "আপনার আইটেম" : "Your Items"}</h3>
			{cartList ? <>

				<div className="my-1">
					<div className=" flex flex-col justify-between bg-white shadow-xl mt-5 pt-5">


						{/* Replace with your content */}
						<div className="px-4 sm:px-2 h-[285px] overflow-y-scroll rounded-md">
							{
								cartList?.map((item) =>

									<Single key={item.cartId} item={item} />
								)
							}
						</div>




					</div>
				</div>
			</> : <div className="">
				<h3 className='text-center font-semibold text-lg text-black'>No Products Found</h3>
			</div>}
			<hr className='my-5' />
			<div className="my-5 text-gray-500 " style={{ fontWeight: 500 }}>
				<div className="flex justify-between items-center">
					<p>{bangla ? "উপ মোট" : "Sub Total"}</p>
					<Taka tk={parseInt(total )} />
				</div>
				<div className="flex justify-between items-center">
					<p>{bangla ? "ছাড়" : "Discount"}</p>
					<Taka tk={applycupon} />
				</div>
				<div className="flex justify-between items-center">
					<p>{bangla ? "ট্যাক্স" : "Tax"}{" ( " + data?.settings?.tax + "% )"}</p>
					<Taka tk={parseInt(tax)} />
				</div>
				<div className="flex justify-between items-center">
					<p>{bangla ? "আনুমানিক শিপিং" : "Estimated Shipping"}</p>
					<Taka tk={shipping_area} />
				</div>
				<div className="flex justify-between items-center">
					<p>{bangla ? "মোট" : "Total"}</p>
					<Taka tk={(parseInt(total + tax) + parseInt(shipping_area)) - applycupon} />
				</div>
			</div>

			<button
				className={`font-semibold tracking-wider my-1 border border-gray-300 w-full py-3  text-white transition-all duration-200 ease-linear bg-[#4c9a2a] hover:bg-[#26ad53] hover:text-gray-100 hover:shadow-lg rounded-md`}

				onClick={() => handleCheckout()}
			>
				{bangla ? "অর্ডার করুন" : "Place Order"}
			</button>
		</div>
	);
};

export default YourOrders;



const Single = ({ item }) => {
	
	const dispatch = useDispatch()
const cardBtn=(id)=>{
	console.log('item',id);
}
	// const price = getPrice(item.regular_price, item.discount_price, item.discount_type)

	return <div key={item.id} className="flex justify-between space-y-2 space-x-1 items-center last:border-0 border-b border-gray-400 py-2">
		<div className="w-14">
			<img className='w-14 h-14 ' src={productImg + item?.images[0]} alt="" />

		</div>
		<div className="flex flex-col gap-x-2 gap-y-1 pl-2 text-sm">
			<h3 className='text-black text-md  font-normal'><NavLink to={`/product/${item.id}`}>{item?.name?.slice(0, 30)}</NavLink></h3>
			<Taka tk={parseInt(item?.price)} />
		</div>
		<div className="flex flex-col gap-1 justify-center items-center">
			
			<p>{item.qty}</p>
			
		</div>
		<div className="text-md font-semibold"><Taka tk={parseInt(item?.price * item.qty)} /></div>
		<div className="">
			<MdDelete  onClick={() =>{ dispatch(removeToCartList(item));cardBtn(item?.cartId)}}  className='text-2xl cursor-pointer' />
		</div>
	</div>
}