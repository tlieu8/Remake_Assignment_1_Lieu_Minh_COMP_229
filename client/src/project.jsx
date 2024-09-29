import React from "react"; 
import { Link } from "react-router-dom"; 
import project1 from "../src/assets/project1.png";
import project2 from "../src/assets/project2.jpg";
import project3 from "../src/assets/project3.jpg";
import project4 from "../src/assets/project4.jpg";
import project5 from "../src/assets/project5.jpg";
import project6 from "../src/assets/project6.jpg";
import { Button, Grid, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../src/index.css";
import "../src/project.css";


const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
}));

const ZoomImage = styled(CardMedia)(({ theme }) => ({
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  textAlign: 'center',
  margin: '20px 0',
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

const ViewMoreButton = styled(Button)(({ theme }) => ({
  marginTop: '40px',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

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
    <section id="works" className="project-section" style={{ padding: '60px 20px', backgroundColor: '#f5f5f5' }}>
   
      <ProjectTitle variant="h3" gutterBottom>
        My Projects
      </ProjectTitle>
      <Typography variant="body1" align="center" paragraph style={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
      I meticulously attend to every detail, ensuring precision and quality in every project. Below are a few key projects that showcase my skills in IT development, design, and architecture.
      </Typography>

      
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard elevation={4}>
         
              <ZoomImage
                component="img"
                height="150"
                image={project.src}
                alt={project.title}
              />
              
   
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <ProjectDescription variant="body2">
                  {project.description}
                </ProjectDescription>
              </CardContent>

        
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" color="primary" variant="outlined">
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

     
      <div className="contact-link" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#1565c0', fontWeight: 'bold' }}>
          Contact Me
        </Link>
      </div>
    </section>
  );
}
