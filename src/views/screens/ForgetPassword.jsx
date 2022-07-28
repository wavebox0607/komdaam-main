import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { clearMessage } from '../../redux/slice/message';
import { httpReq } from '../../services';

const ForgetPassword = () => {

    const [user, setUser] = useState({})
    const [page, setPage] = useState('find')




    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    return (
        <>
            <div className='container mx-auto'>
                <div className="text-sm breadcrumbs mt-6">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>Forgot ~ Password</li>
                    </ul>

                </div>

                <section className="flex justify-center">

                    <div className="max-w-md">

                        {
                            page === 'otp' ? <Verifying setPage={setPage} setUser={setUser} user={user} /> :
                                page === 'find' ? <Finding setPage={setPage} setUser={setUser} /> :
                                    <Changeing setUser={setUser} setPage={setPage} user={user} />
                        }

                    </div>



                </section>


            </div >
        </>
    );
};

export default ForgetPassword;





const Finding = ({ setPage, setUser }) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        setLoading(true)
        if (data?.phone) {

            httpReq.post('forget-pass', { phone: data.phone })
                .then(res => {
                    

                    if (res?.id) {

                        setPage('otp')
                        setUser(res)
                        setLoading(false)
                    }

                })
                .catch(er => {
                    setLoading(false)
                    if (er.response.data.error) {
                        toast(er.response.data.error, { type: 'warning' })
                        setPage('find')
                        setUser({})
                        setLoading(false)
                    }
                })
        } else {

            setLoading(false)
        }
    }
    return (
        <form className="bg-white border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-3xl font-semibold my-3 text-black text-center'>Find Your Account</h4>
            <input
                {...register("phone", { required: true })}
                type="tel"
                placeholder='Phone number'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
            {errors.phone?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}

            {loading ?
                <h1 className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[#50c878] text-white hover:bg-[#43b368] hover:text-gray-200`}>Loading....</h1>
                :
                <input type="submit" value="Find" className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[#50c878] text-white hover:bg-[#43af67] hover:text-gray-100`}  />
            }
        </form>
    )
}
const Verifying = ({ setPage, setUser, user }) => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        if (data.otp) {
            setLoading(true);
            data['user_id'] = user?.id
            httpReq.post('forget-verify', data)
                .then(({ error, verify, success, user_id }) => {
                    if (success) {
                        toast(success, { type: 'success' })
                    }
                    if (error) {
                        toast(error, { type: 'warning' })
                    }
                    if (verify) {

                        setPage('cng')
                        setUser({ user_id })
                    }
                    setLoading(false);
                })
                .catch(er => {
                    setLoading(false);
                    
                })

        }
    }
    return (

        <form className="bg-white border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <h4 className='text-3xl font-semibold my-3 text-black text-center'>Verify Your Account</h4>
        <input
            {...register("otp", { required: true })}
            type="tel"
            placeholder='Your OTP'
            className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
        {errors.otp?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}

       
            {loading ?
                <h1 className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[#50c878] text-white hover:bg-[#43b368] hover:text-gray-200`}>Loading....</h1>
                :


                <input type="submit" value="Verify" className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[#50c878] text-white hover:bg-[#43b368] hover:text-gray-200`}  />
            }
      
    </form>
    )
}
const Changeing = ({ setPage, setUser, user }) => {


    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setLoading(true)
        if (data.password === data.confirm_password) {
            httpReq.post('change-password', { user_id: user?.user_id, ...data })
                .then(({ success, error }) => {
                    if (success) {

                        toast(success, { type: 'success' })

                        navigate('/login')
                        setLoading(false)

                        setPage('find')
                        setUser({})
                    }
                    if (error) {
                        toast(error, { type: 'warning' })
                        setLoading(false)

                    }
                })
                .catch(er => {
                    setLoading(false)
                    
                })
        } else {
            toast("your password dosen't match", { type: 'warning', position: 'top-center', delay: 1 })
            setLoading(false)

        }
    }


    return (
        <form className="bg-white border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <h4 className='text-3xl font-semibold my-3 text-black text-center'>Change Your Password</h4>
            <input
                {...register("password", { required: true, minLength: 4 })}

                type="password"

                placeholder='Passoword'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />
            {errors.password?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
            {errors.password?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}



            <input
                type={'password'}
                {...register("confirm_password", { required: true, minLength: 4 })}
                placeholder='Confirm Password'
                className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

            {errors.confirm_password?.type === 'required' && <p className='text-red-300 font-sans font-semibold mt-0'>The field is required!</p>}
            {errors.confirm_password?.type === 'minLength' && <p className='text-red-300 font-sans font-semibold mt-0'> You Must Give 8 character</p>}


                {loading ?
                    <h1 className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[#50c878] text-white hover:bg-[#43b368] hover:text-gray-200`}>Loading....</h1>
                    :


                    <input type="submit" value="Submit" className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-[#50c878] text-white hover:bg-[#43b368] hover:text-gray-200`}  />
                }
          
        </form>
    )
}


