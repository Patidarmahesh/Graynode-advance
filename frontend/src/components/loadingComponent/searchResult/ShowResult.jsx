import { Typography } from "@mui/material";
import React from "react";

const ShowResult = () => {
  return (
    <div className="show-card">
      <div className="show-card-logo-text">
        <img src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png" />
        <Typography variant="h5" sx={{ color: "blue", fontWeight: "bold" }}>
          Mahesh
        </Typography>
      </div>
    </div>
  );
};

export default ShowResult;
