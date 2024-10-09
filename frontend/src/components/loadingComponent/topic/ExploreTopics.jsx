import React from "react";
import "./topic.css";
import { Avatar, Button, Typography } from "@mui/material";
import JobCard from "../jobCard/JobCard";

const data = [
  "See All Topics",
  "Science and Environment",
  "Health",
  "Marketing and Advertising",
  "Sales and Retail",
  "Technology",
  "Finance and Economy",
  "Business and Management",
]

const ExploreTopics = () => {
  return (
    <div className="topic-container">
      <div className="topic-center-content">
        <div className="topic-card">
          <div className="topic-card-middle-content">
            <div className="card-con">
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <div className="circle">
                  <Avatar
                    sx={{ width: 56, height: 56,background:"white",color:"black"}}
                  />
                </div>
                <img alt="error" src="http://graynod.dollopinfotech.com/assets/web/images/up-arrow%202.svg" />
              </div>
              <Typography variant="h4">Find A Business</Typography>
              <Typography variant="h6">
                Here's how to find the perfect idea for your business
              </Typography>
            </div>
            <Button variant="contained">Search</Button>
          </div>
          <div className="topic-card-image-content">
            <img alt="error" src="http://graynod.dollopinfotech.com/assets/web/images/bussiness_modal.png" />
          </div>
        </div>
        <JobCard data={data} text={{text1:"Explore",text2:"topics",text3:"you are interested in",text4:"content Topics"}}/>
      </div>
    </div>
  );
};

export default ExploreTopics;
