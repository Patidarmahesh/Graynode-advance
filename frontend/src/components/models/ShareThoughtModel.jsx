import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import Groups2Icon from "@mui/icons-material/Groups2";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useExistUserAndCompany } from "../../Context/UserAndCompany";
import "./allmodel.css";

const style = {
  position: "absolute",
  top: "56%",
  left: "49.2%",
  transform: "translate(-50%, -50%)",
  width: 696,
  bgcolor: "background.paper",
  borderRadius: "8px",
  border: "none",
  p: 4,
};

const ShareThoughtModel = ({
  show,
  setShow,
  createPost,
  handleCloseee,
  handleSubmit,
  register,
  selectedImage,
  setSelectedImage,
}) => {
  const [userAndCompanyFind] = useExistUserAndCompany();
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage(selectedImage);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={handleCloseee}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <div
              className="create-post-users-container"
              style={{ height: "500px", overflowY: "scroll" }}
            >
              <form
                className="modal-content"
                onSubmit={handleSubmit(createPost)}
              >
                <div className="create-post">
                  <Typography variant="h4" sx={{ color: "black" }}>
                    Create Post
                  </Typography>
                </div>
                <div className="logo-and-location">
                  <div className="img-and-profile-name">
                    <img
                      src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png"
                      style={{ width: "80px" }}
                    />
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {userAndCompanyFind?.data?.name}
                    </Typography>
                  </div>
                  <div className="location-acordian">
                    <Button
                      variant="contained"
                      sx={{
                        width: "200px",
                        padding: "10px",
                        borderRadius: "22px",
                        border: "1px solid #c7d5e1",
                        background: "white",
                        color: "gray",
                        display: "flex",
                        gap: "6px",
                        boxShadow: "none",
                      }}
                    >
                      <AddLocationIcon />
                      Add Location
                    </Button>
                  </div>
                </div>
                <div className="share-youre-thought">
                  <TextField
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={5}
                    placeholder="Share Youre Thought"
                    sx={{
                      width: "100%",
                      color: "gray",
                      borderRadius: "4px",
                      border: "none",
                    }}
                    name="thought"
                    {...register("thought")}
                  />
                </div>
                <div className="image-uplods-user">
                  <input
                    className="image-uploader-input"
                    type="file"
                    name="image"
                    // {...register("image")}
                    onChange={imageChange}
                  />
                  <div
                    className={
                      selectedImage
                        ? "file-upload-content-remove"
                        : "file-upload-content"
                    }
                  >
                    <FileUploadIcon sx={{ fontSize: "44px" }} />
                  </div>
                  {selectedImage ? (
                    ""
                  ) : (
                    <Typography variant="h5" sx={{ color: "gray" }}>
                      Upload Photo/Images
                    </Typography>
                  )}
                  {selectedImage && (
                    <div className="post-conatiner-content">
                      <a
                        className="remove-post-content"
                        onClick={removeSelectedImage}
                      >
                        <CloseIcon />
                      </a>
                      <div className="prev-container">
                        <div className="post-prev">
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            className="image-uploader-img"
                            alt="Thumb"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="see-youre-post">
                  <Typography variant="h5">Who can see your post?</Typography>
                  <Typography sx={{ color: "gray" }}>
                    Your post will be visible on feed, on your profile and in
                    search results
                  </Typography>
                  <div className="public-and-private">
                    <Button
                      variant="contained"
                      sx={{
                        background: "rgba(0, 218, 176, 0.05)",
                        color: "#00dab0",
                        padding: "10px",
                        fontSize: "16px",
                        display: "flex",
                        width: "47%",
                        gap: "6px",
                        height: "64px",
                      }}
                    
                    >
                      <PublicIcon />
                      Public on Graynod
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        background: "white",
                        color: "#6c757d",
                        height: "64px",
                        padding: "10px",
                        width: "48%",
                        fontSize: "16px",
                        display: "flex",
                        gap: "6px",
                        border: "none",
                      }}
                    >
                      <Groups2Icon />
                      Connections on Graynod
                    </Button>
                  </div>
                </div>
                <div className="save-youre-thought">
                  <Button
                    variant="contained"
                    sx={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "32px",
                      fontSize: "20px",
                      background: "#00dab0",
                    }}
                    type="submit"
                  >
                    Post
                  </Button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShareThoughtModel;
