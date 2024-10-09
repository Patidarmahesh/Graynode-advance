import React from "react";
import "./query.css";
import { Button, TextField, Typography } from "@mui/material";

const Query = () => {
  return (
    <div className="query-container">
      <div className="query-middle-container">
        <div className="query-form">
          <div className="query-form-content">
            <div className="query-text-head">
              <Typography variant="h4">Get in Touch</Typography>
              <Typography>
                If you have any Query, Our team will get back to you within 24
                Hours
              </Typography>
            </div>
            <form className="form-textfield">
              <TextField
                label="Enter Full Name"
                placeholder="Enter Full Name"
                multiline
                className="!importent query-form-text"
              />
              <TextField
                id="outlined-textarea"
                label="Email Address"
                placeholder="Email Address"
                multiline
                className="!importent query-form-text"
              />
              <TextField
                placeholder="Write Youre Message Here......"
                label="Write Youre Message Here"
                // id="-textfiled"
                className="!importent query-form-text-area"
              />
              <Button id="form-button-sumit">Submit</Button>
            </form>
          </div>
        </div>
        <div className="query-card">
          <div className="card-text">
            <Typography variant="h5">Business Hub</Typography>
            <Typography>
              Everyone from newly online businesses to experienced marketers can
              get results with Meta. Check out their stories for some
              inspiration.
            </Typography>
            <Button id="form-button-1">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
