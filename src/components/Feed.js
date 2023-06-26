import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
export default function Feed() {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [VideosData, setVideosData] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log(data);
      setVideosData(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: "1.4px", color: "#fff" }}
        >
          Copyright 2022
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span style={{ color: "#f31503" }}>{selectedCategory} Videos</span>
        </Typography>
        <Videos videos={VideosData} />
      </Box>
    </Stack>
  );
}
