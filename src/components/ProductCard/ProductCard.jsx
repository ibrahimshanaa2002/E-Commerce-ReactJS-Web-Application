import React, { useState, useEffect } from "react";
import product from "../../assets/Brands/product.png";
import { FaCheck } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import "./ProductCard.css";

const ProductCard = () => {
  //useStates:
  const [title, setTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  //Functions
  // useEffect(() => {
  //   // Fetch Product Data From Database
  //   fetchProductDataFromDatabase()
  //     .then(
  //       ({
  //         title,
  //         descriptionData,
  //         colorsData,
  //         sizesData,
  //         newPrice,
  //         oldPrice,
  //         discount,
  //       }) => {
  //         setNewPrice(newPrice);
  //         setDescription(descriptionData);
  //         setOldPrice(oldPrice);
  //         setDiscount(discount);
  //         setTitle(title);
  //         setColors(colorsData);
  //         setSizes(sizesData);
  //       }
  //     )
  //     .catch((error) => {
  //       console.error("Error fetching product data:", error);
  //     });
  // }, []);
  // const fetchProductDataFromDatabase = async () => {
  //   try {
  //     //API endpoint
  //     const response = await fetch("your-endpoint");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch product data");
  //     }
  //     const {
  //       title,
  //       description,
  //       colorsData,
  //       sizesData,
  //       newPrice,
  //       oldPrice,
  //       discount,
  //     } = await response.json();
  //     return {
  //       title,
  //       description,
  //       colorsData,
  //       sizesData,
  //       newPrice,
  //       oldPrice,
  //       discount,
  //     };
  //   } catch (error) {
  //     console.error("Error fetching product data:", error);
  //     throw error;
  //   }
  // };
  useEffect(() => {
    // Simulated fetch from database
    const fetchData = async () => {
      try {
        const data = await fetchProductDataFromDatabase();
        setTitle(data.title);
        setDescription(data.description);
        setColors(data.colorsData);
        setSizes(data.sizesData);
        setNewPrice(data.newPrice);
        setOldPrice(data.oldPrice);
        setDiscount(data.discount);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchProductDataFromDatabase = async () => {
    // Simulated data
    return {
      title: "Example Product",
      description: "This is a description of the example product.",
      colorsData: ["Red", "Blue", "Green"],
      sizesData: ["Small", "Medium", "Large"],
      newPrice: 50,
      oldPrice: 60,
      discount: 20,
    };
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  /////////////////////////////////////

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
    <div className="main w-full h-[80vh] flex justify-around gap-6 p-10 ">
      <div className="left-container flex-row-reverse w-1/2  flex  gap-6">
        <div className="big-image img-hover-zoom ">
          <img
            src={product}
            alt="Brand 1"
            className="h-full hover:cursor-pointer"
          />
        </div>
        <div className="column-img h-full justify-between  flex flex-col overflow-auto gap-6">
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
      </div>
      <div className="right-container flex justify-center flex-col w-1/2 h-full">
        <h1 className="text-5xl font-extrabold uppercase title">{title}</h1>
        <div className="Main-starts flex justify-start items-center text-center gap-3 py-2">
          <div className="stars flex text-yellow-400 text-2xl">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="rate">4.5/ 5</div>
        </div>
        <div className="price-container flex justify-start items-center gap-4">
          <div className="price">
            <h1 className="font-bold text-3xl">${newPrice}</h1>
          </div>
          <div className="old-price">
            <h1 className="font-bold text-3xl text-gray-400">${oldPrice}</h1>
          </div>
          <div className="discount">
            <h1 className="bg-red-100 text-[#FF3333] rounded-3xl px-5 py-1">
              -{discount}%
            </h1>
          </div>
        </div>
        <div className="product-desc border-b-2">
          <p className="py-5">{description}</p>
        </div>
        <div className="color-container py-2 border-b-2">
          <h1 className="text-gray-500">Select Color</h1>
          <div className="colors flex flex-col gap-5 py-2">
            <div className="colors flex gap-3 ">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => handleColorClick(color)}
                  style={{ backgroundColor: color }}
                  className={`w-12 h-12 cursor-pointer rounded-full ${
                    selectedColor === color ? "relative" : ""
                  }`}
                >
                  {selectedColor === color && (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <FaCheck />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sizes-container py-2 border-b-2">
          <h1 className="text-gray-500">Select Size</h1>
          <div className="sizes flex gap-4 py-2 ">
            {sizes.map((size, index) => (
              <div
                key={index}
                onClick={() => handleSizeClick(size)}
                className={`py-2 px-4  hover:bg-gray-200 border rounded-xl cursor-pointer ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
              >
                {size}
              </div>
            ))}
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
          <div className="Add-To-Cart-container w-[70%] bg-black text-white rounded-full gap-5 p-3 flex items-center justify-center hover:text-black hover:bg-orange-400 duration-300 cursor-pointer">
            <button className="cart-button text-3xl">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
