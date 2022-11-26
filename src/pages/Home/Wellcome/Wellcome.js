import React from 'react';
import wellcome from '../../../assets/wellcome/wellcome.jpg'

const Wellcome = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={wellcome} alt='world' className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Wellcome</h1>
                    <p className="py-6">Exchanges welcome. 100% Original. 99% of products never opened or repaired. All products on website available for sale at Dhaka store. Book for TK 500 & Pay rest Cash on Delivery. Credit Card , Debit Card EMI, Loan Financing all available. Bkash, Rocket (Google Pay, PhonePe) | Card | Wallet | Net Banking & More options. All Bangladesh Shipping. Shipped by Blue Dart.  Usually delivered in 1 - 3 days.</p>
                    <button className="btn">All Product</button>
                </div>
            </div>
        </div>
    );
};

export default Wellcome;