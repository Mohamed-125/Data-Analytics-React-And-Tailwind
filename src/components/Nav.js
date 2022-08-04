import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => {
    setNav((pre) => !pre);
  };
  return (
    <div className="max-w-[1200px] px-6 m-auto h-[80px] flex justify-between items-center">
      <div className="text-4xl font-bold text-[#00df9a]">React .</div>
      {!nav ? (
        <AiOutlineMenu
          onClick={clickHandler}
          className="text-white cursor-pointer z-50 hidden sm:block text-3xl"
        />
      ) : (
        <AiOutlineClose
          onClick={clickHandler}
          className="text-white hidden  z-50 cursor-pointer sm:block text-3xl"
        />
      )}

      <div className="children:px-5  sm:hidden">
        <a>Home</a>
        <a>Account</a>
        <a>Sign In</a>
        <a>
          <button className="bg-white px-3 py-2 rounded-lg text-black ">
            Get Started
          </button>
        </a>
      </div>

      <div
        className={`${
          nav ? "block" : "hidden"
        } flex flex-col bg-black children:text-xl items-center justify-center gap-14 fixed inset-0 `}
      >
        <a>Home</a>
        <a>Account</a>
        <a>Sign In</a>
        <a className="w-full ">
          <button className="bg-white block mx-auto px-3 w-[90%] py-2 rounded-lg text-black">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
