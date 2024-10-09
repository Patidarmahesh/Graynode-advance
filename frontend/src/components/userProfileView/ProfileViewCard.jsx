import React, { useEffect } from "react";
import "./userview.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ToastContainer, toast } from "react-toastify";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FunnyCard from "../homeComponent/funnyCard/FunnyCard";
import ShareThoughtCard from "../homeComponent/shareThoughtCard/ShareThoughtCard";
import { GetRequest, PutRequest } from "../../api-handler/apihandler";
import { useExistUserAndCompany } from "../../Context/UserAndCompany";
import { useAuth } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import CommentModel from "../models/CommentModel";
import BookmarkModel from "../models/BookmarkModel";
import { useBookMark } from "../../Context/BookMarks";

const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/6037b9518b33c18aec8ef47af267a8a0_1.gif",
    heading: "Testing",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/c5a2e63e33dffd074a7a53a38d31495e_1.gif",
    heading: "Abc1",
  },
];

const likecoment = [
  {
    icon: <ThumbUpIcon sx={{ fontSize: "34px", color: "gray" }} />,
    class: "like",
    className: "likeColor",
    heading: "Like",
  },
  {
    icon: <CommentIcon sx={{ fontSize: "34px", color: "gray" }} />,
    class: "comment",
    heading: "Comment",
  },
  {
    icon: <ShareIcon sx={{ fontSize: "34px", color: "gray" }} />,
    class: "share",
    heading: "Share",
  },
];

const ProfileViewCard = () => {
  const [bookMarkModal, setBookMarkModal] = React.useState(false);
  const [bookMarkData, setBookMarkData] = React.useState();
  const [comment, setComment] = React.useState([]);
  const [dataa, setDataaa] = React.useState([]);
  const [indexValue, setIndexValue] = useState("");
  const [show, setShow] = React.useState(false);
  const showOpen = () => setShow(true);
  const [auth] = useAuth();
  const [open, setOpen] = useState(false);
  const [getPerticularPosts, setGetPerticularPosts] = useState([]);
  const [showClass, setShowClass] = useState(false);
  const [bookMarkkk, setbookMark] = useBookMark();
  const [userAndCompanyFind,setUserAndCompanyFind,id, setId] = useExistUserAndCompany();
  const handleClose = () => setBookMarkModal(false);
  const auths = localStorage.getItem("authusercompany");
  const existe = JSON.parse(auths);
  const params = useParams();
  const { register, handleSubmit, reset } = useForm();
  console.log("iddddddd",id);

  const commentOpen = (values) => {
    setIndexValue(values._id);
    setComment(values);
    setOpen(true);
  };

  const handleOpen = () => setOpen(true);

  const bookMarkHandleOpen = (values) => {
    setBookMarkModal(true);
    setBookMarkData(values);
  };

  const getPertiCulatPost = async () => {
    const response = await GetRequest("/api/create/userpost/getnameby", {
      headers: {
        id: id,
      },
    });
    if (response) {
      setGetPerticularPosts(response?.data?.response);
    } else {
    }
  };

  const sendComment = async (values) => {
    const response = await PutRequest(
      `/api/create/userpost/comment/add/${indexValue}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Authorization: auth.token,
        },
      }
    );
    if (response) {
      reset();
      getPertiCulatPost();
    } else {
    }
  };

  const removeComment = async (values) => {
    const response = await PutRequest(
      `/api/create/userpost/comment/add/${indexValue}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Authorization: auth.token,
        },
      }
    );
    if (response) {
      getPertiCulatPost();
    } else {
    }
  };

  const likes = async (values) => {
    const response = await PutRequest(
      `/api/create/userpost/likes/${values._id}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Authorization: auth.token,
        },
      }
    );
    if (response) {
      getPertiCulatPost();
    } else {
    }
  };

  const unLike = async (values) => {
    console.log("values", values);
    const response = await PutRequest(
      `/api/create/userpost/unlike/${values._id}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Authorization: auth.token,
        },
      }
    );
    if (response) {
      getPertiCulatPost();
    } else {
    }
  };

  const getExistUser = async () => {
    const response = await GetRequest("/api/auth/getsingle/data", {
      headers: {
        "content-type": "application/json",
        Authorization: existe.token,
      },
    });
    if (response) {
      setDataaa(response);
    } else {
    }
  };

  const bookMarkThisTab = () => {
    setbookMark([
      ...bookMarkkk,
      {
        name: bookMarkData.postedBy.name,
        address: bookMarkData?.postedBy?.address,
        profile: bookMarkData?.postedBy?.profile,
        date: bookMarkData?.createdAt,
        postImage: bookMarkData?.image,
        comments: bookMarkData?.comments,
        likes: bookMarkData?.likes,
      },
    ]);
    localStorage.setItem(
      "bookmarkkkk",
      JSON.stringify([
        ...bookMarkkk,
        {
          name: bookMarkData.postedBy.name,
          address: bookMarkData?.postedBy?.address,
          profile: bookMarkData?.postedBy?.profile,
          date: bookMarkData?.createdAt,
          postImage: bookMarkData?.image,
          comments: bookMarkData?.comments,
          likes: bookMarkData?.likes,
        },
      ])
    );
    handleClose();
    toast.success("Add BookMark");
  };

  const bookMarkRemoveThisTab = () => {
    let index = bookMarkkk.findIndex((p) => p.name === bookMarkData.name);
    const deleteCart = [...bookMarkkk];
    deleteCart.splice(index, 1);
    setbookMark(deleteCart);
    localStorage.setItem("bookmarkkkk", JSON.stringify(deleteCart));
    handleClose();
    toast.success("Remove BookMark");
  };
  useEffect(() => {
    getExistUser();
  }, []);
  useEffect(() => {
    getPertiCulatPost();
  }, [params?.name]);
  return (
    <>
      <ToastContainer />
      <div className="user-profile-view-container">
        <div className="user-profile-under-content">
          <div className="user-view-card-container">
            <div className="user-view-card-logo">
              <div className="view-card-head-image">
                <img src="http://graynod.dollopinfotech.com/assets/web/images/user-cover.png" />
              </div>
              <div className="view-card-head"></div>
              <div className="logo-user-view">
                <img src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png" />
              </div>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", marginLeft: "2.5rem" }}
              >
                {getPerticularPosts[0]?.postedBy?.name}
              </Typography>
            </div>
            {getPerticularPosts&&
              getPerticularPosts?.map((values, index) => {
                return (
                  <ShareThoughtCard
                    key={index}
                    cardData={{
                      likecoment,
                      likes,
                      unLike,
                      commentOpen,
                      showClass,
                      bookMarkHandleOpen,
                      handleOpen,
                      values,
                      dataa,
                    }}
                  />
                );
              })}
          </div>
          <div className="user-profile-funny-views">
            <FunnyCard funnyImage={funnyImage} />
          </div>
        </div>
      </div>
      <CommentModel
        open={open}
        setOpen={setOpen}
        register={register}
        handleSubmit={handleSubmit}
        sendComment={sendComment}
        removeComment={removeComment}
        comment={comment}
      />
      <BookmarkModel
        bookMarkModal={bookMarkModal}
        setBookMarkModal={setBookMarkModal}
        bookMarkThisTab={bookMarkThisTab}
        bookMarkData={bookMarkData}
        bookMarkRemoveThisTab={bookMarkRemoveThisTab}
        handleClose={handleClose}
      />
    </>
  );
};

export default ProfileViewCard;
