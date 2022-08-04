import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" BTB", " BTC", " SASS"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="max-w-[1200px] py-5  px-6 mx-auto min-h-[calc(100vh-80px)] children:py-[7px] flex flex-col justify-center items-center">
      <p className="text-[#00df9a] font-bold text-center">
        GROWING WITH DATA ANALYTICS
      </p>
      <h1 className="text-5xl font-bold text-center md:text-3xl">
        {" "}
        Growing With Data
      </h1>
      <p className="text-2xl font-bold md:text-xl text-center">
        Fast, flexible financing for
        <span className="font-bold ml-2 text-gray-500" ref={el}></span>
      </p>
      <p className="text-2xl max-w-[800px] md:text-xl font-bold text-center text-gray-500">
        Monitor your data analytics to increase revenue for BTB, BTC, & SASS
        platforms.
      </p>
      <button className="bg-[#00df9a] rounded-md font-medium px-11 mx-auto md:w-[90%] mt-2 !py-[12px] text-black">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
