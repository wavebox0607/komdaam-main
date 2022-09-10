import React from 'react';
import { Banner, CategoryProduct, CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';
import Unit from './Unit';


const Home = () => {


	return (
		<>
		    <Unit/>
			<Hero />
			<FeatureCategory />
			<FeatureProduct />
			<Banner />
			<CategoryProduct />
			<CurrentOffer />
			<Step />
			<Help />
		</>
	);
};

export default Home;