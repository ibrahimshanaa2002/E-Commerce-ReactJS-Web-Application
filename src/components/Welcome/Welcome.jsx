import React from "react";
import "./Welcome.css";
import StaticsCard from "../StaticsCard/StaticsCard";
import Brand1 from "../../assets/Brands/Brand1.png";
import Brand2 from "../../assets/Brands/Brand2.png";
import Brand3 from "../../assets/Brands/Brand3.png";
import Brand4 from "../../assets/Brands/Brand4.png";
import Brand5 from "../../assets/Brands/Brand5.png";
const Welcome = () => {
  return (
    <>
      <div className=" bg-image bg-cover bg-center h-full flex justify-start items-start flex-col w-full p-12  ">
        <div className="left-container flex justify-start flex-col xl:w-[50%]  py-12 sm:w-full">
          <h1 className=" font-extrabold  text-8xl  xl:py-9 xl:w-[70%] flex sm:w-full pb-4 title ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="xl:w-[65%] text-2xl pb-8 sm:w-full description ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <span className="flex justify-center items-center xl:w-[20%] sm:w-full bg-black hover:bg-orange-500 text-white font-semibold p-5 rounded-full cursor-pointer duration-300">
            Shop Now
          </span>
        </div>
        <div className=" w-[50%] static-cards">
          <StaticsCard />
        </div>
      </div>
      <div className="flex flex-row bg-black justify-around h-40 w-full flex-wrap align-center items-center">
        <img src={Brand1} alt="Brand 1" className="h-10" />
        <img src={Brand2} alt="Brand 2" className="h-10" />
        <img src={Brand3} alt="Brand 3" className="h-10" />
        <img src={Brand4} alt="Brand 4" className="h-10" />
        <img src={Brand5} alt="Brand 5" className="h-10" />
      </div>
    </>
  );
};

export default Welcome;
