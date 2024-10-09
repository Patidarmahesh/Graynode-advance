import React from "react";
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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import "./allmodel.css";

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
const PostProductModal = ({
  open,
  handleClose,
  register,
  handleSubmit,
  addProduct,
  selectedImage,
  setSelectedImage,
}) => {

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
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
                onSubmit={handleSubmit(addProduct)}
              >
                <div className="edit-create-post">
                  <Typography variant="h4" sx={{ color: "black" }}>
                    Post Your Product
                  </Typography>
                </div>
                <div className="form-input-container">
                  <div className="user-background-prfile">
                    <div className="img-background">
                      {selectedImage ? (
                        <img src={URL.createObjectURL(selectedImage)} />
                      ) : (
                        <></>
                        // <img src="http://graynod.dollopinfotech.com/assets/web/images/user-cover.png" />
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
                              width: "250px",
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
                            Upload Item
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">
                    Choose Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Choose Category"
                      name="category"
                      {...register("category")}
                    >
                      <MenuItem value={"category1"}>category1</MenuItem>
                      <MenuItem value={"category2"}>category2</MenuItem>
                      <MenuItem value={"category3"}>category3</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="email-website">
                    <div className="email-website-text">
                      <Typography>Item Title</Typography>
                      <Typography>Item Price</Typography>
                    </div>
                    <div className="email-website-content">
                      <TextField
                        placeholder="Item Title"
                        id="fullWidth"
                        sx={{ width: "70%" }}
                        name="title"
                        {...register("title")}
                      />
                      <OutlinedInput
                        sx={{ width: "30%" }}
                        id="outlined-adornment-amount"
                        placeholder="Item Price"
                        type="number"
                        name="price"
                        {...register("price")}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </div>
                  </div>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select"
                      name="select"
                      {...register("select")}
                    >
                      <MenuItem value={"Used-Like new"}>Used-Like new</MenuItem>
                      <MenuItem value={"category2"}>category2</MenuItem>
                      <MenuItem value={"category3"}>category3</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="about-content">
                    <Typography>Item Desription</Typography>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={5}
                      placeholder="Enter Item Desription"
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
                      name="location"
                      {...register("location")}
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
                    Post Item
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

export default PostProductModal;
