import React from "react";
import { IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import { Paper } from "@mui/material";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
