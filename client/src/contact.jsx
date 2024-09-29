import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import "../src/contact.css"; 

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function Contact() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

 
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    contactNumber: false,
    message: false,
  });

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const validateFields = () => {
    const newErrors = {
      firstName: formData.firstName === "",
      lastName: formData.lastName === "",
      email: formData.email === "",
      contactNumber: formData.contactNumber === "",
      message: formData.message === "",
    };

    setErrors(newErrors);


    return !Object.values(newErrors).includes(true);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 


    if (validateFields()) {
      console.log("Form data submitted:", formData);


      navigate("/");
    }
  };

  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
 
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Get in Touch
        </Typography>

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
                error={errors.firstName}
                helperText={errors.firstName ? "First Name is required" : ""}
                autoFocus
                aria-label="First Name"
              />
            </Grid>

     
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                helperText={errors.lastName ? "Last Name is required" : ""}
                aria-label="Last Name"
              />
            </Grid>

 
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
                error={errors.email}
                helperText={errors.email ? "Email is required" : ""}
                aria-label="Email Address"
              />
            </Grid>

       
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
                error={errors.contactNumber}
                helperText={errors.contactNumber ? "Contact Number is required" : ""}
                aria-label="Contact Number"
              />
            </Grid>

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
                error={errors.message}
                helperText={errors.message ? "Message is required" : ""}
                aria-label="Your Message"
              />
            </Grid>
          </Grid>

          <Box textAlign="center">
            <SubmitButton
              variant="contained"
              type="submit"
              size="large"
              aria-label="Submit Form"
              sx={{ textTransform: "none" }}
            >
              Submit
            </SubmitButton>
          </Box>
        </form>
      </StyledPaper>

      <Box mt={6} textAlign="center">
        <Typography variant="body1" gutterBottom>
          Call me at: <strong>888-555-5555</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          <strong>Facebook:</strong> www.facebook.com/mwatugquest
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

