import React from 'react';
import { Product } from '../../services';
import ProductCard from '../components/card/ProductCard';

const Offer = () => {
    // const [page, setPage] = useState('?page=1')
    const { data } = Product.GetAll()
    console.log(data);
    // setPage('?page=1')
    return (
        <div className='my-16 mx-auto'>
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 2md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
                {
                    data?.data?.map((item) => <ProductCard key={item?.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Offer;