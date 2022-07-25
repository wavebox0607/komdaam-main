import React from 'react';
import { CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';

const Home = () => {
	return (
		<div className='w-full'>
			<Hero />
			<Step />
			<CurrentOffer />
			<FeatureCategory />
			<FeatureProduct />
			<Help />
		</div>
	);
};

export default Home;