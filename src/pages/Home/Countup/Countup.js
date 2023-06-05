import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Countup = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
      }}
      onExit={() => {
        setCounterOn(false);
      }}
    >
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={3} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={2} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={32} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p class="leading-relaxed">Sale</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {counterOn && (
                  <CountUp start={0} end={12} duration={2} delay={1}></CountUp>
                )}
                K
              </h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Countup;
