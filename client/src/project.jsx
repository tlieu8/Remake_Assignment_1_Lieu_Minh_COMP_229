import React from "react";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
import "../src/index.css";
import "../src/project.css";

export default function Project() {
  return (
    <section id="works" className="project-section">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
      I offer to pay close attention to every little detail so that my work is as precise as a pixel. I'm excited to use my knowledge and expertise to help companies reach their goals and build strong online brands.
      </span>
      <div className="worksImgs">
        <div className="project-card">
          <img src={project1} alt="Project 1" className="worksImg" />
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" className="worksImg" />
        </div>
        <div className="project-card">
          <img src={project3} alt="Project 3" className="worksImg" />
        </div>
        <div className="project-card">
          <img src={project4} alt="Project 4" className="worksImg" />
        </div>
        <div className="project-card">
          <img src={project5} alt="Project 5" className="worksImg" />
        </div>
        <div className="project-card">
          <img src={project6} alt="Project 6" className="worksImg" />
        </div>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}
