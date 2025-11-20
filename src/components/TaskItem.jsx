import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

// mui materials
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ task, onToggle, onDelete, onEdit }){
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(task.name);

  const saveEdit = () => {
    onEdit({ name });
    setEditing(false);
  };

  return (
    <Box style={{ padding: 12, borderRadius: { md: 8 }, background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box style={{ flex: 1 }}>
        <input type="checkbox" checked={task.completed} onChange={onToggle} />
        {editing ? (
          <>
            <input value={name} onChange={e=>setName(e.target.value)} />
            <Button onClick={saveEdit}>Save</Button>
          </>
        ) : (
          <Box style={{ display: "inline-block", marginLeft: 8 }}>
            <Typography style={{ color: "#5285EC", fontSize: "20px", textDecoration: task.completed ? "line-through" : "none"}}>{task.name}</Typography>
          </Box>
        )}
      </Box>
      <Box style={{ display: "flex", gap: 8 }}>
        <EditIcon onClick={()=>setEditing(e=>!e)} sx={{ m: "auto", width: 20, height: 20, color: '#647278' }}>{editing? "Cancel":"Edit"}</EditIcon>
        <DeleteIcon onClick={onDelete} sx={{ m: "auto", width: 20, height: 20, color: '#647278' }}/>
      </Box>
    </Box>
  );
}
