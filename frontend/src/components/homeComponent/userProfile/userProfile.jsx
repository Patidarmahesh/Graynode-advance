import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { GetRequest } from "../../../api-handler/apihandler";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const UserProfileCard = ({dataa}) => {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        height: "340px",
      }}
    >
      <div
        style={{
          height: "126px",
          border: "0px solid red",
          width: "100%",
          backgroundImage: "url('http://graynod.dollopinfotech.com/assets/web/images/user-cover.png')",
          // backgroundImage: `url(${(userAndCompanyFind.background[0]) || "http://graynod.dollopinfotech.com/assets/web/images/user-cover.png"})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <img
      // src={`http://localhost:8000/${image}`}
        // src={userAndCompanyFind?`http://localhost:8000/${userAndCompanyFind.profile[0]}`:"http://graynod.dollopinfotech.com/assets/web/images/user-img.png"}
        src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png"
        style={{width:"100px", marginTop: "-3.5rem" }}
      />
      <Typography
        sx={{ fontWeight: "bold", fontSize: "20px", marginTop: "1rem" }}
      >
        {dataa?.data?.data?.name}
      </Typography>
      <div style={{ border: "1px solid gray", width: "90%" }}></div>
      <CardActions>
        <NavLink to="/viewprofile" style={{ textDecoration: "none" }}>
          <Typography sx={{ fontSize: "20px", color: "#00dab0" }}>
            View Profile
          </Typography>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default UserProfileCard;
