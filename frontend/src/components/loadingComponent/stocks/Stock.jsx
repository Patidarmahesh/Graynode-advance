import { Avatar, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import "./stock.css";

const data = [
  {
    heading: "Business",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    heading: "Real Estate",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    heading: "Stocks",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const Stock = () => {
  return (
    <div className="candidate_info_container">
      <Typography variant="h3" id="cadidate_text">
        Graynod Community News People
      </Typography>
      <div className="card_cotainer">
        {data.map((values, index) => {
          return (
            <Card className="!importent candedate_card" key={index}>
              <div className="card-icon-content">
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    background: "white",
                    color: "black",
                  }}
                />
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "28px" }}
                  variant="h6"
                >
                  {values.heading}
                </Typography>
                <Typography
                  sx={{ textAlign: "center", fontSize: "20px", color: "gray" }}
                >
                  {values.para}
                </Typography>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default Stock;
