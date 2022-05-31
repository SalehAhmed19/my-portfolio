import React from "react";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Blogs from "./Blogs/Blogs";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
