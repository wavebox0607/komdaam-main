import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../redux/slice/auth';
import { clearMessage } from '../../redux/slice/message';

const Login = () => {


    const [loading, setLoading] = useState(false);




    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        dispatch(login(data))
            .unwrap()
            .then(({ verify, error }) => {
                
                if (error) {
                    toast(error, { type: 'error' })
                }
                if (verify) {
                    window.location.replace("/profile");
                } else {
                    window.location.replace("/verify-otp");
                    
                }

            })
            .catch((er) => {

                toast("Credential Doesn\"t Match", { type: 'error' })

                setLoading(false);
            });
    };
    return (
        <div className=' max-w-xl w-full mx-auto'>
            <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-3xl font-semibold my-3 text-black'>Login</h4>



                <input
                    {...register("phone", { required: true })}
                    type="number"
                    placeholder='Your Phone'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.phone?.type === 'required' && "phone Number is required"}</p>


                <input
                    {...register("password", { required: true })}
                    type='password'
                    placeholder='Password'
                    className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
                <p className='text-red-400'> {errors.password?.type === 'required' && "Password is required"}</p>



                <div className="flex justify-end items-center">
                    <NavLink to="/password-forgot" className="label-text">Forgot password?</NavLink>
                </div>

                <div className="">
                    {loading ?
                        <p className='text-left py-3 px-8 w-28 rounded-md text-gray-50 bg-[#4c9a2a]'>Loading</p>
                        :
                        <input type="submit" value="Login" className='text-left py-3 px-8 rounded-md text-white bg-[#4c9a2a]' />
                    }
                </div>

                <p className="text-base font-medium text-[#5A5A5A]">
                    Don't have any account?
                    <NavLink
                        to="/sign-up"
                        className="text-primary underline font-sans font-bold text-black pl-1"
                    >
                        Register
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default Login;