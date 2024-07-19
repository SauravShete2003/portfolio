import React from "react";
import "./Portfolio.css";
import backgroundImg from "./background.jpg";

function Portfolio() {
  return (
    <>
      <div className="section-container">
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg' className="background-img" alt="Workspace" />
        <div className="desc-container">
          <h1 style={{color: "white"}}>
            Hey...!!
            <br />
            I`am Saurav Shete
          </h1>
          <p>
            Creative Coder with a Flair for Modern Web
            <br />
            Development, Innovating with the Latest Technologies
            <br />
            and Designing Elegant Solutions
          </p>
          <div className="btn-container">
            <button className="button">
              <a href="#resume" style={{ textDecoration: "none", color: "inherit" }}>Resume</a>
            </button>
            <button className="button">
              <a href="#hire-me" style={{ textDecoration: "none", color: "inherit" }}>Hire Me</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
