import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
