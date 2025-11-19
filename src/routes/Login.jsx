import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name) {
      alert("Please enter ID and Name");
      return;
    }

    // Store in localStorage
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F5F5F5",
      }}
    >
      <form onSubmit={handleSubmit} style={{ padding: "12px", width: {xs: "100%", md: "auto" }}}>
        <Box
          sx={{
            width: { xs: "100%", md: 296},
            p: 3,
            bgcolor: "white",
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Login
          </Typography>

          <TextField
            label="ID"
            variant="outlined"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            fullWidth
            size="small"
          />

          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            fullWidth
            size="small"
            // sx={{
            //   "& .MuiOutlinedInput-root": {
            //     borderRadius: "8px",
            //     backgroundColor: "#EEF1F8"
            //   },
            //   "& .MuiOutlinedInput-input::placeholder": {
            //     color: "#7A7D7E",
            //     opacity: 1
            //   }
            // }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              color: "white",
              borderRadius: "8px",
              bgcolor: "#5285EC",
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}
