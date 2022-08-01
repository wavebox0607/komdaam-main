import React from 'react';
import { NavLink } from 'react-router-dom';
import { bangla } from '../../../../constant/language';


const PaymentGateway = ({ selectPayment, setSelectPayment }) => {

	return (
		<>
			<div className="shadow sm:rounded-md sm:overflow-hidden my-5">
				<div className="px-4 py-5 bg-white space-y-6 sm:p-6">



					{/* 
                <p className="block text-xl font-semibold text-gray-700">
                Terms & Conditions
                            </p> */}



					<div className="col-span-6 sm:col-span-4">
						<div className="flex justify-between items-center pb-3">
							<label htmlFor="email-address" className="block text-xl font-semibold text-gray-700">
								{bangla ? "মূল্যপরিশোধ পদ্ধতি" : "Payment Method"}
							</label>

						</div>

						<div className="flex gap-2 flex-wrap sm:flex-nowrap">



							<label className={`${selectPayment === "online" ? `bg-[#50c878] text-white` : "bg-gray-300"} p-5 rounded space-y-2 w-full transition-colors duration-300 relative flex justify-between `}>
								<div className="flex justify-between cursor-pointer">
									<h3 className='font-semibold tracking-wider capitalize'>{bangla ? "ক্রেডিট/ডেবিট কার্ড দিয়ে অর্থ প্রদান (SSL কমার্স)" : "Pay with Credit/Debit Card (SSL Commarce)"}</h3>

								</div>
								<input
									className="hidden"
									name="address_type"
									type="radio"
									value={"online"}
									onChange={(e) => setSelectPayment(e.target.value)}

								/>
							</label>

							<label className={`${selectPayment === "cod" ? `bg-[#50c878] text-white` : "bg-gray-300"}  p-5 rounded space-y-2 w-full transition-colors duration-300 relative flex justify-between `}>
								<div className="flex justify-between cursor-pointer">
									<h3 className='font-semibold tracking-wider'>{bangla ? "ক্যাশ অন ডেলিভারি (শুধু ঢাকা)" : "Cash On Delivery (Only Dhaka)"}</h3>

								</div>

								<input
									className="hidden"
									name="address_type"
									type="radio"
									value={"cod"}
									onChange={(e) => setSelectPayment(e.target.value)}

								/>
							</label>
						</div>

					</div>

					<p className=' font-semibold'>{bangla ? "আমি ওয়েবসাইটের সাথে পড়েছি এবং একমত" : "I have read and agree with the website's"}
						<NavLink to={'terms-condition'} className=" text-indigo-400 underline ml-1">{bangla ? "শর্তাবলী" : "Terms & Conditions"}</NavLink>,

						<NavLink to={'privacy-policy'} className=" text-indigo-400 underline">  {bangla ? "গোপনীয়তা নীতি" : "Privacy Policy"} </NavLink>
						{bangla ? "এবং" : "and"}

						<NavLink to={'refund-policy'} className=" text-indigo-400 underline ml-1">{bangla ? "প্রত্যর্পণ নীতি" : "Refund Policy"}</NavLink>
					</p>
				</div>

			</div>
		</>
	);
};

export default PaymentGateway;