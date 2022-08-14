import React from 'react';
import { Outlet } from "react-router-dom";
import AsideBar from '../components/screen/dashboard/AsideBar';

const Dashboard = () => {

    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6 mt-0 sm:mt-16 sm:py-8 px-2">
                <AsideBar />
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;