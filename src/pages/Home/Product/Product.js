import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product)
    const { _id, title, img, orginal_price, resale_price } = product
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl border-solid">
            <figure><img src={img} className='h-80 w-full' alt="Sumsung" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="price">
                    <p className='text-lg font-bold'>Orginal Price:{orginal_price} TK</p>
                    <p className='text-lg font-bold'>Sale Price:{resale_price} TK</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/product/${_id}`}><button className="btn">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;