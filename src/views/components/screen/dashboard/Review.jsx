
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import httpReq from '../../../../services/http.service'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export default function GiveReview({ setOpen, open, item, call, setCall }) {

	const { user } = useSelector((state) => state.auth);
	const cancelButtonRef = useRef(null)

	const give_review = () => {

	}



	const { register, handleSubmit, formState: { errors } } = useForm();
	// console.log(errors)
	const onSubmit = data => {

		httpReq.post('review', { uid: user.id, order_id: item.order_id, product_id: item.product_id, ...data })
			.then(({ success, error }) => {



				if (success) {
					toast(success, { type: 'success' })
					setCall(!call)
					setOpen(false)
				}
				// console.log(res);

				if (error) {
					toast(error, { type: 'warning' })

				}
			})
			.catch(er => {
				console.log(er)
			})

	}

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
								<form onSubmit={handleSubmit(onSubmit)}>

									<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">

											<div className="mt-3 text-center sm:mt-0  sm:text-left w-full">
												<Dialog.Title as="h3" className="text-lg leading-6 font-semibold font-sans text-gray-900">
													Give the Product Review
												</Dialog.Title>
												<div className="mt-2 w-full">



													<textarea
														rows={4}
														type={'text'}
														{...register("comment", { required: true })}
														placeholder='Your Comment'
														className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0 w-full' />

													{errors.confirm_password?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
													{errors.confirm_password?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}


													{/* <div className="flex justify-center">
                                                        {loading ?
                                                            <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400' style={{ backgroundColor: button1.defaultButton }} >Loading</p>
                                                            :


                                                            <input type="submit" value="Submit" className='text-left py-3 px-8 rounded-md text-white font-sans font-bold tracking-wider' style={{ backgroundColor: button1.color }} />
                                                        }
                                                    </div> */}
												</div>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
										<input
											type="submit"
											className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={() => give_review()}
										/>
										<button
											type="button"
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}
										>
											Cancel
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
