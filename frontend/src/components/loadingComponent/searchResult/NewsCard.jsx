import { Typography } from "@mui/material";
import React from "react";

const NewsCard = () => {
  return (
    <div className="news-card">
      <div className="new-card-image">
        <img src="http://graynod.dollopinfotech.com/uploads/news/93d735b96f96fcbd4fce33552d0b5b9e_8.jpg" />
      </div>
      <Typography variant="h6" sx={{ color: "gray" }}>
        26 Dec, 2022
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
        aaaaaaaaaaaaaaa
      </Typography>
      <Typography variant="h6" sx={{ color: "black" }}>
        bbbbbbbbbbbbbbbbbbbbbbb
      </Typography>
    </div>
  );
};

export default NewsCard;
