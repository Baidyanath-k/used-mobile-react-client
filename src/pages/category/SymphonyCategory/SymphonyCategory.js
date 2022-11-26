import React from 'react';
import SymphonyProduct from '../../Home/SymphonyProduct/SymphonyProduct';

const SymphonyCategory = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-10'>Symphony</h2>
            <h2 className='text-5xl font-bold text-center my-10'>Product</h2>
            <SymphonyProduct></SymphonyProduct>
        </div>
    );
};

export default SymphonyCategory;