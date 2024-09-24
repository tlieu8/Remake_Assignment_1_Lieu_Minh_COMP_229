import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

export default function Education() {
  const educationData = [
    {
      school: "Centennial College",
      degree: "Bachelor of Science in Computer Science",
      year: "2020 - 2024",
      description: "Graduated with honors, specializing in software development.",
    },
    {
      school: "Toronto High School",
      degree: "High School Diploma",
      year: "2013 - 2016",
      description: "Focused on mathematics, physics, and computer science.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: "#1976d2" }}>
        Education Qualifications
      </Typography>

      {/* Education Cards */}
      <Grid container spacing={4}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: "#333" }}>
                  {edu.school}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {edu.year}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
