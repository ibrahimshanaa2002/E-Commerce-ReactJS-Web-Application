import React from "react";
import "../Welcome/Welcome.css";

const StaticsCard = () => {
  return (
    <div class=" py-12 ">
      <div class="flex flex-wrap ">
        <div class="w-full md:w-1/3 p-3 flex flex-col flex-grow flex-shrink">
          <div class="flex-1  ttext-black rounded-t rounded-b-none overflow-hidden ">
            <div class="p-8 text-3xl font-bold text-center border-b-4 duration-300 transition-transform hover:transform hover:-translate-y-3  hover:text-orange-500 cursor-pointer">
              <span className=" hover:text-orange-500 duration-300">200+</span>
            </div>
            <ul class="w-full text-center text-sm">
              <li class=" py-4 text-lg">International Brands</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-3 flex flex-col flex-grow flex-shrink">
          <div class="flex-1  text-black rounded-t rounded-b-none overflow-hidden ">
            <div class="p-8 text-3xl font-bold text-center border-b-4  duration-300 transition-transform hover:transform hover:-translate-y-3  hover:text-orange-500  cursor-pointer ">
              <span className=" hover:text-orange-500 duration-300">
                2,000+
              </span>
            </div>
            <ul class="w-full text-center text-sm">
              <li class=" py-4 text-lg">High-Quality Products</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-3 flex flex-col flex-grow flex-shrink">
          <div class="flex-1  text-black rounded-t rounded-b-none overflow-hidden ">
            <div class="p-8 text-3xl font-bold text-center border-b-4 duration-300 transition-transform hover:transform hover:-translate-y-3  hover:text-orange-500 cursor-pointer ">
              <span className="inline-block duration-300  ease-in-out ">
                30,000+
              </span>
            </div>
            <ul class="w-full text-center text-sm">
              <li class=" py-4 text-lg">Happy Customers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticsCard;
