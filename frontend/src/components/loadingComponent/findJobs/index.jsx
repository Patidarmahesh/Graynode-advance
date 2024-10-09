import React from "react";
import "./job.css";
// import { Button, Typography } from "@mui/material";
import JobCard from "../jobCard/JobCard";

const data = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Information Technology",
  "Operations",
  "Customer Services",
];

const FindJobsAndIntership = () => {
  return (
    <div className="find-job-container">
      <div className="jobs-middle-container">
        <JobCard
          data={data}
          text={{
            text1: "Find the",
            text2: "right job",
            text3: "internship for you",
            text4: "Suggested Searches",
          }}
        />
        <div className="job-1st-card">
          <img
            alt="error"
            src="http://graynod.dollopinfotech.com/assets/web/images/job-modal.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FindJobsAndIntership;
