import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { clearMessage } from '../../redux/slice/message';
import { verify } from '../../redux/slice/auth';

const VerifyOtp = () => {
    // const { design } = useTheme()
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setLoading(true);
        dispatch(verify(data))
            .unwrap()
            .then(({ verify, error }) => {
                if (error) {
                    toast(error, { type: 'error' })
                }
                if (verify) {
                   
                    toast(verify, { type: 'success' })
                    navigate("/profile");
                    window.location.reload()
                } else {
                    navigate('/verify-otp')
                }

            })
            .catch((er) => {
                toast("Credential Doesn\"t Match", { type: 'error' })
                setLoading(false);
            });
    };


    return (
        <>
            <div className="max-w-md mx-auto">

                <form className="border border-gray-300 rounded-2xl p-6 md:m-14 flex flex-col space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className='text-3xl font-semibold my-3 text-black text-center'>Verify Your Phone Number</h4>
                    <input
                       type="Number"
                       {...register("otp", { required: true })}
                        placeholder='Your OTP'
                        className='py-3 px-4 border border-gray-300 rounded-md placeholder:text-gray-500 text-sm focus:outline-0' />

                    <p className='text-red-400'> {errors?.otp?.type === 'required' && "OTP is required"}</p>


                    {loading ?
                        <p className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-red-700 text-white hover:bg-red-900 hover:text-gray-200`}  >Loading</p>
                        :
                        // disable ?
                        //     <input type="submit" value="Resend Otp" disabled className='text-left py-3 px-8 rounded-md text-white' style={{ backgroundColor: button1.color }} /> :
                        <input type="submit" value="Verify" className={`text-center py-2 px-8 rounded-md  font-sans font-bold tracking-wider bg-red-700 text-white hover:bg-red-900 hover:text-gray-200`} />
                    }

                    {/* <div className="flex justify-center">
        <Countdown
            date={Date.now() + 60000}
            renderer={renderer}
        />
    </div> */}
                </form>
            </div>

        </>
    );
};

export default VerifyOtp;