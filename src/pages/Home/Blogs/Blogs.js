import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Blog from "./Blog";

const Blogs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl text-center py-8 underline underline-offset-8">
        {" "}
        Blogs
      </h2>
      <Slider {...settings}>
        {blogDetails.map((details) => (
          <Blog key={details._id} details={details}></Blog>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
