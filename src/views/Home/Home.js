import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../components/Portfolio/Portfolio";
import About from "../About/About";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <div className="home-container">
      <div>
        <Navbar />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
