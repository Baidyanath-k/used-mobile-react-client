import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Countup from "../Countup/Countup";
import Products from "../Products/Products";
import SymphonyProduct from "../SymphonyProduct/SymphonyProduct";
import WaltonProducts from "../WaltonProducts/WaltonProducts";
import Wellcome from "../Wellcome/Wellcome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <SymphonyProduct></SymphonyProduct>
      <WaltonProducts></WaltonProducts>
      <Wellcome></Wellcome>
      <Blogs></Blogs>
      <About></About>
      <Countup></Countup>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
