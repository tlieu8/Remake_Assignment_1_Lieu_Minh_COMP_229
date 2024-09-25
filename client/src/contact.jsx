import React from "react";
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
  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
      {/* Form Section */}
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Get in Touch
        </Typography>
        
        {/* Contact Form */}
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="First Name"
                variant="outlined"
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
                aria-label="Your Message"
              />
            </Grid>

            {/* Additional Comments */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Additional Comments"
                multiline
                rows={4}
                variant="outlined"
                aria-label="Additional Comments"
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
