import React from 'react';
import { Hero } from '../components/screen/home';
import Help from '../components/screen/home/Help';

const Home = () => {
	return (
		<div className='w-full bg-stone-700 flex justify-center h-screen'>
			<Hero />
			<Help />
		</div>
	);
};

export default Home;