import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp } from '../../redux/slice/auth';
import { clearMessage } from '../../redux/slice/message';

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        setLoading(true)

        dispatch(signUp(data))
            .unwrap()
            .then(({ verify, error }) => {
                setLoading(false)

                if (error) {
                    toast(error, { type: 'error' })
                    navigate("/login");
                } else {
                    if (!verify) {
                        window.location.replace("/verify-otp");
                    }
                }
            })
            .catch((error) => {
                setLoading(false)
            });

    }

    return (
        <div className=' max-w-xl w-full mx-auto'>
            <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-3xl font-semibold my-3 text-black'>Create an Account</h4>
                <p className='pb-6 text-black text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>



                <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder='Name'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.name?.type === 'required' && "phone name is required"}</p>

                <input
                    {...register("email", { required: true })}
                    type='email'
                    placeholder='Email'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.email?.type === 'required' && "phone email is required"}</p>

                <input
                    {...register("phone", { required: true })}
                    type="number"
                    placeholder='Your Phone'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.phone?.type === 'required' && "phone Number is required"}</p>

                <input
                    {...register("password", { required: true })}
                    type='password'
                    placeholder='Your Passowrd'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.password?.type === 'required' && "phone password is required"}</p>



                <div className="flex justify-end items-center">
                    <NavLink to="/password-forgot" className="label-text">Forgot password?</NavLink>
                </div>

                <div className="">
                    {loading ?
                        <p className='text-left py-3 px-8 w-28 rounded-md text-gray-400 bg-[#4c9a2a]'  >Loading</p>
                        :
                        <input type="submit" value="Register" className='text-left py-3 px-8 rounded-md text-white bg-[#4c9a2a]' />
                    }
                </div>

                <p className="text-base font-medium text-[#5A5A5A]">
                    Already have an account?
                    <NavLink
                        to="/login"
                        className="text-primary underline font-sans font-bold text-black pl-1"
                    >
                        Login
                    </NavLink>
                </p>

            </form>
        </div>
    );
};

export default Signup;


