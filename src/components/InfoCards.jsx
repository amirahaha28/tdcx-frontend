import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  min-width:0;
`;
const Card = styled.div`
  background:#fff;
  padding:12px;
  border-radius:10px;
  box-shadow:0 1px 3px rgba(0,0,0,0.06);
  flex:1 1 120px; /* mobile-first: stack but allow row on wider screens */
`;

export default function InfoCards({ stats }){
  return (
    <Grid>
      <Card><h4>Total</h4><p>{stats.total}</p></Card>
      <Card><h4>Completed</h4><p>{stats.completed}</p></Card>
      <Card><h4>Pending</h4><p>{stats.pending}</p></Card>
    </Grid>
  );
}
