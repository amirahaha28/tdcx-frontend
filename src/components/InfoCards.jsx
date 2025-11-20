import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

import { Pie } from "react-chartjs-2";
import CircleIcon from '@mui/icons-material/Circle';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grid = styled.div`
  gap: 16px;
  display: flex;
  flex-wrap: wrap; /* allows stacking on small screens */
`;

const Card = styled.div`
  flex: 1;
  padding: 24px;
  min-width: 250px;
  background: #fff;
  box-shadow: 0px 3px 6px #0000000A;
`;

export default function InfoCards({ stats, tasks }) {
  // Pie chart data
  const pieData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "# of Tasks",
        data: [stats.completed, stats.total - stats.completed],
        backgroundColor: ["#5285EC", "#E8ECEC"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    maintainAspectRatio: false,
  };

   const latestTasks = tasks
   ? [...tasks]
       .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
       .slice(0, 3)
   : [];

  return (
    <Grid>
      {/* Tasks Completed Card */}
      <Card sx={{ borderRadius: { xs: 0, md: "12px" }}}>
        <Typography sx={{ fontSize: "20px", color: "#537178" }}>
          Tasks Completed
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
          <Typography sx={{ color: "#5285EC", fontSize: "64px" }}>
            {stats.completed}
          </Typography>
          <Typography sx={{ color: "#8F9EA2", mb: "20px" }}>
            / {stats.total}
          </Typography>
        </Box>
      </Card>

      {/* Latest Created Tasks Card */}
      <Card sx={{ borderRadius: { md: "12px" }}}>
        <Typography sx={{ fontSize: "20px", color: "#537178" }}>
          Latest Created Tasks
        </Typography>
        <Box sx={{ mt: 1 }}>
          {tasks && tasks.length > 0 ? (
            tasks
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3)
              .map((task) => (
                <Box sx={{ display: 'flex', gap: 1, alignItems: "center", overflow: "hidden" }}>
                  <CircleIcon sx={{ width: "8px", color: "#8F9EA2" }} />
                  <Typography
                    key={task.id}
                    sx={{
                      fontSize: "14px",
                      color: "#8F9EA2",
                      textDecoration: task.completed ? "line-through" : "none",
                      mb: 0.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",      
                    }}
                  >
                    {task.name}
                  </Typography>
                </Box>
              ))
          ) : (
            <Typography sx={{ fontSize: "16px", color: "#999" }}>
              No tasks yet
            </Typography>
          )}
        </Box>
      </Card>

      {/* Pie Chart Card */}
      <Card sx={{ borderRadius: { md: "12px" }}}>
        <Box sx={{ width: 150, height: 150, m: "auto" }}>
          <Pie data={pieData} options={pieOptions} />
        </Box>
      </Card>
    </Grid>
  );
}
