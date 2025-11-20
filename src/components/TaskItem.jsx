import React, { useState } from "react";
import { Box, Typography, Button, Checkbox, TextField, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(task.name);

  const saveEdit = () => {
    onEdit({ name });
    setEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 1.5,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", flex: 1, alignItems: "flex-start" }}>
        <Checkbox
          checked={task.completed}
          onChange={onToggle}
          sx={{
            color: "#8F9EA2",
            "&.Mui-checked": { color: "#5285EC" },
            "& .MuiSvgIcon-root": { fontSize: 20 },
            mt: "-4px",
          }}
        />

        {/* Text or editing input */}
        <Box sx={{ ml: 1, flex: 1 }}>
          {editing ? (
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                value={name}
                onChange={(e) =>
                  setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                }
                fullWidth
                size="small"
              />
              <Button variant="contained" size="small" onClick={saveEdit}>
                Save
              </Button>
            </Box>
          ) : (
            <Typography
              sx={{
                my: "auto",
                fontSize: 20,
                display: "flex",
                wordBreak: "break-word", 
                color: task.completed ? "#537178" : "#5285EC",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 0, ml: 1 }}>
        <IconButton size="small" onClick={() => setEditing((e) => !e)}>
          <EditIcon sx={{ color: "#647278", fontSize: 20 }} />
        </IconButton>
        <IconButton size="small" onClick={onDelete}>
          <DeleteIcon sx={{ color: "#647278", fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
