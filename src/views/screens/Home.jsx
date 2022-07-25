import React from 'react';
import { CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';

const Home = () => {
	return (
		<>
			<Hero />
			<Step />
			<CurrentOffer />
			<FeatureCategory />
			<FeatureProduct />
			<Help />
		</>
	);
};

export default Home;