import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  return (
    <div class="card w-96 shadow-xl mx-auto hoverEffect bg">
      <figure>
        <img className="w-28 lg:w-36 p-6" src={service.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="text-2xl font-bold text-center">{service.service}</h2>
        <p class=" text-gray-400 text-center">{service.des}</p>
      </div>
    </div>
  );
};

export default Service;
