import React, { useState } from "react";
import "./create.css";
import { NavLink } from "react-router-dom";
import { Avatar, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import UserAndcompany from "./UserAndcompany";

const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [authForm, setAuthForm] = useState("user");
  const [next, setNext] = useState(true);

  return (
    <div className="create-account-container">
      <div className="create-account-middle-container">
        <div className="create-account-1st-div">
          <div className="logo-back-to-home">
            <div className="goto-home-content">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ background: "black", color: "white", padding: "20px" }}
                >
                  <ArrowBackIcon />
                </Button>
              </NavLink>
              <Typography variant="h6">Back To Home</Typography>
            </div>
            <div className="avatar">
              <img src="http://graynod.dollopinfotech.com/assets/web/images/login-logo.png" />
            </div>
          </div>
          <div className="create-account-card">
            <div className="create-account-text">
              <Typography variant="h3" className="!importent create-text">
                Create an{" "}
                <Typography
                  variant="h3"
                  sx={{ color: "green", fontWeight: "bold" }}
                >
                  account
                </Typography>
              </Typography>
              <div className="image-div">
                <img src="http://graynod.dollopinfotech.com/assets/web/images/login-arrow.png" />
              </div>
            </div>
            <Typography variant="h6">
              Please select your role to proceed a next setup for user and
              company
            </Typography>
            {next ? (
              <>
                <div className="login-sign-up-card">
                  <div
                    className="user"
                    onClick={() => {
                      setShow(true);
                      setAuthForm("user");
                    }}
                  >
                    <Avatar id={show ? "avatar-show" : "avatar-remove"}>
                      <PersonIcon sx={{ fontSize: "34px" }} />
                    </Avatar>
                    <Typography
                      variant="h5"
                      id={show ? "h5-text" : "h5-text-show"}
                    >
                      User
                    </Typography>
                  </div>
                  <div
                    className="company"
                    onClick={() => {
                      setShow(false);
                      setAuthForm("company");
                    }}
                  >
                    <Avatar id={show ? "avatar-show" : "avatar-remove"}>
                      <CorporateFareIcon sx={{ fontSize: "34px" }} />
                    </Avatar>
                    <Typography
                      variant="h5"
                      id={show ? "h5-text-show" : "h5-text"}
                    >
                      Company
                    </Typography>
                  </div>
                </div>
                <div className="button-content">
                  <Button
                    variant="contained"
                    id="next-button"
                    onClick={() => setNext(false)}
                  >
                    Next <ArrowForwardIcon />
                  </Button>
                </div>
              </>
            ) : (
              <UserAndcompany authForm={authForm} setNext={setNext} />
            )}
          </div>
        </div>
        <div className="create-account-2st-div">
          <img
            alt="error"
            src="http://graynod.dollopinfotech.com/assets/web/images/login-right-img.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
