import { Button, Typography } from "@mui/material";
import React from "react";

const JobCard = ({ data, text }) => {
  return (
    <div className="topic-list">
      <div className="topic-text-context">
        <Typography variant="h4" id="topics">
          {text.text1}
          <Typography
            variant="h4"
            sx={{ color: "#00dab0", fontWeight: "bold", fontSize: "40px" }}
          >
            {text.text2}
          </Typography>
        </Typography>
        <Typography variant="h4" id="topics">
          {text.text3}
        </Typography>
        <Typography variant="h5" sx={{ color: "gray" }}>
          {text.text4}
        </Typography>
      </div>
      <div className="button-containerrr">
        {data.map((values) => {
          return (
            <Button variant="outlined" size="large" id="topic-button">
              {values}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default JobCard;
