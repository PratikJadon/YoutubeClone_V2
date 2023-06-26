import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
export default function Feed() {
  const { searchTerm } = useParams();

  const [VideosData, setVideosData] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideosData(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results For
        <span style={{ color: "#f31503" }}> {searchTerm}</span>
      </Typography>
      <Videos videos={VideosData} />
    </Box>
  );
}
