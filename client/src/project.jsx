import React from "react";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
import "../src/index.css";
import "../src/project.css";
import Button from '@mui/material/Button'; // Ensure you have @mui/material installed

export default function Project() {
  const projects = [
    { src: project1, alt: "Project 1" },
    { src: project2, alt: "Project 2" },
    { src: project3, alt: "Project 3" },
    { src: project4, alt: "Project 4" },
    { src: project5, alt: "Project 5" },
    { src: project6, alt: "Project 6" },
  ];

  return (
    <section id="works" className="project-section">
      <h2 className="worksTitle">My Projects</h2>
      <p className="worksDesc">
        I pay close attention to every detail so that my work is as precise as a pixel. 
        I'm excited to use my knowledge and expertise to help companies reach their goals 
        and build strong online brands.
      </p>
      <div className="worksImgs">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.src} alt={project.alt} className="worksImg" />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            '&:hover': {
              backgroundColor: "#115293",
            },
            textTransform: 'none', // Prevents capitalization
          }}
        >
          View More Projects
        </Button>
      </div>
    </section>
  );
}
