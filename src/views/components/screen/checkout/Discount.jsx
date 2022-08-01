
import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { HomePage, httpReq } from '../../../../services';
import { bangla } from '../../../../constant/language';

const Discount = ({ setCupon, setShipping_area }) => {


	const { register, handleSubmit, formState: { errors } } = useForm();
	const { data } = HomePage.GetSettings()
	
	const onSubmit = data => {

		// declare the async data fetching function
		const fetchData = async () => {
			// get the data from the api
			const res = await httpReq.post('verifycoupon', data)
			if (res.error) {
				setCupon(0)
				return alert(res?.error)
			}
			if (res?.id) {
				setCupon(res)
				toast(`Your Coupon Apply successfully!`, {
					type: "success"
				});
			}
		}

		// call the function
		fetchData()
			// make sure to catch any error
			.catch((er) => {
				// setLoad(false)
				console.log(er);
			});
	}

	return (
		<>
			<div className="shadow sm:rounded-md sm:overflow-hidden my-5">
				<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
					
					<div className="grid grid-cols-6 gap-6">

						<div className="col-span-6 sm:col-span-3">
							<div className="flex justify-start gap-4 items-center pb-3">
								<label htmlFor="name" className="block text-xl font-semibold text-gray-700">

									{bangla ? "পরিবহণ মাধ্যম" : "Shipping Method"}
								</label>
								<div>

									<select onChange={(e) => setShipping_area(e.target.value)} id="country" name="country" autoComplete="country-name"
										className="mt-1 block w-full py-2 text-lg font-semibold border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#AD171A] focus:border-[#AD171A] sm:text-sm">
										<option value={0} className="text-center">{bangla ? "পদ্ধতি নির্বাচন করুন" : "Select Method"}</option>
										{data?.settings?.shipping_area_1_cost && <option className="text-center option" value={parseInt(data?.settings?.shipping_area_1_cost)}>{data?.settings?.shipping_area_1}</option>}
										{data?.settings?.shipping_area_2_cost && <option className="text-center" value={parseInt(data?.settings?.shipping_area_2_cost)}>{data?.settings?.shipping_area_2}</option>}
										{data?.settings?.shipping_area_3_cost && <option className="text-center" value={parseInt(data?.settings?.shipping_area_3_cost)}>{data?.settings?.shipping_area_3}</option>}
									</select>
								</div>
							</div>


						</div>
						<div className="col-span-6 sm:col-span-3">
							<div className="flex flex-wrap sm:justify-end sm:items-center pb-3 items-start">
								<label htmlFor="name" className="block text-xl font-semibold text-gray-700 pr-6">
									{bangla ? "ছাড়" : "Discount"}:
								</label>
								<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap justify-center items-start'>
									<div className="flex flex-col justify-center">
										<input {...register("code", { required: true })} type={'text'} className="border border-gray-400 py-2 px-2 rounded-sm" />
										{errors.code && <span className='text-red-500'>Field is empty</span>}
									</div>
									<input type={'submit'} value={bangla ? "আবেদন" : 'Apply'} htmlFor='discount' className={`px-4 py-2 ml-2 font-semibold rounded-sm text-lg bg-[#50c878] hover:bg-[#3bbd66] hover:text-gray-100 text-white`} />
								</form>
							</div>


						</div>
					</div>


				</div>

			</div>
		</>
	);
};

export default Discount;