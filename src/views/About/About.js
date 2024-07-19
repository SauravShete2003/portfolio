import "./About.css";
import html from "./html-5.png";
import css from "./css-3.png";
import js from "./js-img.png";
import reactImg from "./react-img.png";
import node from "./node-js.png";
import mongo from "./MongoDB.png";
import github from "./github.png";
import Bootstrap from "./bootstrap.png";

function About() {
  return (
    <div className="about-container">
      <span className="about-title">About Me</span>
      <span className="about-desc">Explore my profile to know more about my projects,what I do, and my programming and technology skills</span>
      <div className="about-text-container">
        <div className="about-me">
          <h3> GET KNOW TO ME </h3>
          <span className="education">EDUCATION</span>

          <ul>BSC Comspanuter Science </ul>
          <li>Rajashri Shahu Mahavidhyala , Deolali Pravara</li>
          <li>Aug-2022 June-2025</li>
          <br />
          <sspanan className="education">MORE</sspanan>
          <span className="desc">
            I am a third-year BSc Computer Science student with a strong
            foundation in the MERN Stack. I am skilled in creating interactive
            and visually apealing websites. I am open to job oportunities where
            I can contribute, learn, and grow. If you have a suitable oportunity
            that matches my skills and experience,please don't hesitate to
            contact me.
          </span>
        </div>
      </div>
      <div className="skill-container">
        <span className="skill-title">MY SKILL</span>
        <div className="skill-list-container">
          <div className="skill-list">
            <img className="skill-img" src={html} alt="html" />
            <span className="skill-name">HTML</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={css} alt="css" />
            <span className="skill-name">CSS</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={js} alt="js" />
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={reactImg} alt="react" />
            <span className="skill-name">React JS</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={node} alt="node" />
            <span className="skill-name">Node JS</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={mongo} alt="mongo" />
            <span className="skill-name">MongoDB</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={github} alt="git" />
            <span className="skill-name">GitHub</span>
          </div>
          <div className="skill-list">
            <img className="skill-img" src={Bootstrap} alt="bootstraspan" />
            <span className="skill-name">Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
