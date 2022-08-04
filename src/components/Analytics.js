import React from "react";

const Analytics = () => {
  return (
    <section className="bg-white py-16 text-black">
      <div className="grid max-w-[1200px] mx-auto grid-cols-2 items-center px-6 md:grid-cols-1">
        <img
          className="max-w-[550px] w-full mb-7"
          src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg"
        />
        <div>
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-4xl font-bold my-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>

          <button className="text-[#00df9a] bg-black rounded-md py-2 mt-5 md:w-[90%] mx-auto px-7">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
