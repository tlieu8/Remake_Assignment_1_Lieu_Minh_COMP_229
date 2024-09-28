import React from "react";
import { Container, Paper, Typography, Button, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download"; // Import the download icon from MUI
import resumePDF from "../src/assets/Resume (1).pdf";

export default function Resume() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Paper container for resume */}
      <Paper elevation={4} sx={{ p: 6 }}>
        {/* Header */}
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: "bold", mb: 4, color: "#0d47a1" }}
        >
          My Resume
        </Typography>

        {/* Resume description */}
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 5, color: "#616161", maxWidth: "700px", mx: "auto" }}
        >
    
        </Typography>

        {/* Download PDF Button */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={resumePDF}
            download="Lieu_Tuan_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "#1976d2",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#115293",
              },
              px: 4, // Padding for larger button
            }}
            
          >
            Download PDF
          </Button>
        </Box>
      </Paper>
    </Container>
    
  );
}


