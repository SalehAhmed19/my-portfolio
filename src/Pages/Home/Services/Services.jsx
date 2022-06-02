import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div
      id="service"
      style={{ background: "#101010" }}
      className="pt-16 font py-20"
    >
      <div className="w-1/2 mx-auto text-gray-400">
        <h2 className="text-3xl lg:text-5xl font-bold font text-center text-white my-5">
          My Awesome Services
        </h2>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
