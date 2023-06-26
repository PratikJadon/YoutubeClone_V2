import React from "react";
import { Box, Stack } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
export default function Videos({ videos, direction }) {
  if (!videos) return <h2>Loading....</h2>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ sm: "center", md: "start" }}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}
