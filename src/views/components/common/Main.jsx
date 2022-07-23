import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../../screens/About';
import Home from '../../screens/Home';
import ScrollToTop from '../react-router/ScrollToTop';

const Main = () => {
    return (
        <div className="">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
};

export default Main;