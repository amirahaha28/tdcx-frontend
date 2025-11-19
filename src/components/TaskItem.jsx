import React, { useState } from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }){
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(task.name);

  const saveEdit = () => {
    onEdit({ name });
    setEditing(false);
  };

  return (
    <div style={{padding:12, borderRadius:8, background:"#fff", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div style={{flex:1}}>
        <input type="checkbox" checked={task.completed} onChange={onToggle} />
        {editing ? (
          <>
            <input value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={saveEdit}>Save</button>
          </>
        ) : (
          <div style={{display:"inline-block", marginLeft:8}}>
            <div style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.name}</div>
            <small>{task.description}</small>
          </div>
        )}
      </div>
      <div style={{display:"flex", gap:8}}>
        <button onClick={()=>setEditing(e=>!e)}>{editing? "Cancel":"Edit"}</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
