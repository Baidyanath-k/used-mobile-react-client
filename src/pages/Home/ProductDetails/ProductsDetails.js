import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const ProductsDetails = () => {
    const [buysModal, setBuysModal] = useState(null)
    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const { Color, condition_type, descreption, facility, img, location, orginal_price, posted_time, resale_price, seller_name, title, years_of_use } = product;


    const handleBuys = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const buys = {
            productTitle: product.title,
            Name: name,
            email,
            phone,
            locationName: location,
            facility
        };




        fetch('http://localhost:5000/buys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(buys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('confirmed');
                if (data.acknowledged) {
                    setBuysModal(null)


                } else {
                    toast.error(data.message);
                }

            })


    }
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
                    <label onClick={buysModal} htmlFor="booking-modal" className="btn">Buy now</label>


                    <input type="checkbox" id="booking-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">{user?.name}</h3>


                            <form onSubmit={handleBuys}>

                                <input type="text" value={title} disabled className="input input-bordered w-full my-3" />


                                <input type="text" value={`Price :${resale_price} TK`} disabled className="input input-bordered w-full my-3" />



                                <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder='Full Name' className="input input-bordered w-full my-3" />

                                <input type="email" name='email' placeholder='Email' className="input input-bordered w-full my-3" defaultValue={user?.email} disabled required />


                                <input type="text" name='location' placeholder='Location' className="input input-bordered w-full my-3" defaultValue={`Address: ${location}`} disabled required />


                                <input type="text" name='condition' placeholder='condition' className="input input-bordered w-full my-3" defaultValue={`Facility: ${facility}`} disabled required />

                                <input type="text" name='phone' placeholder='Phone Number' className="input input-bordered w-full my-3" required />





                                <input type="submit" className='input-bordered w-full py-3 text-primary bg-accent' value="Submit" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;