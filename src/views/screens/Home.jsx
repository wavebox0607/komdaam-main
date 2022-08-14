import React from 'react';
import { Banner, CategoryProduct, CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';
import Unit from './Unit';


const Home = () => {


	return (
		<>
		<Unit/>
			<Hero />
			<FeatureCategory />
			<Banner />
			<FeatureProduct />
			<CurrentOffer />
			<CategoryProduct />
			<Step />
			<Help />
		</>
	);
};

export default Home;