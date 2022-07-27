import React from 'react';
import { Routes, Route } from "react-router-dom";
import { About, Category, Home, ProductDetails, SubCategory } from '../../screens';
import ScrollToTop from '../react-router/ScrollToTop';

const Main = () => {
    return (
        <div className="">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/subcategory/:slug" element={<SubCategory />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
                <Route path="about" element={<About />} />
                <Route path="offer" element={<About />} />
            </Routes>
        </div>
    );
};

export default Main;