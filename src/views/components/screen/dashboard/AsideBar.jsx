import React from 'react';
import {
	NavLink,
	useLocation
} from "react-router-dom";
import { bangla } from '../../../../constant/language';

const AsideBar = () => {
	const location = useLocation()
	return (
		<>
			<div className="mt-5 md:mt-0 md:col-span-1">


				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className=" py-5 bg-white space-y-3  flex flex-col">

						<NavLink to='/profile' className={`${location.pathname === '/profile' ? " active_color" : "border-white "}  border-l-4 text-md font-semibold  pl-5 py-1 tracking-wider`}>{bangla ? "আমার প্রোফাইল" : "Profile"}</NavLink>

						<NavLink to='/profile/order' className={`${location.pathname === '/profile/order' ? " active_color" : "border-white "}  border-l-4 text-md font-semibold  pl-5 py-1 tracking-wider`}>{bangla ? "আমার অর্ডারসমূহ" : "Your Order"}</NavLink>
						<NavLink to='/profile/change-password' className={`${location.pathname === '/profile/change-password' ? " active_color" : "border-white "}  border-l-4 text-md font-semibold  pl-5 py-1 tracking-wider`}>{bangla ? "পাসওয়ার্ড পরিবর্তন করুন" : "Change Password"}</NavLink>






					</div>

				</div>
			</div>
		</>
	);
};

export default AsideBar;