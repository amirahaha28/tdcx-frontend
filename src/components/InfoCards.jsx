import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap; /* allows stacking on small screens */
`;

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  min-width: 250px;
  flex: 1;
  box-shadow: 0px 3px 6px #0000000A;
`;

export default function InfoCards({ stats }) {
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
    maintainAspectRatio: false, // so we can control width/height
  };

  // Get latest 3 tasks
  const latestTasks = stats.tasks
    ? [...stats.tasks]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3)
    : [];

  return (
    <Grid>
      {/* Tasks Completed Card */}
      <Card>
        <Typography sx={{ fontSize: "20px", color: "#537178" }}>
          Tasks Completed
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
          <Typography sx={{ color: "#5285EC", fontSize: "64px" }}>
            {stats.completed}
          </Typography>
          <Typography sx={{ color: "#8F9EA2", ml: 1 }}>
            /{stats.total}
          </Typography>
        </Box>
      </Card>

      {/* Latest Created Tasks Card */}
      <Card>
        <Typography sx={{ fontSize: "20px", color: "#537178" }}>
          Latest Created Tasks
        </Typography>
        <Box sx={{ mt: 1 }}>
          {latestTasks.length > 0 ? (
            latestTasks.map((task) => (
              <Typography
                key={task.id}
                sx={{ fontSize: "16px", color: "#333", mb: 0.5 }}
              >
                {task.name}
              </Typography>
            ))
          ) : (
            <Typography sx={{ fontSize: "16px", color: "#999" }}>
              No tasks yet
            </Typography>
          )}
        </Box>
      </Card>

      {/* Pie Chart Card */}
      <Card>
        <Typography sx={{ fontSize: "20px", color: "#537178", mb: 1 }}>
          Task Completion
        </Typography>
        <Box sx={{ width: 100, height: 100 }}>
          <Pie data={pieData} options={pieOptions} />
        </Box>
      </Card>
    </Grid>
  );
}
