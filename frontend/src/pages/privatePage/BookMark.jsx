import React from "react";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import "../../components/models/allmodel.css";
import FunnyCard from "../../components/homeComponent/funnyCard/FunnyCard";
import { Button, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { useBookMark } from "../../Context/BookMarks";

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

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: true,
});

const BookMark = () => {
  const [bookMarkkk, setbookMark] = useBookMark();
  const removeItem = (index) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't to delete this cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const deleteCart = [...bookMarkkk];
          deleteCart.splice(index, 1);
          setbookMark(deleteCart);
          localStorage.setItem("bookmarkkkk", JSON.stringify(deleteCart));
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your cart has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <PrivateMainLayOut>
      <div className="bookmark-container">
        <div className="bookmark-content">
          <div className="bookmark-buuton-content">
            <div className="boomark-arrow-content">
              <NavLink to="/home">
                <Button
                  sx={{
                    background: "white",
                    color: "gray",
                    border: "1px solid #c7d5e1",
                    height: "64px",
                    borderRadius: "50%",
                    width: "20px",
                    fontSize: "20px",
                  }}
                >
                  <KeyboardBackspaceIcon />
                </Button>
              </NavLink>
              <Typography variant="h5">Bookmark</Typography>
            </div>
            <div className="saved-posts">
              <Typography
                sx={{ background: "rgba(0, 218, 176, 0.05)", color: "#00dab0" }}
              >
                Saved Posts
              </Typography>
              <Typography
                sx={{ background: "rgba(0, 218, 176, 0.05)", color: "#00dab0" }}
              >
                {bookMarkkk&&bookMarkkk.length}
              </Typography>
            </div>
          </div>
          <div className="bookmark-saved-card-conatiner">
            {bookMarkkk&&
              bookMarkkk?.map((p, index) => {
                return (
                  <div className="bookmark-saved-card" key={index}>
                    <div className="bookmark-card-contnetsss">
                      <div className="bookmark-header">
                        <img
                          src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png"
                          style={{ width: "90px" }}
                        />
                        <div className="bookmark-text-container">
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            {p?.name}
                          </Typography>
                          <Typography
                            sx={{ display: "flex", color: "gray", gap: "4px" }}
                          >
                            {p.address} |
                            <Typography>
                              {" "}
                              {dayjs(p?.date).format("DD/MM/YYYY")}
                            </Typography>
                          </Typography>
                        </div>
                        <Button
                          onClick={() => removeItem(index)}
                          variant="contained"
                          sx={{
                            background: "white",
                            color: "gray",
                            border: "1px solid #c7d5e1",
                            height: "50px",
                            borderRadius: "22px",
                            width: "140px",
                            textTransform: "lowercase",
                            fontSize: "18px",
                          }}
                        >
                          Remove <DeleteOutlineIcon />
                        </Button>
                      </div>
                      <div className="bookmark-image-contents">
                        <div className="bookmark-imgss">
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "8px",
                            }}
                            src="http://graynod.dollopinfotech.com/uploads/post/cc443b041743dbecdef8c3076ec02e60_1.jpeg"
                          />
                        </div>
                        <Typography>Testing Post</Typography>
                      </div>
                      <div className="bookmark-like-comment">
                        <div className="like-com">
                          <Button
                            variant="contained"
                            sx={{
                              background: "white",
                              color: "gray",
                              border: "1px solid #c7d5e1",
                              height: "50px",
                              borderRadius: "22px",
                              width: "140px",
                              textTransform: "lowercase",
                              fontSize: "18px",
                              display: "flex",
                              gap: "10px",
                            }}
                            disabled
                          >
                            <ThumbUpIcon /> {p.likes?.length}
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              background: "white",
                              color: "gray",
                              border: "1px solid #c7d5e1",
                              height: "50px",
                              borderRadius: "22px",
                              width: "140px",
                              textTransform: "lowercase",
                              fontSize: "18px",
                              display: "flex",
                              gap: "10px",
                            }}
                            disabled
                          >
                            <CommentIcon /> {p.comments?.length}
                          </Button>
                        </div>
                        <Button
                          variant="contained"
                          sx={{
                            background: "#f3fffd",
                            color: "#00dab0",
                            border: "1px solid #00dab0",
                            height: "50px",
                            borderRadius: "22px",
                            width: "140px",
                            textTransform: "lowercase",
                            fontSize: "18px",
                          }}
                        >
                          View Post
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="bookmark-fuuny-emoji">
            <FunnyCard funnyImage={funnyImage} />
          </div>
        </div>
      </div>
    </PrivateMainLayOut>
  );
};

export default BookMark;
