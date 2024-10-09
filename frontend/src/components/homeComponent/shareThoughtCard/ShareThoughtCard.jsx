import React, { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Avatar, Typography } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useExistUserAndCompany } from "../../../Context/UserAndCompany";
import "../profile.css";
const ShareThoughtCard = ({ cardData }) => {
  const {
    likecoment,
    showClass,
    values,
    likes,
    unLike,
    commentOpen,
    bookMarkHandleOpen,
    shareModalHandleOpen,
    dataa,
  } = cardData;
  const [userAndCompanyFind, setUserAndCompanyFind, id, setId] =
    useExistUserAndCompany();
  return (
    <div className={showClass ? "user-card" : "user-card2"}>
      <div className="text-and-img-content">
        <div
          className={
            showClass ? "logo-and-text-contanier" : "logo-and-text-contanier2"
          }
        >
          <div className="logo-name-and-date">
            {/* <img
              src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png"
              style={{ width:"70px"}}
            /> */}
            <div className="avatar avatar-large">
              <img
                src="https://static.gamersclub.com.br/players/avatar/737335/737335_full.jpg"
                alt="Usuário"
                className="avatar-image"
              />
              <img
                src="https://i.imgur.com/0aDdQyR.png"
                alt="Moldura"
                className="avatar-frame anim-spin"
              />
            </div>
            <div className="head-and-address-content">
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/profile/${values?.postedBy?.name.replace(/ /g, "")}`}
              >
                <Typography
                  id="funny-heading"
                  variant="h5"
                  onClick={() => setId(values.postedBy._id)}
                >
                  {values?.postedBy?.name}
                </Typography>
              </NavLink>
              <div className="address-and-month-content">
                <Typography
                  variant="h6"
                  sx={{
                    borderRight: "2px solid #c7d5e1",
                    paddingRight: "10px",
                  }}
                >
                  {values?.postedBy?.address}
                </Typography>
                <Typography variant="h6">
                  {dayjs(values?.AllPostData?.createdAt).format("DD/MM/YYYY")}
                </Typography>
              </div>
            </div>
          </div>
          <div
            className={
              showClass ? "public-and-doted-icon" : "public-and-doted-icon2"
            }
          >
            <PublicIcon sx={{ height: "60px", width: "60px" }} />
            <Typography variant="h6">Public</Typography>
            <Avatar
              sx={{
                height: "60px",
                width: "60px",
                color: "black",
                cursor: "pointer",
              }}
              onClick={() => bookMarkHandleOpen(values)}
            >
              <MoreVertIcon />
            </Avatar>
          </div>
        </div>
        <div
          className={showClass ? "user-img-container" : "user-img-container2"}
        >
          <img src="http://graynod.dollopinfotech.com/uploads/post/cc443b041743dbecdef8c3076ec02e60_1.jpeg" />
        </div>
        <div
          style={{
            border: "0px solid red",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            color: "gray",
          }}
        >
          <ThumbUpIcon />
          {values?.likes?.length}
        </div>
        <div
          className={
            showClass ? "like-commnet-container" : "like-commnet-container2"
          }
        >
          <div className="like-comment-under-content">
            {likecoment.map((p, index) => {
              return (
                <div
                  className={p.class}
                  key={index}
                  onClick={() =>
                    p.heading === "Share"
                      ? shareModalHandleOpen(values)
                      : p.heading === "Comment"
                      ? commentOpen(values)
                      : values.likes.some(
                          (p) => p.likedBy?._id === dataa.data.data._id
                        )
                      ? unLike(values)
                      : likes(values)
                  }
                >
                  {p.heading === "Like" ? (
                    values.likes.some(
                      (p) => p.likedBy?._id === dataa.data.data._id
                    ) ? (
                      <ThumbDownIcon />
                    ) : (
                      p.icon
                    )
                  ) : (
                    p.icon
                  )}
                  <Typography variant="h6">{p.heading}</Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareThoughtCard;
