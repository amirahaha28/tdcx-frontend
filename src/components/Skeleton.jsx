import React from "react";

export default function Skeleton(){
  return (
    <div style={{display:"grid", gap:8}}>
      <div style={{height:60, background:"#eee", borderRadius:8}}/>
      <div style={{height:120, background:"#eee", borderRadius:8}}/>
      <div style={{height:40, background:"#eee", borderRadius:8}}/>
    </div>
  );
}
