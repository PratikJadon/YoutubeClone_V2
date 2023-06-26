import React, { useEffect, useState } from "react";
import { Videos, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideo, setChannelVideo] = useState([]);

  const { id } = useParams();
  console.log(channelVideo);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideo(data.items)
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(203,4,192,1) 41%, rgba(198,91,227,1) 67%, rgba(229,142,252,1) 87%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelVideo} />
      </Box>
    </Box>
  );
}
