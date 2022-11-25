import React, { useEffect, useState } from 'react';
import WaltonProduct from '../WaltonProduct/WaltonProduct';

const WaltonProducts = () => {
    const [waltonProducts, setwaltonProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/waltoncollection`)
            .then(res => res.json())
            .then(data => {
                setwaltonProducts(data)
            })
    }, [])
    return (
        <div className="products-category grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {
                waltonProducts.map(waltonProduct =>
                    <WaltonProduct
                        key={waltonProduct._id}
                        waltonProduct={waltonProduct}
                    ></WaltonProduct>)
            }
        </div>
    );
};

export default WaltonProducts;