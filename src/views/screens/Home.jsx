import React from 'react';
// import { Banner, CategoryProduct, CurrentOffer, FeatureCategory, FeatureProduct, Help, Hero, Step } from '../components/screen/home';
import { Banner, CategoryProduct, CurrentOffer, FeatureCategory, Help, Hero, Step } from '../components/screen/home';
import BannerOne from '../components/screen/home/BannerOne';
import BannerTwo from '../components/screen/home/BannerTwo';
import Unit from './Unit';


const Home = () => {


	return (
		<>
		    <Unit/>
			<Hero />
			<FeatureCategory />
			{/* <FeatureProduct /> */}
			<BannerOne/>
			<BannerTwo/>
			<CategoryProduct />
			<Banner />
			<CurrentOffer />
			<Step />
			<Help />
		</>
	);
};

export default Home;