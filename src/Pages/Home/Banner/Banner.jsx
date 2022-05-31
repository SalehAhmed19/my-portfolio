import React from "react";
import s from "../../../Assets/Img/s.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
      }}
      className="flex justify-between"
    >
      <div className="w-1/2">
        <h3 className="text-gray-400 font-secondary uppercase">
          <span className="mr-3">W e l c o m e</span>{" "}
          <span className="mr-3">t o</span> <span className="mr-3">m y</span>{" "}
          <span className="mr-3">w o r l d</span>
        </h3>
        <h1 className="text-white font-bold text-6xl font-heading">
          Hi, I'm Saleh Ahmed
        </h1>
      </div>
      <div>
        <img src={s} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Banner;
