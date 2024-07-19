import "./ProjectCard.css";
import DishDelight from "./dish-delight.png";
function ProjectCard() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Projects</h1>
      <div className="projects-container">
        <div className="projects">
          <img src={DishDelight} className="project-img" />
          <h2 className="project-heading">Dish Delight</h2>
          <p className="project-desc">
            In this provide categories with details of dishes. In the Project
            you see various blog in the blog you see tips & Tricks or many more.
            In the project you make recipe for popular food & maharashtrian
            special food .
          </p>
          <a href="https://github.com/">
            <button className="button">Source Code</button>
            <a href="https://dish-delight-recipe.netlify.app/">
              <button className="button">View Project</button>
            </a>
          </a>
        </div>
        <div className="projects">
            <img src={DishDelight} className="project-img" />
            <h2 className="project-heading">Nursery-Plant</h2>
            <p className="project-desc">
              
            </p>
            <a href="https://github.com/">
            <button className="button">Source Code</button>
            </a>
            <a href="https://dish-delight-recipe.netlify.app/">
            <button className="button">View Project</button>
            </a>
        </div>
        <div className="projects">
            <img src={DishDelight} className="project-img" />
            <h2 className="project-heading">Dish Delight</h2>
            <p className="project-desc">
                In this provide categories with details of dishes. In the Project
                you see various blog in the blog you see tips & Tricks or many more.
                In the project you make recipe for popular food & maharashtrian
                special food .
            </p>
            <a href="https://github.com/">
            <button className="button">Source Code</button>
            </a>
            <a href="https://dish-delight-recipe.netlify.app/">
            <button className="button">View Project</button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
