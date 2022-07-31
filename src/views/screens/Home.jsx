import React from 'react';
import { Banner, CategoryProduct, CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';

const Home = () => {
	return (
		<>
			<Hero />
			<FeatureCategory />
			<CurrentOffer />
			<FeatureProduct />
			<CategoryProduct />
			<Banner />
			<Step />
			<Help />
		</>
	);
};

export default Home;