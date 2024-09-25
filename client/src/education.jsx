import React from "react";
import { Container, Typography, Card, CardContent, Grid, Box } from "@mui/material";

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
    </Container>
  );
}
