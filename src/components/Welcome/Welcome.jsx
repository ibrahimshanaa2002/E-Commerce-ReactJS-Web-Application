import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div>
      <div className="container bg-cover bg-center bg-[full] bg-image w-full">
        <div className="left-container flex justify-start flex-col w-[50%] py-9">
          <h1 className=" font-extrabold text-5xl py-9">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <span>Shop Know</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
