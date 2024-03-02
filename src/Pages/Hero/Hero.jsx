import React from "react";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";
import ReviewsCardHeader from "../../components/ReviewsCard/ReviewsCardHeader/ReviewsCardHeader";
import ProductCard from './../../components/ProductCard/ProductCard';

// import Welcome from "../../components/Welcome/Welcome";
const Hero = () => {
  return (
    <>
      {/* <Welcome /> */}
      <ProductCard/>
      <ReviewsCardHeader />
      <ReviewsCard />
    </>
  );
};

export default Hero;
