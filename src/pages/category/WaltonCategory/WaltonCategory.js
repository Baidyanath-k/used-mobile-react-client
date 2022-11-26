import React from 'react';
import WaltonProducts from '../../Home/WaltonProducts/WaltonProducts';

const WaltonCategory = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-10'>Walton</h2>
            <h2 className='text-5xl font-bold text-center my-10'>Product</h2>
            <WaltonProducts></WaltonProducts>
        </div>
    );
};

export default WaltonCategory;