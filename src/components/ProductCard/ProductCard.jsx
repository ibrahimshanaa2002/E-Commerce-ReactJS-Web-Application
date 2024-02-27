import React from "react";
import product from "../../assets/Brands/product.png";

const ProductCard = () => {
  return (
    <div className="main w-full h-screen flex justify-around">
      <div className="left-container w-1/2 h-[75%] flex justify-center gap-6">
        <div className="column-img h-full justify-between  flex flex-col ">
          <img
            src={product}
            alt="Brand 1"
            className="border h-[30%] w-full hover:border-black duration-100 hover:cursor-pointer "
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
        <div className="big-image ">
          <img
            src={product}
            alt="Brand 1"
            className="h-full  border rounded-lg hover:border-black duration-100 hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="righ-container w-1/2">
        <h1 className="text-5xl font-extrabold uppercase">
          One Life Graphic T-shirt
        </h1>
        <div className="Main-starts flex justify-start items-center text-center gap-3">
          <div className="stars">5555</div>
          <div className="rate">4/5</div>
        </div>
        <div className="price-container flex justify-start items-center gap-6">
          <div className="price">
            <h1 className=" font-bold text-3xl">$260</h1>
          </div>
          <div className="old-price">
            <h1 className="font-bold text-3xl text-gray-400 ">$300</h1>
          </div>
          <div className="discount">
            <h1 className=" bg-red-100 text-red-700 rounded-3xl px-2 py-1">
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
      </div>
    </div>
  );
};

export default ProductCard;
