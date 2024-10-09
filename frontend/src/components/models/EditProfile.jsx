import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./allmodel.css";
import { Controller } from "react-hook-form";

const style = {
  position: "absolute",
  top: "58%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 696,
  bgcolor: "background.paper",
  borderRadius: "8px",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const industery = [
  "Agriculture and Allied",
  "Auto Components",
  "Automobiles",
  "Aviation",
  "Banking",
  "Biotechnology",
  "Cement",
  "Chemicals",
  "Consumer Durables",
  "E-Commerce",
  "Financial Services",
  "Healthcare",
  "Infrastructure",
  "Insurance",
  "Manufacturing",
  "Railways",
  "Oil and Gas",
  "Retail",
  "Other",
];

const EditProfile = ({
  open,
  setOpen,
  handleClose,
  register,
  handleSubmit,
  editProofile,
  selectedImage,
  setSelectedImage,
  profileImage,
  setProfileImage,
  control,
}) => {
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const profileImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

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
            <div
              className="edit-user-card-conatiner"
              style={{ height: "500px", overflowY: "scroll" }}
            >
              <form
                className="edit-modal-content"
                onSubmit={handleSubmit(editProofile)}
              >
                <div className="edit-create-post">
                  <Typography variant="h4" sx={{ color: "black" }}>
                    Create Post
                  </Typography>
                </div>
                <div className="form-input-container">
                  <div className="user-background-prfile">
                    <div className="img-background">
                      {selectedImage ? (
                        <img src={URL.createObjectURL(selectedImage)} />
                      ) : (
                        <img src="http://graynod.dollopinfotech.com/assets/web/images/user-cover.png" />
                      )}
                    </div>
                    {selectedImage ? (
                      ""
                    ) : (
                      <div className="add-cover-button-content">
                        <div className="select-image">
                          <input
                            type="file"
                            onChange={imageChange}
                            name="background"
                          />
                          <Button
                            variant="contained"
                            sx={{
                              width: "300px",
                              fontSize: "20px",
                              color: "gray",
                              background: "white",
                              marginTop: "1rem",
                              marginLeft: "14px",
                              borderRadius: "8px",
                              display: "flex",
                              gap: "10px",
                              position: "absolute",
                              top: "0",
                            }}
                          >
                            <CameraAltIcon />
                            Add Cover Photo
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="profile-cover-image">
                    <div className="cover-circle">
                      <img
                        src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <input
                        type="file"
                        name="profile"
                        onChange={profileImageChange}
                        className="cover-profile-inputtt"
                      />
                    </div>
                  </div>
                  <div className="name-content">
                    <Typography>Name</Typography>
                    <TextField
                      fullWidth
                      placeholder="Mahesh Patidar"
                      id="fullWidth"
                      name="name"
                      {...register("name")}
                    />
                  </div>
                  <div className="select-box-content">
                    <Controller
                    
                      render={({ field: { ...restField } }) => (
                        <Select
                          bordered={false}
                          placeholder="Select A Category"
                          size="large"
                          showSearch
                          className="form-select mb-3"
                          // name="industry"
                          {...restField}
                          sx={{ width: "50%" }}
                        >
                          {industery.map((values, index) => {
                            return (
                              <MenuItem key={index} value={values}>
                                {values}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                      name="industry"
                      control={control}
                    />

                    <FormControl sx={{ width: "50%" }}>
                      <InputLabel id="demo-simple-select-label">
                        companyType
                      </InputLabel>
                      <Select
                        // value={companyType}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Industery"
                        name="companyType"
                        {...register("companyType")}
                      >
                        <MenuItem value={"Private"}>Private</MenuItem>
                        <MenuItem value={"Public"}>Public</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="email-website">
                    <div className="email-website-text">
                      <Typography>Email</Typography>
                      <Typography>Website</Typography>
                    </div>
                    <div className="email-website-content">
                      <TextField
                        placeholder="Mahesh Patidar"
                        id="fullWidth"
                        sx={{ width: "50%" }}
                        disabled
                        name="email"
                        {...register("email")}
                      />
                      <TextField
                        placeholder="Website"
                        id="fullWidth"
                        sx={{ width: "50%" }}
                        name="website"
                        {...register("website")}
                      />
                    </div>
                  </div>
                  <div className="about-content">
                    <Typography>About</Typography>
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
                      name="description"
                      {...register("description")}
                    />
                  </div>
                  <div className="location-content">
                    <Typography>Youre Location</Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      placeholder="Location...."
                      id="fullWidth"
                      name="address"
                      {...register("address")}
                    />
                  </div>
                </div>
                <div className="save-profile">
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
                    Save Profile
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

export default EditProfile;
