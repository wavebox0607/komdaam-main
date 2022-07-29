import React, { useEffect, useState } from 'react';
import { httpReq } from '../../../../services';
import ProductCard from '../../card/ProductCard';

const RelatedProducts = ({ id }) => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		httpReq.post('related_product', { category_id: id })
			.then(res => {
				setProducts(res)
			})
	}, [id])

	return (
		<div className='my-7'>
			<div className="my-3">
				<h4 className='text-black font-semibold text-lg' >{"Related products"}</h4>
			</div>
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
				{products?.slice(0, 4).map((p) => <ProductCard key={p?.id} item={p} />)}

			</div>

		</div>
	);
};

export default RelatedProducts;