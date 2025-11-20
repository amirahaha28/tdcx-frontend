import React from "react";
import TaskItem from "./TaskItem";
import { Box, Divider, Typography } from "@mui/material";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }){
  if (!tasks.length) return <Typography sx={{ my: 4, textAlign: "center", color: "#8F9EA2" }}> No tasks found</Typography>;

  return (
    <Box
      sx={{
        mt: { xs: 2, md: 1.5 },
        borderRadius: { md: "12px" },
        overflow: "hidden",
        boxShadow: "0px 3px 6px #00000014",
        bgcolor: "#fff",
        maxWidth: "100vw",  
        mx: "auto"   
      }}
    >
      {tasks.map((t, i) => (
        <Box key={t.id}>
          <TaskItem
            task={t}
            onToggle={() => onToggle(t.id)}
            onDelete={() => onDelete(t.id)}
            onEdit={(patch) => onEdit(t.id, patch)}
          />
          {i < tasks.length - 1 && <Divider sx={{ mx: "auto", width: "95%" }} />}
        </Box>
      ))}
    </Box>
  );
}
