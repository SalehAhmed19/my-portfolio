import React from "react";
import img from "../../../Assets/Img/s.jpg";

const About = () => {
  return (
    <div
      style={{ background: "#191919", height: "80vh" }}
      className="flex items-center lg:px-20"
    >
      <div className="hidden lg:block">
        <img src={img} alt="" />
      </div>
      <div className="p-10">
        <h2 className="font-bold text-5xl font text-white">About Me</h2>
        <p className="font text-xl text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered <a href="#">alteration</a> in some form, by
          injected humour, or randomised words which dont look even slightly
          believable. If you are going to use a passage of Lorem Ipsum,
        </p>
        <div className="my-4 font">
          <h3 className="text-white font-bold text-3xl">Skills</h3>
          <div className="text-white flex">
            <p className="pl-7">Expert</p>
            <p className="pl-7">Comfortable</p>
            <p className="pl-7">Familier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
