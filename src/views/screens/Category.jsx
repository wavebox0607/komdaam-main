import React from 'react';
import { useParams } from 'react-router-dom';
const Category = () => {
    let { slug } = useParams();
    console.log(slug);
    return (
        <div>

        </div>
    );
};

export default Category;