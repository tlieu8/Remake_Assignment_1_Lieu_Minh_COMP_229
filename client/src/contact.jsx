import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import "../src/contact.css"; // Ensure your CSS file is well-structured

export default function Contact() {
  const navigate = useNavigate(); // Initialize navigation

  // States for capturing form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
    comments: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    contactNumber: false,
    message: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate fields
  const validateFields = () => {
    const newErrors = {
      firstName: formData.firstName === "",
      lastName: formData.lastName === "",
      email: formData.email === "",
      contactNumber: formData.contactNumber === "",
      message: formData.message === "",
    };

    setErrors(newErrors);

    // If any field is empty, return false
    return !Object.values(newErrors).includes(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    // If validation passes, proceed
    if (validateFields()) {
      console.log("Form data submitted:", formData);

      // Redirect to Home page after submission
      navigate("/");
    }
  };

  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
      {/* Form Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Get in Touch
        </Typography>
        
        {/* Contact Form */}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName} // Show error if validation fails
                helperText={errors.firstName ? "First Name is required" : ""}
                autoFocus
                aria-label="First Name"
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName} // Show error if validation fails
                helperText={errors.lastName ? "Last Name is required" : ""}
                aria-label="Last Name"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email} // Show error if validation fails
                helperText={errors.email ? "Email is required" : ""}
                aria-label="Email Address"
              />
            </Grid>

            {/* Contact Number */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Contact Number"
                type="tel"
                variant="outlined"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                error={errors.contactNumber} // Show error if validation fails
                helperText={errors.contactNumber ? "Contact Number is required" : ""}
                aria-label="Contact Number"
              />
            </Grid>

            {/* Your Message */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message} // Show error if validation fails
                helperText={errors.message ? "Message is required" : ""}
                aria-label="Your Message"
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              aria-label="Submit Form"
              sx={{ textTransform: "none" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Additional Contact Info */}
      <Box mt={6} textAlign="center">
        <Typography variant="body1" gutterBottom>
          Call me at: <strong>888-555-5555</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          <strong>Facebook:</strong> www.mwatugquest.facebook.com
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          <strong>Email:</strong> mwatugquest@yahoo.com
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Instagram:</strong> @mwatugquest
        </Typography>
      </Box>
    </Container>
  );
}
