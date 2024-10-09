import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import UserProfileCard from "./userProfile/userProfile";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ShareIcon from "@mui/icons-material/Share";
import Swal from "sweetalert2";
import CommentModel from "../models/CommentModel";
import FunnyCard from "./funnyCard/FunnyCard";
import ShareThoughtModel from "../models/ShareThoughtModel";
import ShareThoughtCard from "./shareThoughtCard/ShareThoughtCard";
import {
  GetRequest,
  PostRequest,
  PutRequest,
} from "../../api-handler/apihandler";
import { useAuth } from "../../Context/AuthContext";
import BookmarkModel from "../models/BookmarkModel";
import { useBookMark } from "../../Context/BookMarks";
import "react-toastify/dist/ReactToastify.css";
import "./profile.css";
import ShareModal from "../models/ShareModal";

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

const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/2b8e1e7b9d7930aa6a8e397a8fc765b2_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/7da78f3c60ad38c83e86c93f219ceb5b_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/055b7d1a9954156a2a1bbab80f19dd23_1.gif",
    heading: "Testing 3",
    advertiesment2: "advertiesment2",
  },
];

const HomeProfile = () => {
  const [open, setOpen] = React.useState(false);
  const [dataa, setDataaa] = React.useState([]);
  const [bookMarkModal, setBookMarkModal] = React.useState(false);
  const [share, setShare] = React.useState(false);
  const [post, setPost] = React.useState([]);
  const [comment, setComment] = React.useState([]);
  const [bookMarkData, setBookMarkData] = React.useState();
  const [selectedImage, setSelectedImage] = useState();
  const [indexValue, setIndexValue] = useState();
  const [bookMarkkk, setbookMark] = useBookMark();
  const [show, setShow] = React.useState(false);
  const [showClass, setShowClass] = useState(true);
  const handleCloseee = () => setShow(false);
  const handleClose = () => setBookMarkModal(false);
  const commentHandleClose = () => setOpen(false);
  const auths = localStorage.getItem("authusercompany");
  const existe = JSON.parse(auths);
  const [auth] = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const handleOpen = () => setOpen(true);

  const showThought = () => {
    setShow(true);
  };

  const commentOpen = (values) => {
    setComment(values);
    setIndexValue(values._id);
    setOpen(true);
  };

  const bookMarkHandleOpen = (values) => {
    setBookMarkModal(true);
    setBookMarkData(values);
  };

  const shareModalHandleOpen = (values) => {
    setShare(true);
    // setBookMarkData(values);
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

  const getdata = async () => {
    const response = await GetRequest("/api/create/userpost/getallpost");
    if (response) {
      setPost(response?.data?.response);
    } else {
    }
  };

  const createPost = async (values) => {
    const formData = new FormData();
    formData.append("thought", values.thought);
    formData.append("image", selectedImage);
    const response = await PostRequest(
      "/api/create/userpost/createpost",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: auth?.token,
        },
      }
    );
    if (response) {
      Swal.fire({
        icon: "Good job!",
        title: "Youre Post is Create!",
        icon: "success",
        timer: 1500,
      });
      reset();
      getdata();
      handleCloseee();
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
          Authorization: auth?.token,
        },
      }
    );
    if (response) {
      reset();
      getdata();
      commentHandleClose();
      toast.success("Youre Comment Is Added");
    } else {
    }
  };

  const removeComment = async (values) => {
    console.log("values", values);
    const response = await PutRequest(
      `/api/create/userpost/comment/remove/${indexValue}`,
      values,
      {
        headers: {
          "content-type": "application/json",
          Authorization: auth?.token,
        },
      }
    );
    if (response) {
      getdata();
      commentHandleClose();
      toast.success("Remove Youre Comment");
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
          Authorization: auth?.token,
        },
      }
    );
    if (response) {
      getdata();
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
      getdata();
    } else {
    }
  };

  const getExistUser = async () => {
    const response = await GetRequest("/api/auth/getsingle/data", {
      headers: {
        "content-type": "application/json",
        Authorization: existe?.token,
      },
    });
    if (response) {
      setDataaa(response);
    } else {
    }
  };
  
  useEffect(() => {
    getExistUser();
  }, []);

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="home-container">
        <div className="home-middle-container">
          <div className="profile-card-1">
            <UserProfileCard dataa={dataa} />
          </div>
          <div className="upload-user-profile">
            <div className="user-image-upload-contaner">
              <img
                src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png"
                style={{ width: "70px" }}
              />
              <div className="image-upload-model-conatiner">
                <Typography variant="h5" onClick={() => showThought()}>
                  Share your thoughts
                </Typography>
              </div>
            </div>
            <div className="login-user-card-details">
              {post.length &&
                post.map((values, index) => {
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
                        shareModalHandleOpen,
                        handleOpen,
                        values,
                        dataa,
                      }}
                    />
                  );
                })}
            </div>
          </div>
          <FunnyCard funnyImage={funnyImage} />
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
        <ShareThoughtModel
          show={show}
          handleCloseee={handleCloseee}
          setShow={setShow}
          createPost={createPost}
          register={register}
          handleSubmit={handleSubmit}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <BookmarkModel
          bookMarkModal={bookMarkModal}
          setBookMarkModal={setBookMarkModal}
          bookMarkThisTab={bookMarkThisTab}
          bookMarkData={bookMarkData}
          bookMarkRemoveThisTab={bookMarkRemoveThisTab}
          handleClose={handleClose}
        />
        <ShareModal setShare={setShare} share={share} handleClose={handleClose} />
      </div>
    </>
  );
};

export default HomeProfile;
