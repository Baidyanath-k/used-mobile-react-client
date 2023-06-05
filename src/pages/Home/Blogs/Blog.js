import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ details }) => {
  const { _id, name, image, detail } = details;
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-9 px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {name}
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  {detail.slice(0, 100) + "..."}
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    to={`/blogs/${_id}`}
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
