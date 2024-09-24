import React from "react";
import BBG from "../src/assets/BBG.jfif";
import hire from "../src/assets/hire.jpg";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import "../src/index.css";

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Intro Section */}
      <Box
        id="intro"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          padding: 4,
          flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
          backgroundColor: "#f4f4f9",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, marginBottom: { xs: 4, md: 0 } }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom>
            Hello,
          </Typography>
          <Typography variant="h2" component="h1" fontWeight="bold">
            I am <span style={{ color: "#1976d2" }}>Lieu Tuan Truong Minh</span>
          </Typography>
          <Typography variant="h5" component="h3" color="textSecondary" gutterBottom>
            Website Designer
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            As a web designer, I specialize in developing visually captivating and user-centric websites, ensuring seamless user experiences through clean and efficient designs.
          </Typography>
          
          {/* Mission Statement */}
          <Box sx={{ marginY: 4 }}>
            <Typography variant="h6" component="h4" fontWeight="bold" color="primary">
              My Mission Statement
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
            My mission is to enable companies through the creation of beautiful and useful websites that improve their online image, captivate their audience, and use cutting-edge technology and design to propel them to success.
            </Typography>
          </Box>

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
        </Box>

        {/* Profile Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={BBG}
            alt="profile"
            sx={{
              width: 300,
              height: 300,
              boxShadow: 3,
              borderRadius: "50%",
              border: "5px solid #1976d2", // Adding a border for a polished look
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
