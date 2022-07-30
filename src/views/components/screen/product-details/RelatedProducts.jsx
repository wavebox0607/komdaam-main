import React from 'react';
import {  Product } from '../../../../services';
import ProductCard from '../../card/ProductCard';

const RelatedProducts = ({ slug }) => {
	const { data } = Product.GetRelatedProduct(slug)

	return (
		<div className='my-7'>
			<div className="my-3">
				<h4 className='text-black font-semibold text-lg' >{"Related products"}</h4>
			</div>
			<div className="h-[1px] bg-gray-300 mb-4 "></div>
			<div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
				{data?.data?.slice(0, 4).map((p) => <ProductCard key={p?.id} item={p} />)}

			</div>

		</div>
	);
};

export default RelatedProducts;