import React from "react";

const Newsletter = () => {
  return (
    <div className="grid max-w-[1200px] mx-auto chidlren:w-full px-6 py-16 gap-11 grid-cols-2 md:grid-cols-1">
      <div>
        <p className="text-3xl mb-4 font-bold">
          Want tips & tricks to optimize your flow?
        </p>
        <p>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div>
        <div className="mb-3 children:mx-2 children:rounded-md">
          <input
            type="email"
            placeholder="Enter Your Name"
            className="py-2 sm:mb-2 px-4"
          />
          <button className="bg-[#00df9a] py-2 px-4 text-black">
            {" "}
            Notify me
          </button>
        </div>
        <div>
          <p>
            We care bout the protection of your data. Read our <br></br>
            <span className="text-[#00df9a] underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
