import React, { useEffect, useState } from 'react';
import WaltonProduct from '../WaltonProduct/WaltonProduct';

const WaltonProducts = () => {
    const [waltonProducts, setwaltonProducts] = useState([])
    useEffect(() => {
        fetch(`https://ass-12-server.vercel.app/waltoncollection`)
            .then(res => res.json())
            .then(data => {
                setwaltonProducts(data)
            })
    }, [])
    return (
      <div className="">
        <h1 className="font-bold text-4xl text-center py-8 underline underline-offset-8">
          Walton
        </h1>
        <div className="products-category grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 my-8">
          {waltonProducts.map((waltonProduct) => (
            <WaltonProduct
              key={waltonProduct._id}
              waltonProduct={waltonProduct}
            ></WaltonProduct>
          ))}
        </div>
      </div>
    );
};

export default WaltonProducts;