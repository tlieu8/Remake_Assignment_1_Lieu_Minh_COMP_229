import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button, Avatar, Box } from "@mui/material";
import BBG from "../src/assets/BBG.jfif"; // Profile image
import hire from "../src/assets/hire.jpg"; // Hire me icon
import "../src/index.css"; // Custom styles

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 8 }}>
      {/* Intro Section */}
      <Grid
        container
        spacing={4}
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f7f9fc",
          borderRadius: 3,
          boxShadow: 6,
          padding: { xs: 2, md: 4 },
        }}
      >
        {/* Left Content */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom>
            Hello,
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' } }} // Adjusted font size
          >
            I am <span style={{ color: "#1976d2" }}>Lieu Tuan Truong Minh</span>
          </Typography>
          <Typography variant="h5" component="h3" color="textSecondary" gutterBottom>
            Website Designer & Developer
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            I specialize in developing visually captivating and user-centric websites that ensure seamless user experiences
            through clean and efficient designs. My goal is to help businesses establish a strong online presence.
          </Typography>

          {/* Mission Statement */}
          <Box sx={{ marginY: 4 }}>
            <Typography variant="h6" component="h4" fontWeight="bold" color="primary">
              My Mission
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              My mission is to empower companies by creating beautiful and functional websites that enhance their online
              image and engage their audience effectively.
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link to="/contact">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<img src={hire} alt="Hire me" width="30" height="30" />}
                sx={{
                  '&:hover': {
                    backgroundColor: "#115293",
                  },
                }}
              >
                Hire Me
              </Button>
            </Link>
            <Button
              variant="outlined"
              size="large"
              href="/resume.pdf" // Link to your resume
              target="_blank" // Open in a new tab
              sx={{
                color: "#1976d2", // Custom text color
                borderColor: "#1976d2", // Custom border color
                backgroundColor: "transparent", // Transparent background
                '&:hover': {
                  backgroundColor: "#1976d2", // Background color on hover
                  color: "#fff", // Text color on hover
                },
              }}
            >
              Download My Resume
            </Button>
          </Box>
        </Grid>

        {/* Profile Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={BBG} // Profile image
            alt="Profile of Lieu Tuan Truong Minh"
            sx={{
              width: 250,
              height: 250,
              boxShadow: 4,
              borderRadius: "50%",
              border: "5px solid #1976d2", // Adding a border for a polished look
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
