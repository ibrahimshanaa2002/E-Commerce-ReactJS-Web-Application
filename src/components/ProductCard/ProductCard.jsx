import React, { useState } from "react";
import product from "../../assets/Brands/product.png";
import { RiStarSFill } from "react-icons/ri";

import "./ProductCard.css";

const ProductCard = () => {
  //Functions
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="main w-full h-screen flex justify-around gap-6 p-10 ">
      <div className="left-container w-1/2 h-[75%] flex justify-center gap-6">
        <div className="column-img h-full justify-between  flex flex-col ">
          <img
            src={product}
            alt="Brand 1"
            className="border h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer  "
          />
          <img
            src={product}
            alt="Brand 1"
            className=" border  h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer"
          />
          <img
            src={product}
            alt="Brand 1"
            className=" border  h-[30%] w-full rounded-xl hover:border-black duration-100 hover:cursor-pointer"
          />
        </div>
        <div className="big-image img-hover-zoom ">
          <img
            src={product}
            alt="Brand 1"
            className="h-full hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="righ-container w-1/2">
        <h1 className="text-5xl font-extrabold uppercase">
          One Life Graphic T-shirt
        </h1>
        <div className="Main-starts flex justify-start items-center text-center gap-3 py-5">
          <div className="stars flex text-yellow-400 text-2xl">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="rate">4.5/ 5</div>
        </div>
        <div className="price-container flex justify-start items-center gap-6">
          <div className="price">
            <h1 className=" font-bold text-3xl">$260</h1>
          </div>
          <div className="old-price">
            <h1 className="font-bold text-3xl text-gray-400 ">$300</h1>
          </div>
          <div className="discount">
            <h1 className=" bg-red-100 text-red-700 rounded-3xl px-5 py-1">
              -40%
            </h1>
          </div>
        </div>
        <div className="product-desc border-b-2">
          <p className="py-5">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
        <div className="color-container py-5 border-b-2">
          <h1 className=" text-gray-500">Select Colors</h1>
          <div className="colors flex gap-5 py-5">
            <div class="w-12 h-12 bg-[#4F4631] rounded-full"></div>
            <div class="w-12 h-12 bg-[#314F4A] rounded-full"></div>
            <div class="w-12 h-12 bg-[#31344F] rounded-full"></div>
          </div>
        </div>
        <div className="size-container py-5 border-b-2">
          <h1 className="text-gray-500">Choose Size</h1>
          <div class="flex space-x-4 py-4">
            <div class="w-20 h-10 bg-[#F0F0F0] rounded-full text-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Small
            </div>
            <div class="w-20 h-10 bg-[#F0F0F0] rounded-full text-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Medium
            </div>
            <div class="w-20 h-10 bg-[#F0F0F0] rounded-full text-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer">
              Large
            </div>
            <div class="w-20 h-10 bg-[#F0F0F0] rounded-full text-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer">
              X-Large
            </div>
          </div>
        </div>
        <div className="Counter flex text-center items-center w-full py-5 gap-4">
          <div className="counter-container w-[30%]  bg-[#F0F0F0] rounded-full gap-5 p-3 flex items-center justify-around">
            <div className="Negative">
              <button className=" text-3xl" onClick={decrementCount}>
                -
              </button>
            </div>
            <div className="number-count w-[50%]">
              <p>{count}</p>
            </div>

            <div className="positive">
              <button className="text-3xl" onClick={incrementCount}>
                +
              </button>
            </div>
          </div>
          <div className="Add-To-Cart-container w-[70%] bg-black text-white rounded-full gap-5 p-3 flex items-center justify-center hover:text-black hover:bg-orange-400 duration-300">
            <button className="text-3xl">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
