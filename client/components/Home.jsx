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
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="span" color="primary" gutterBottom>
            Hello,
          </Typography>
          <br />
          <Typography variant="h2" component="span" fontWeight="bold">
            I am <span style={{ color: "#1976d2" }}>Lieu Tuan Truong Minh</span>
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary" gutterBottom>
            Website Designer
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
          As an web designer, I specialize in developing visually captivating and user-centric websites.
          </Typography>
          <Link to="/contact">
            <Button variant="contained" color="primary" size="large" startIcon={<img src={hire} alt="Hire me" width="30" height="30" />}>
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
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
