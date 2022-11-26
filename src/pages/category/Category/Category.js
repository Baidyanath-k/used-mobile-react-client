import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Products from '../../Home/Products/Products';


const Category = () => {
    const samsungCategorys = useLoaderData()
    console.log(samsungCategorys)
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-10'>Samsung</h2>
            <Products></Products>
        </div>
    );
};

export default Category;