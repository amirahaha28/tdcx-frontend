import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }){
  if (!tasks.length) return <p>No tasks found</p>;

  return (
    <div style={{display:"grid", gap:8, marginTop:12}}>
      {tasks.map(t => (
        <TaskItem key={t.id} task={t} onToggle={()=>onToggle(t.id)} onDelete={()=>onDelete(t.id)} onEdit={(patch)=>onEdit(t.id, patch)} />
      ))}
    </div>
  );
}
