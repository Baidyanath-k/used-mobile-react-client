import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import SymphonyProduct from '../SymphonyProduct/SymphonyProduct';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SymphonyProduct></SymphonyProduct>
        </div>
    );
};

export default Home;