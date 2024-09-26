import React from "react";
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
import { Button, Grid, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import "../src/index.css";
import "../src/project.css";

export default function Project() {
  const projects = [
    { src: project1, title: "Project 1", description: "A web application built with React and Node.js" },
    { src: project2, title: "Project 2", description: "A mobile app for managing personal finances" },
    { src: project3, title: "Project 3", description: "A machine learning project focused on data prediction" },
    { src: project4, title: "Project 4", description: "E-commerce website with a custom CMS" },
    { src: project5, title: "Project 5", description: "Portfolio website designed with Material UI" },
    { src: project6, title: "Project 6", description: "A cloud-based solution for distributed computing" },
  ];

  return (
    <section id="works" className="project-section">
      {/* Title Section */}
      <Typography variant="h3" align="center" gutterBottom className="worksTitle">
        My Projects
      </Typography>
      <Typography variant="body1" align="center" className="worksDesc" paragraph>
        I pay close attention to every detail, ensuring precision and quality in every project. Below are a few key projects that showcase my skills in IT development, design, and architecture.
      </Typography>

      {/* Project Grid */}
      <Grid container spacing={4} className="worksGrid" justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card" elevation={4} sx={{ maxHeight: 400, display: 'flex', flexDirection: 'column' }}>
              {/* Project Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.src}
                alt={project.title}
                className="worksImg"
              />
              
              {/* Project Content */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>

              {/* Card Actions */}
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View More Projects Button */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
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
