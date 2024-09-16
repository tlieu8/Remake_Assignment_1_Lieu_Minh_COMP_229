import React from "react";
import { Link as RouterLink } from "react-router-dom";
import football1 from "../src/assets/football1.jfif";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";

export default function Layout() {
  return (
    <>
      {/* AppBar for Navigation */}
      <AppBar position="static">
        <Toolbar>
          {/* Logo or Icon */}
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <img
              src={football1}
              alt="football"
              width="50px"
              height="50px"
              style={{ borderRadius: "50%" }}
            />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About
            </Button>
            <Button color="inherit" component={RouterLink} to="/education">
              Education
            </Button>
            <Button color="inherit" component={RouterLink} to="/project">
              Project
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content Divider */}
      <Box my={2}>
        <hr />
      </Box>
    </>
  );
}

