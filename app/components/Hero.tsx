"use client";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, book or rent a car - quickly and easily!</h1>
        <p className="hero__subtitle">Streamline your car rental experience with our effortless booking process.</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-600 text-white rounded-full py-3 px-6 hover:bg-blue-700"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <img src="/getImage.webp" alt="getImage.webp" width={500} height={800} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
