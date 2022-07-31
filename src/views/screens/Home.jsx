import React from 'react';
import { Banner, CategoryProduct, CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';

const Home = () => {
	return (
		<>
			<Hero />
			<FeatureCategory />
			<CurrentOffer />
			<FeatureProduct />
			<Banner />
			<CategoryProduct />
			<Step />
			<Help />
		</>
	);
};

export default Home;