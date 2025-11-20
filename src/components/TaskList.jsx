import React from "react";
import TaskItem from "./TaskItem";
import { Box, Divider } from "@mui/material";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }){
  if (!tasks.length) return <p>No tasks found</p>;

  return (


    <Box style={{ display: "grid", gap: 0, marginTop: 12 }}>
      {tasks.map((t, i) => (
        <Box key={t.id}>
          <TaskItem
            task={t}
            onToggle={() => onToggle(t.id)}
            onDelete={() => onDelete(t.id)}
            onEdit={(patch) => onEdit(t.id, patch)}
          />
          {i < tasks.length - 1 && <Divider sx={{ mx: "auto", width: "90%", bgcolor: "white" }} />}
        </Box>
      ))}
    </Box>
  );
}
