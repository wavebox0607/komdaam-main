import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { bangla } from '../../constant/language';
import Address from '../components/screen/checkout/Address';
import Discount from '../components/screen/checkout/Discount';
import PaymentGateway from '../components/screen/checkout/PaymentGateway';
import YourOrders from '../components/screen/checkout/YourOrders';

const Checkout = () => {
    const cartList = useSelector((state) => state.cart.cartList)
    const [cuponDis, setCuponDis] = useState()
    const [shipping_area, setShipping_area] = useState(0)

    const [selectPayment, setSelectPayment] = useState(null)
    const [selectAddress, setSelectAddress] = useState(null)

    console.log(cartList,"list");

    if (!cartList?.length) {
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <h1 className='text-gray-400 font-bold text-3xl font-sans capitalize'>You have no product in your cart</h1>
            </div>
        )
    }

    return (
        <>
            <div className='' style={{ backgroundColor: "#F3F4F6" }}>
                <h2 className='py-10 text-4xl font-semibold text-center'>{bangla ? "চেকআউট" : "Checkout"}</h2>
                <div className="">
                    <div className="md:grid md:grid-cols-3 md:gap-6 mt-1 py-4 px-2">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <h3 className='text-center font-semibold text-lg text-black'>{bangla ? "শিপিং তথ্য" : "Shipping Info"}</h3>
                            <Address selectAddress={selectAddress} setSelectAddress={setSelectAddress} />

                            <Discount setCupon={setCuponDis} setShipping_area={setShipping_area} />


                            <PaymentGateway selectPayment={selectPayment} setSelectPayment={setSelectPayment} />

                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-1">
                            <YourOrders cuponDis={cuponDis} selectAddress={selectAddress} selectPayment={selectPayment} shipping_area={shipping_area} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;