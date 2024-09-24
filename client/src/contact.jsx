import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import "../src/contact.css"; // Ensure you have this file if you're adding styles

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ paddingY: 4 }}>
      {/* Page Title */}
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Contact Me
      </Typography>

      {/* Contact Form */}
      <form noValidate autoComplete="off">
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            required
            id="myFName"
            label="First Name"
            variant="outlined"
            autoFocus
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            required
            id="myLName"
            label="Last Name"
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            required
            id="myEmail"
            label="Email"
            type="email"
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            required
            id="ContactNumber"
            label="Number"
            type="number"
            variant="outlined"
          />
        </Box>

        {/* First Message Textarea */}
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            required
            id="message1"
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>

        {/* Second Message Textarea */}
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            id="message2"
            label="Additional Comments"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>

        {/* Submit Button */}
        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Button variant="contained" color="primary" type="submit" size="large">
            Submit
          </Button>
        </Box>
      </form>

      {/* Additional Contact Info */}
      <Box mt={4} textAlign="center">
        <Typography variant="body1">
          <i>
            Call me on: <strong>888.555.5555</strong>
          </i>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          facebook: www.mwatugquest.facebook.com
        </Typography>
        <Typography variant="body2" color="textSecondary">
          email: mwatugquest@yahoo.com
        </Typography>
        <Typography variant="body2" color="textSecondary">
          instagram: @mwatugquest
        </Typography>
      </Box>
    </Container>
  );
}
