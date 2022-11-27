import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/buys`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Facility</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Product Title</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => console.log(product))
                        }
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.facility}</td>
                                <td>{product.locationName}</td>
                                <td>{product.phone}</td>
                                <td>{product.productTitle}</td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;