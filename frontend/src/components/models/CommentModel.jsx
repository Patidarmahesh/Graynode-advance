import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import ForwardIcon from "@mui/icons-material/Forward";
import CloseIcon from "@mui/icons-material/Close";
import "./allmodel.css";
import { useExistUserAndCompany } from "../../Context/UserAndCompany";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute",
  top: "56%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  bgcolor: "black",
  borderRadius: "8px",
  // border: "none",
  boxShadow: 24,
};

const data = [
  {
    profile:
      "https://s.yimg.com/fz/api/res/1.2/ZAx0K3pmjLdFCh1NX0kQZw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTc4/https://s.yimg.com/zb/imgv1/c017c134-f15d-319e-9c31-95c31983eeb4/t_500x300",
    comment: "nice bro you are looking good",
  },
  {
    profile:
      "https://www.suntiros.com/wp-content/uploads/2017/09/Virat-Kohli-HD-Photos-Gallery.jpg",
    comment: "nice bro you are looking good",
  },
  {
    profile: "http://im.rediff.com/cricket/2016/apr/26kohli.jpg",
    comment: "nice bro you are looking good",
  },
  {
    profile:
      "https://s.yimg.com/fz/api/res/1.2/ZAx0K3pmjLdFCh1NX0kQZw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTc4/https://s.yimg.com/zb/imgv1/c017c134-f15d-319e-9c31-95c31983eeb4/t_500x300",
    comment: "nice bro you are looking good",
  },
];

export default function CommentModel({
  open,
  setOpen,
  register,
  comment,
  handleSubmit,
  sendComment,
  removeComment,
}) {
  const handleClose = () => setOpen(false);
  const [userAndCompanyFind, setUserAndCompanyFind, id, setId] =
    useExistUserAndCompany();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="comment-image-and-comments-container">
              <div className="user-image-and-comment-container">
                <img src="http://graynod.dollopinfotech.com/uploads/post/cc443b041743dbecdef8c3076ec02e60_1.jpeg" />
              </div>
              <div className="user-profile-comment-like-containerr">
                <div className="user-avatar-name-container">
                  <div className="avatar2 avatar-large2" style={{height:"60px",width:"60px"}}>
                    <img
                      src="https://www.thefamouspeople.com/profiles/images/virat-kohli-5.jpg"
                      alt="Usuário"
                      style={{height:"100%",width:"100%"}}
                      className="avatar-image"
                    />
                    <img
                      src="https://i.imgur.com/T1lahme.png"
                      alt="Moldura"
                      className="avatar-frame3"
                    />
                  </div>
                  <Typography variant="h5" sx={{ color: "white" }}>
                    {comment?.postedBy?.name}
                  </Typography>
                </div>
                {comment?.comments?.length ? (
                  <div className="user-comments-and-user">
                    {comment?.comments?.map((p, index) => {
                      return (
                        <div key={index} className="profile-comments">
                          <div className="name-contentsss">
                            <div className="avatar-comment">
                              <div className="avatar2 avatar-large2">
                                <img
                                  src="https://static.gamersclub.com.br/players/avatar/737335/737335_full.jpg"
                                  alt="Usuário"
                                  className="avatar-image2"
                                />
                                <img
                                  src="https://i.imgur.com/0aDdQyR.png"
                                  alt="Moldura"
                                  className="avatar-frame2 anim-spin"
                                />
                              </div>
                            </div>
                            <NavLink
                              style={{ textDecoration: "none" }}
                              to={`/profile/${p?.commentBy?.name.replace(
                                / /g,
                                ""
                              )}`}
                            >
                              <Typography variant="h5" sx={{ color: "white" }}>
                                {p.commentBy.name}
                              </Typography>
                            </NavLink>
                          </div>
                          <ForwardIcon
                            sx={{ fontSize: "28px", color: "white" }}
                          />
                          <Typography sx={{ color: "white" }}>
                            {p.comment}
                          </Typography>
                          {p.commentBy._id.includes(
                            userAndCompanyFind?.data?._id
                          ) && (
                            <CloseIcon
                              sx={{
                                width: "24px",
                                color: "white",
                                cursor: "pointer",
                              }}
                              onClick={() => removeComment(p)}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="user-comments-and-user-no-data">
                    <Typography
                      variant="h4"
                      style={{ color: "white", textShadow: "2px 2px 4px red" }}
                    >
                      Comments Is Empty
                    </Typography>
                  </div>
                )}
                <div className="comment-form-container">
                  <div className="comment-form">
                    <EmojiEmotionsIcon
                      style={{ height: "56px", width: "56px", color: "gray" }}
                    />
                    <form
                      class="search-container"
                      onSubmit={handleSubmit(sendComment)}
                    >
                      <TextField
                        // id="outlined-textarea"
                        placeholder="Add a Comment"
                        multiline
                        sx={{
                          width: "350px",
                          background: "white",
                          borderRadius: "4px",
                        }}
                        name="comment"
                        {...register("comment")}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: "25px",
                          width: "160px",
                          background: "#00dab0",
                        }}
                        type="submit"
                        endIcon={<SendIcon />}
                      >
                        Send
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
