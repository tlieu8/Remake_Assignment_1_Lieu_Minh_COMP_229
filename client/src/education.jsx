import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../src/assets/logo.png"; // Main logo
import logo1 from "../src/assets/logo1.png"; // Additional logo

export default function Education() {
  const educationData = [
    {
      school: "Viet Anh International School",
      degree: "High School Diploma",
      year: "2018 - 2022",
      description: "Focused on mathematics, physics, and computer science.",
      image: logo1, // Using the additional logo
    },
    {
      school: "Centennial College",
      degree: "Ontario College Advanced Diploma",
      year: "2023 - 2026",
      description: "Graduated with honors, specializing in software development.",
      image: logo, // Using the main logo
    },
  ];

  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
      {/* Title */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ color: "#1565c0", fontWeight: 'bold' }}
      >
        Education
      </Typography>

      {/* Education Cards */}
      <Grid container spacing={3}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              variant="outlined"
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                {/* Display logo image */}
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                  <img
                    src={edu.image}
                    alt={`${edu.school} Logo`}
                    style={{ maxWidth: '100px', height: 'auto' }} // Adjust size as needed
                  />
                </Box>

                {/* School Information */}
                <Box sx={{ marginBottom: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold', color: "#333" }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ fontStyle: 'italic' }}
                  >
                    {edu.degree}
                  </Typography>
                </Box>

                <Typography variant="body2" color="textSecondary">
                  {edu.year}
                </Typography>

                <Typography variant="body1" sx={{ marginTop: 2, lineHeight: 1.6 }}>
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Link to Contact Page */}
      <div className="contact-link" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#1565c0', fontWeight: 'bold' }}>
          Contact Me
        </Link>
      </div>
    </Container>
  );
}
