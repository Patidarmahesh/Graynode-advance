import { Typography } from "@mui/material";
import React from "react";
const FunnyCard = ({funnyImage}) => {
  return (
    <div className="logo-and-funny-img-conatiner">
      {funnyImage.map((values, index) => {
        return (
          <div className="advertiesment-content" key={index}>
            <div
              className={index > 1 ? values.advertiesment2 : "advertiesment"}
            >
              <img src={values.image} />
            </div>
            <Typography id="funny-heading" variant="h5">
              {values.heading}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default FunnyCard;
