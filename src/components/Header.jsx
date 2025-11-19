import React from "react";
import { Box, Typography } from "@mui/material";

import styled from "styled-components";

import AvatarPng from "../assets/avatar.png";

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

function getUser() {
  return localStorage.getItem("name") || "User";
}

export default function Header({ onLogout }) {
  const username = getUser();

  return (
    <Box sx={{ position: "sticky",  display: "flex", p: { xs: "12px 24px", md: "12px 120px" }, bgcolor: "white", justifyContent: "space-between", boxShadow: "0px 3px 6px #00000029" }}>
      <UserInfo>
        <Avatar src={AvatarPng} alt="User avatar" />
        <Typography sx={{ fontSize: "19px", color: "#6D8187" }}>{username}</Typography>
      </UserInfo>

      <Typography onClick={onLogout} sx={{ display: 'flex', alignItems: "center", cursor: "pointer", color: "#6D8187" }}>Logout</Typography>

    </Box>
  );
}
