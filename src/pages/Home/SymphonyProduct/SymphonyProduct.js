import React, { useEffect, useState } from 'react';
import SymProduct from '../SymProduct/SymProduct';

const SymphonyProduct = () => {
    const [symphonyProducts, setsymphonyProducts] = useState([])
    useEffect(() => {
        fetch(`https://ass-12-server.vercel.app/symphonycollection`)
            .then(res => res.json())
            .then(data => {
                setsymphonyProducts(data)
            })
    }, [])
    return (
        <div>
            <div className="products-category grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
                {
                    symphonyProducts.map(symphonyProduct =>
                        <SymProduct
                            key={symphonyProduct._id}
                            symphonyProduct={symphonyProduct}
                        ></SymProduct>)
                }
            </div>
        </div>
    );
};

export default SymphonyProduct;