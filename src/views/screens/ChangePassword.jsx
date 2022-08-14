
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { httpReq } from '../../services';
import { bangla } from '../../constant/language';


const ChangePassword = () => {
    const { user } = useSelector((state) => state.auth);
    const { register, handleSubmit } = useForm()


    const onSubmit = data => {

        if (data.password === data.confirm_password) {
            httpReq.post('password-change', {
                user_id: user?.id,
                ...data
            }).then((res) => {
                toast("Successfully change your Password!", {
                    type: 'success',
                    position: 'bottom-center'
                })
            })
        } else {
            toast("Please enter correct Password!", {
                type: 'error',
                position: 'bottom-center'
            })
        }

    }
    return (

        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-3">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">{bangla ? "পাসওয়ার্ড পরিবর্তন করুন" : "Change Your Password"}</h3>

                    </div>
                </div>

                <div className="mt-5 md:mt-0 md:col-span-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-5 gap-6">






                                    <div className="col-span-5 sm:col-span-3 ">
                                        <SinglePassword label={bangla ? "নতুন পাসওয়ার্ড" : "New Password"} register={register} registerName={'password'} />
                                    </div>

                                    <div className="col-span-5 sm:col-span-3 ">
                                        <SinglePassword label={bangla ? "পুনরায় টাইপ করুন" : "Re-Type New Password"} register={register} registerName={'confirm_password'} />
                                    </div>







                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#4c9a2a] hover:bg-[#39a85e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AD171A]"
                                >
                                    {bangla ? "হালনাগাদ" : "Update Password"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ChangePassword;



const SinglePassword = ({ label, register, registerName }) => {
    const [hide, setHide] = useState(false)
    return (
        <>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative">

                <input
                    {...register(registerName)}
                    type={!hide ? "password" : "text"}

                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {hide ? <EyeIcon onClick={() => setHide(!hide)} className='ab absolute right-2 top-2' height={18} width={18} /> :
                    <EyeOffIcon onClick={() => setHide(!hide)} className='ab absolute right-2 top-2' height={18} width={18} />}
            </div>

        </>
    )
}