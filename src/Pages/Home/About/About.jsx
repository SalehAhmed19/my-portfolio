import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import img from "../../../Assets/Img/s.jpg";
import "./About.css";

const About = () => {
  return (
    <div
      id="about"
      style={{ background: "#191919", height: "100vh" }}
      className="flex items-center lg:px-20"
    >
      <div className="hidden lg:block">
        <img src={img} alt="" />
      </div>
      <div className="p-10">
        <h2 className="font-bold text-3xl lg:text-5xl font text-white">
          About Me
        </h2>
        <p className="font text-xl text-gray-400">
          Hey, this is Saleh Ahmed Mahin. I am studying Diploma in Engineering
          in Computer Department. I am a full stack developer with experience
          working with MangDB, Express, React, Node (MERN) as well as working on
          multiple CSS frameworks.
        </p>
        <div className="my-4 font">
          <h3 className="text-white font-bold text-2xl">Skills</h3>
          <div
            style={{ background: "#101010" }}
            className="flex justify-between my-5 p-5 rounded-md"
          >
            <FontAwesomeIcon
              icon={faReact}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-react"
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-node"
            />
            <FontAwesomeIcon
              icon={faHtml5}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-html"
            />
            <FontAwesomeIcon
              icon={faCss3}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-css"
            />
            <FontAwesomeIcon
              icon={faBootstrap}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-bootstrap"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-github"
            />
            <FontAwesomeIcon
              icon={faJs}
              className="h-10 w-10 lg:h-20 lg:w-20 hover-javascript"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
