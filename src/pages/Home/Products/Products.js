import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://ass-12-server.vercel.app/samsungcollection`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
      <div>
        <h2 className="text-5xl font-bold text-center my-10">Products</h2>

        <h1 className="font-bold text-4xl text-center py-8 underline underline-offset-8">
          Samsung
        </h1>
        <div className="products-category grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;