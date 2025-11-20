import React, { useMemo, useState } from "react";
import { Box, Button, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

import useTasks from "../hooks/useTasks";
import InfoCards from "../components/InfoCards";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";

import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Outer = styled.main`
  margin: 0 auto;
  min-height: 100vh;
`;

const Top = styled.section`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
`;

export default function Dashboard() {
  const nav = useNavigate();
  const { tasks, loading, createTask, updateTask, deleteTask, toggleComplete } = useTasks();
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return tasks;
    return tasks.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));
  }, [tasks, query]);

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  const handleLogout = () => {
    logout();
    nav("/login", { replace: true });
  };

  return (
    <Outer>
      <Header onLogout={handleLogout} />

      <Box
        sx={{
          display: "flex",
          minHeight: { md: "90vh" },
          justifyContent: "center",
          alignItems: { md: "center" },
          bgcolor: { xs: "#F4F4F6", md: "#F5F5F5" },
          p: { xs: "12px 0", md: 2 },
          position: "relative",
        }}
      >
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {showForm && (
              <Box
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  bgcolor: "rgba(0,0,0,0.3)",
                  zIndex: 999,
                }}
                onClick={() => setShowForm(false)}
              />
            )}

            {tasks.length === 0 ? (
              showForm ? (
                <Box
                  sx={{
                    p: "12px",
                    width: "100%",
                    position: "fixed",
                    top: { xs: "20%", md: "50%" },
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                  }}
                >
                  <TaskForm
                    onSave={(data) => {
                      createTask(data);
                      setShowForm(false);
                    }}
                    onCancel={() => setShowForm(false)}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    p: 4,
                    bgcolor: "white",
                    width: { xs: "100%", md: "300px" },
                    borderRadius: { md: "12px" },
                    boxShadow: "0px 3px 6px #0000000A",
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ mb: 2, color: "#537178", fontSize: "20px" }}>
                    You have no task.
                  </Typography>
                  <Button variant="contained" onClick={() => setShowForm(true)}>
                    + New Task
                  </Button>
                </Box>
              )
            ) : (
              <Box>
                <Top>
                  <InfoCards stats={stats} tasks={filtered} />
                </Top>

                {showForm && (
                  <Box
                    sx={{
                      p: "12px",
                      left: "50%",
                      zIndex: 1000,
                      width: "100%",
                      position: "fixed",
                      top: { xs: "20%", md: "50%" },
                      transform: "translate(-50%, -50%)",
                    }}
                  > 
                    <TaskForm
                      onSave={(data) => {
                        createTask(data);
                        setShowForm(false);
                      }}
                      onCancel={() => setShowForm(false)}
                    />
                  </Box>
                )}

                <Box sx={{ p: { xs: 1, md: 0 }, display: { md: 'flex' }, justifyContent: 'space-between', alignItems: "center" }}>
                  <Typography sx={{ mb: 1, color: "#537178", fontSize: "20px", textAlign: { xs: 'center', md: "left" } }}>Tasks</Typography>
                  <Box sx={{ display: { md: "flex" }, gap: 1.5 }}>
                    <TextField
                      placeholder="Search by task name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#8F9EA2" }} />
                          </InputAdornment>
                        ),
                      }}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      sx={{
                        mb: 1,
                        "& .MuiInputBase-input::placeholder": {
                          textAlign: { xs: "center", md: "left" },
                        },
                      }}
                    />
                    <Button variant="contained" sx={{ width: { xs: "100%", md: "180px" } }} onClick={() => setShowForm((s) => !s)}>
                      {showForm ? "Close" : "+ New Task"}
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <TaskList
                    tasks={filtered}
                    onToggle={toggleComplete}
                    onDelete={deleteTask}
                    onEdit={updateTask}
                  />
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </Outer>
  );
}
