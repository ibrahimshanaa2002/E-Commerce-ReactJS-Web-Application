import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";

const StructureController = ({ review }) => {
  const { name, rating, comment, date } = review;

  return (
    <div className="ReviewCard border-[1px] border-black rounded-2xl p-5 relative ">
      <div className="rating flex justify-between items-center ">
        <div className="stars flex text-yellow-400 gap-2 ">
          {[...Array(rating)].map((_, index) => (
            <IoStarSharp key={index} />
          ))}
        </div>
        <div className="dots hover:cursor-pointer">
          <HiDotsHorizontal />
        </div>
      </div>
      <div className="Name flex justify-start items-center gap-2 font-bold text-2xl py-3">
        <h1>{name}</h1>
        <IoIosCheckmarkCircle className=" text-green-700" />
      </div>
      <div className="user-desc text-justify text-gray-600 pb-8">
        <p>{comment}</p>
      </div>
      <div className="date absolute bottom-4 left-4 text-md text-gray-600 font-semibold pointer-events-none">
        <h2>Posted on {date}</h2>
      </div>
    </div>
  );
};

export default StructureController;
