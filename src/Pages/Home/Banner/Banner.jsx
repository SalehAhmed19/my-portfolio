import React from "react";
import bg from "../../../Assets/Img/connected-vertices.gif";
import s from "../../../Assets/Img/s.jpg";
import "./Banner.css";
import Typical from "react-typical";

const Banner = () => {
  return (
    <>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="flex justify-between"
      >
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <div className="pl-3 lg:pl-20 py-32 lg:py-0">
            <h3 className="text-gray-400 font-secondary uppercase mb-5">
              <span className="mr-3">W e l c o m e</span>{" "}
              <span className="mr-3">t o</span>{" "}
              <span className="mr-3">m y</span>{" "}
              <span className="mr-3">w o r l d</span>
            </h3>
            <h1 className="text-white font-bold text-3xl lg:text-5xl font-heading">
              Hi, I'm Saleh Ahmed Mahin
            </h1>
            <h1 className="text-red-500 font-bold text-3xl lg:text-5xl font-heading">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "MERN Stack Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
              ></Typical>
            </h1>
            <a
              href="https://drive.google.com/file/d/1ohFhG5d8HfLdLnyLtRva8sBF7jmGXgSp/view?usp=sharing"
              target="blank"
            >
              <button className="btn btn-error bg-red-500 text-white my-7">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="avatar">
            <div className="w-full mask mask-hexagon">
              <img src={s} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
