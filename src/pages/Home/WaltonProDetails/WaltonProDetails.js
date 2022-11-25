import React from 'react';
import { useLoaderData } from 'react-router-dom';

const WaltonProDetails = () => {
    const waltonProduct = useLoaderData();
    const { Color, condition_type, descreption, facility, img, location, orginal_price, posted_time, resale_price, seller_name, title, years_of_use } = waltonProduct;
    return (
        <div className="card bg-base-100 shadow-xl m-auto">
            <div className="">

                <h2 className="card-title text-center block my-9">{title}</h2>
            </div>
            <figure><img className=' h-96' src={img} alt="Details" /></figure>
            <div className="card-body">

                <p>Color:{Color}</p>
                <p>Product Condition: {condition_type}</p>
                <p>{facility}</p>
                <p>Receive Product: {location}</p>
                <p>Orginal Price:{orginal_price} TK</p>
                <p>Sale Price:{resale_price} TK</p>
                <p>Posted Time:{posted_time}</p>
                <p>Seller Name: {seller_name}</p>
                <p>Use Product {years_of_use} Year</p>

                <p className='text-center'>{descreption}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default WaltonProDetails;