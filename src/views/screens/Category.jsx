import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryImg } from '../../constant/imgUri';
import { Product } from '../../services';

const Category = () => {
    const params = useParams()

    const { data } = Product.GetCatProduct(params?.slug)


    console.log(data);

    return (




        <div className="bg-gray-100">
            <div className="mx-auto mt-16 pt-0">
                <img src={categoryImg + data?.category?.banner} className='w-full h-80' alt="" />
            </div>
            <div className="mx-4 py-4">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a href='/'>Categores/{params.slug}</a>
                        </li>

                        <li className='font-bold tracking-wider '>{"categories?.name"}</li>
                    </ul>
                </div>
            </div>
            <div className="divider text-black">{"categories?.name"}</div>

            <div className="flex  justify-center mt-20" style={{ minHeight: '50vh' }}>
                <h2 className='font-bold text-4xl text-center text-gray-400'>No Product Available</h2>
            </div>
        </div>
    )

};

export default Category;