import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetail = () => {
  const singleDetails = useLoaderData();
  const { name, image, detail } = singleDetails;
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={image}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {name}
          </h1>
          <p class="mb-8 leading-relaxed">{detail}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
