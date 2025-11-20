import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

export default function TaskForm({ onCancel, onSave }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave({ name }); // send back to parent
    setName(""); // reset
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        m: "auto",
        width: { xs: "100%", md: 300 },
        display: "flex",
        bgcolor: "white",
        borderRadius: "12px",
        flexDirection: "column",
        boxShadow: "0px 3px 6px #0000000A",
      }}
    >
      <Typography sx={{ pb: 3, fontSize: "20px", color: "#537178" }}>+ New Task</Typography>
      <TextField
        label="Task name"
        placeholder="Enter task name"
        value={name}
        // onChange={(e) => setName(e.target.value)}
        onChange={(e) => {
          const v = e.target.value;
          setName(v.charAt(0).toUpperCase() + v.slice(1));
        }}
        fullWidth
        size="small"
        sx={{ pb: "12px" }}
      />

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button type="submit" variant="contained" sx={{ flex: 1 }}>
          + New Task
        </Button>
      </Box>
    </Box>
  );
}
