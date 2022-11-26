import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import SymphonyProduct from '../SymphonyProduct/SymphonyProduct';
import WaltonProducts from '../WaltonProducts/WaltonProducts';
import Wellcome from '../Wellcome/Wellcome';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <SymphonyProduct></SymphonyProduct>
            <WaltonProducts></WaltonProducts>
            <Wellcome></Wellcome>
        </div>
    );
};

export default Home;