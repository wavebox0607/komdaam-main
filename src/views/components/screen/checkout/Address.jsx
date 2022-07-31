
import { Fragment, useRef, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from "react-hook-form";
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { httpReq } from '../../../../services';

const Address = ({ selectAddress, setSelectAddress }) => {
	const [address, setAddress] = useState(null)
	const [open, setOpen] = useState(false)
	const [call, setCall] = useState(null)
	const { user } = useSelector((state) => state.auth);
	useEffect(() => {
		httpReq.post("address", { id: user?.id })
			.then(({ address }) => {
				setAddress(address);
			})
			.catch(err => console.log(err))
	}, [call, user.id])


	return (
		<>


			<div className="shadow sm:rounded-md sm:overflow-hidden my-5">
				<div className="px-4 py-5 bg-white space-y-6 sm:p-6">


					<div className="col-span-6 sm:col-span-4">
						<div className="flex justify-between items-center pb-3">
							<label htmlFor="name" className="block text-xl font-semibold text-gray-700">
								Addresses
							</label>
							<span className='text-[#50c878]-600 font-semibold tracking-wider cursor-pointer' onClick={() => setOpen(true)}> + Add</span>
						</div>
						<div className="grid sm:grid-cols-2 gap-4">

							{
								address?.slice(0, 4).map((item) => <Single item={item} key={item?.id} selectAddress={selectAddress} setSelectAddress={setSelectAddress} setCall={setCall} />
								)

							}


						</div>

					</div>


				</div>

			</div>




			<SaveAddress open={open} setOpen={setOpen} setCall={setCall} />
		</>
	);
};

export default Address;


const Single = ({ item, selectAddress, setSelectAddress, setCall }) => {
	const [open, setOpen] = useState(false)
	const delete_address = (id) => {
		httpReq.post('address/delete', { address_id: id })
			.then(({ success }) => {
				toast(success, { type: 'success' })
				setCall(Math.random() * 100)
			}).catch(err => console.log(err))
	}
	return (
		<label
			style={{
				backgroundColor: selectAddress?.id === item?.id ? '#50c878' : '#fff',
				color: selectAddress?.id === item?.id ? 'white' : "#000",
			}}
			className={`border border-gray-300 p-5 rounded space-y-2 w-full transition-colors duration-300`}>
			<div className="flex justify-between cursor-pointer">
				<h3 className='font-semibold tracking-wider'>Name: {item?.name}</h3>
				<div className="flex flex-col">
					<TrashIcon width={20} onClick={() => delete_address(item?.id)} />
					<PencilAltIcon width={20} onClick={() => setOpen(true)} />
					<UpdateAddress open={open} setOpen={setOpen} item={item} setCall={setCall} />

				</div>
			</div>
			<p className='font-normal text-sm tracking-wider'><span className='text-base font-medium'>Phone:</span> {item?.phone}</p>
			<p className='font-normal text-sm tracking-wider'><span className='text-base font-medium'>Address: </span>{item?.address}</p>
			<input
				className="hidden"
				name="address-type"
				type="radio"
				onChange={() => setSelectAddress(item)}

			/>
		</label>
	)
}


export function SaveAddress({ open, setOpen, setCall }) {

	const { user } = useSelector((state) => state.auth);
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const onSubmit = data => {
		data['id'] = user?.id
		httpReq.post('address/save', data)
			.then(({ success, error }) => {
				if (success) {
					reset()
					setCall(Math.random() * 100)
					toast(success, { type: 'success' })
					setOpen(false)
				}
				if (error) {

					toast(error, { type: 'error' })
				}
			})
			.catch(err => console.log(err))
	};

	return (
		<>
			<Modal open={open} setOpen={setOpen}>
				<form className='' onSubmit={handleSubmit(onSubmit)}>
					<div className="shadow overflow-hidden sm:rounded-md w-full">
						<div className="px-4 py-5 bg-white space-y-6 sm:p-6">




							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<label htmlFor="name"
									className="block text-sm font-medium text-gray-700">Name</label>
								<input {...register("name", { required: true })} type="text" name="name" id="name" autoComplete="address-level1"
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
								{errors.name && <span className='text-red-500'>Phone name is required</span>}
							</div>
							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<label htmlFor="phone"
									className="block text-sm font-medium text-gray-700">Phone</label>
								<input
									{...register("phone", { required: true.valueOf, minLength: 11 })}
									type="number" name="phone" id="phone" autoComplete="address-level1"
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

								{errors.phone?.type === 'required' && <span className='text-red-500'>Phone number is required</span>}
								{errors.phone?.type === 'minLength' && <span className='text-red-500'>Please enter correct phone number</span>}
							</div>
							<div className="col-span-6 sm:col-span-3 lg:col-span-2">
								<label htmlFor="address"
									className="block text-sm font-medium text-gray-700">Address</label>
								<textarea
									{...register("address", { required: true })}
									rows={6} type="text" name="address" id="address" autoComplete="address-level1"
									className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
								{errors.address && <span className='text-red-500'>Phone address is required</span>}
							</div>

						</div>
						<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button

								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Save
							</button>
						</div>
					</div>
				</form>
			</Modal>

		</>
	)
}

export function UpdateAddress({ open, setOpen, item, setCall }) {

	const { user } = useSelector((state) => state.auth);
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		defaultValues: {
			...item
		}
	});
	const onSubmit = data => {
		data['id'] = user?.id
		data['address_id'] = item?.id
		httpReq.post('address/edit', data)
			.then(({ success, error }) => {
				if (success) {
					setCall(Math.random() * 100)
					toast(success, { type: 'success' })
					setOpen(false)
				}
				if (error) {
					toast(error, { type: 'error' })
				}
			})
			.catch(err => console.log(err))
		reset()
	};





	return (
		<Modal open={open} setOpen={setOpen}>
			<form className='' onSubmit={handleSubmit(onSubmit)}>
				<div className="shadow overflow-hidden sm:rounded-md w-full">
					<div className="px-4 py-5 bg-white space-y-6 sm:p-6">




						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<label htmlFor="name"
								className="block text-sm font-medium text-gray-700">Name</label>
							<input {...register("name")} type="text" name="name" id="name" autoComplete="address-level1"
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
						</div>
						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<label htmlFor="phone"
								className="block text-sm font-medium text-gray-700">Phone</label>
							<input
								{...register("phone", { required: true.valueOf, minLength: 11 })}
								type="number" name="phone" id="phone" autoComplete="address-level1"
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
							{errors.phone && <span className='text-red-500'>Phone number is required</span>}
						</div>
						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<label htmlFor="address"
								className="block text-sm font-medium text-gray-700">Address</label>
							<textarea
								{...register("address")}
								rows={6} type="text" name="address" id="address" autoComplete="address-level1"
								className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
						</div>

					</div>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button

							type="submit"
							className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</Modal>
	)
}

export function Modal({ open, setOpen, children }) {

	const cancelButtonRef = useRef(null)

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

									{children}


								</div>

							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}





