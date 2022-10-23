import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from '../../../private/Private';
import PublicRoute from '../../../private/Public';
import { About, Category, ChangePassword, Checkout, Dashboard, ForgetPassword, Home, Login, NotFound, Offer, Order, OrderDetails, ProductDetails, Profile, Signup, SubCategory, VerifyOtp, Search } from '../../screens';

import ScrollToTop from '../react-router/ScrollToTop';
import HomePage from './../../../services/home.service';

const Main = () => {
     const { data } = HomePage.GetCategory()
    return (
        <div className="">
            <ScrollToTop />
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/category/:slug" element={<Category dataSub={data}/>} />
                <Route path="/subcategory/:slug" element={<SubCategory dataSub={data} />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
                <Route path="/search" element={<Offer />} />
                <Route path="/search/:src" element={<Search />} />
                <Route path="about" element={<About />} />
                <Route path="offer" element={<Offer />} />


                {/* Private Routes  */}
                <Route path="profile" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                    <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                    <Route path="order" element={<Order />} />
                    <Route path="change-password" element={<ChangePassword />} />
                    <Route path="order/:order_id" element={<OrderDetails />} />
                </Route>
                <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />

                {/* Public Routes  */}
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/sign-up" element={<PublicRoute><Signup /></PublicRoute>} />
                <Route path="/verify-otp" element={<PublicRoute><VerifyOtp /></PublicRoute>} />
                <Route path="/password-forgot" element={<PublicRoute><ForgetPassword /></PublicRoute>} />



            </Routes>
        </div>
    );
};

export default Main;