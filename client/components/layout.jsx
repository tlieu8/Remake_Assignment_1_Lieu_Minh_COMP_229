import React from "react";
import { Link as RouterLink } from "react-router-dom";
import football1 from "../src/assets/header.jpg";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Divider,
  useTheme,
} from "@mui/material";

export default function Layout() {
  const theme = useTheme();
  return (
    <>
      {/* AppBar for Navigation */}
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Logo or Icon */}
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <img
              src={football1}
              alt="football"
              width="50px"
              height="50px"
              style={{ borderRadius: "50%", border: `2px solid ${theme.palette.secondary.main}` }}
            />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.common.white }}>
            My Portfolio
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
          <Button color="inherit" component={RouterLink} to="/" sx={{ '&:hover': { bgcolor: theme.palette.secondary.main } }}>
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/about" sx={{ '&:hover': { bgcolor: theme.palette.secondary.main } }}>
              About
            </Button>
            <Button color="inherit" component={RouterLink} to="/education" sx={{ '&:hover': { bgcolor: theme.palette.secondary.main } }}>
              Education
            </Button>
            <Button color="inherit" component={RouterLink} to="/project" sx={{ '&:hover': { bgcolor: theme.palette.secondary.main } }}>
              Project
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact" sx={{ '&:hover': { bgcolor: theme.palette.secondary.main } }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content Divider */}
      <Box my={2}>
      <Divider sx={{ bgcolor: theme.palette.divider, height: '2px' }} />
      </Box>
    </>
  );
}

