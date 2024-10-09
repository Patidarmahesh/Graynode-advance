import React, { useEffect } from "react";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import { TextField, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BallotIcon from "@mui/icons-material/Ballot";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import FunnyCard from "../../components/homeComponent/funnyCard/FunnyCard";
import "../../components/homeComponent/profile.css";
import PostProductModal from "../../components/models/PostProductModal";
import { GetRequest, PostRequest } from "../../api-handler/apihandler";
import { useAuth } from "../../Context/AuthContext";
const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/2b8e1e7b9d7930aa6a8e397a8fc765b2_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/6037b9518b33c18aec8ef47af267a8a0_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/055b7d1a9954156a2a1bbab80f19dd23_1.gif",
    heading: "Testing 3",
    advertiesment2: "advertiesment2",
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    className: "mui-selected",
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Business2 = () => {
  const [product, setProduct] = useState([]);
  const [allList, setAllList] = useState(true);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [savedList, setSavedList] = useState(false);
  const [myList, setMyList] = useState(false);
  const [category1, setCategory1] = useState(true);
  const [category2, setCategory2] = useState(false);
  const [category3, setCategory3] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [auth] = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const addProduct = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("product", selectedImage);
    formData.append("location", values.location);
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("select", values.select);
    formData.append("category", values.category);
    formData.append("description", values.description);
    const response = await PostRequest(
      "/api/create/product/createproduct",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: auth.token,
        },
      }
    );
    if (response) {
      Swal.fire({
        icon: "Good job!",
        title: "Youre Product is Create!",
        icon: "success",
        timer: 1500,
      });
      reset();
      setSelectedImage("");
      handleClose();
    } else {
    }
  };

  const getAllProduct = async () => {
    const response = await GetRequest("/api/create/product/getallproduct");
    if (response) {
      setProduct(response);
    } else {
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <PrivateMainLayOut>
      <div className="home-container">
        <div className="home-middle-container">
          <div className="search-card-1">
            <div className="seaarch-list-box">
              <div
                className={allList ? "active-class" : "search-contenttt"}
                onClick={() => {
                  setSavedList(false);
                  setAllList(true);
                  setMyList(false);
                }}
              >
                <div className="list-icon">
                  <BallotIcon sx={{ fontSize: "30px" }} />
                  <Typography variant="h6">All Listing</Typography>
                </div>
                <KeyboardArrowRightIcon sx={{ fontSize: "30px" }} />
              </div>
              <div
                className={savedList ? "active-class" : "search-contenttt"}
                onClick={() => {
                  setSavedList(true);
                  setAllList(false);
                  setMyList(false);
                }}
              >
                <div className="list-icon">
                  <BookmarkBorderIcon sx={{ fontSize: "30px" }} />
                  <Typography variant="h6">Saved List</Typography>
                </div>
                <KeyboardArrowRightIcon sx={{ fontSize: "30px" }} />
              </div>
              <div
                className={myList ? "active-class" : "search-contenttt"}
                onClick={() => {
                  setMyList(true);
                  setSavedList(false);
                  setAllList(false);
                }}
              >
                <div className="list-icon">
                  <ViewListIcon sx={{ fontSize: "30px" }} />
                  <Typography variant="h6">My Listing</Typography>
                </div>
                <KeyboardArrowRightIcon sx={{ fontSize: "30px" }} />
              </div>
            </div>
            <Typography variant="h5">Categories</Typography>
            <div className="seaarch-list-box">
              <div className="search-content">
                <div
                  className={
                    category1 ? "categories-head-active" : "categories-head"
                  }
                  onClick={() => {
                    setCategory2(false);
                    setCategory1(true);
                    setCategory3(false);
                  }}
                >
                  <Typography variant="h6">Category 1</Typography>
                </div>
              </div>
              <div className="search-content">
                <div
                  className={
                    category2 ? "categories-head-active" : "categories-head"
                  }
                  onClick={() => {
                    setCategory1(false);
                    setCategory2(true);
                    setCategory3(false);
                  }}
                >
                  <Typography variant="h6">Category 2</Typography>
                </div>
              </div>
              <div className="search-content">
                <div
                  className={
                    category3 ? "categories-head-active" : "categories-head"
                  }
                  onClick={() => {
                    setCategory1(false);
                    setCategory3(true);
                    setCategory2(false);
                  }}
                >
                  <Typography variant="h6">Category 3</Typography>
                </div>
              </div>
            </div>
            <Typography variant="h5">Filters</Typography>
            <div className="seaarch-list-box">
              <div className="search-content">
                <div className="list-icon">
                  <Typography variant="h6">1 Days</Typography>
                </div>
              </div>
              <div className="search-content">
                <div className="list-icon">
                  <Typography variant="h6">4 Days</Typography>
                </div>
              </div>
              <div className="search-content">
                <div className="list-icon">
                  <Typography variant="h6">7 Days</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="upload-user-profile">
            <div className="myList-contaner">
              <div className="post-product-model-content">
                <Typography variant="h5">All Listing</Typography>
                <div className="post-product" onClick={() => handleOpen()}>
                  <AddCardIcon sx={{ fontSize: "28px" }} />
                  <Typography variant="h6">Post Youre Product</Typography>
                </div>
              </div>
            </div>
            <>
              <div className="myList-contaner">
                {myList ? (
                  <div className={myList && "active-conatiner222"}>
                    <div className="my-list">
                      <Box sx={{ width: "100%" }}>
                        <Box>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                          >
                            <Tab
                              sx={{ fontSize: "16px", color: "black" }}
                              label="Selling"
                              {...a11yProps(0)}
                            />
                            <Tab
                              sx={{ fontSize: "16px", color: "black" }}
                              label="Draft"
                              {...a11yProps(1)}
                            />
                            <Tab
                              sx={{ fontSize: "16px", color: "black" }}
                              label="Sold Out"
                              {...a11yProps(2)}
                            />
                            <Tab
                              sx={{ fontSize: "16px", color: "black" }}
                              label="Active Listing"
                              {...a11yProps(3)}
                            />
                            <Tab
                              sx={{ fontSize: "16px", color: "black" }}
                              label="Inactive Listing"
                              {...a11yProps(4)}
                            />
                          </Tabs>
                        </Box>
                      </Box>
                    </div>
                  </div>
                ) : (
                  <div className="image-upload-model-conatiner222">
                    <TextField
                      label="Search here.................."
                      type="text"
                      fullWidth
                    />
                  </div>
                )}
              </div>
            </>
            <div className="login-user-card-details">
              <CustomTabPanel value={value} index={0}>
                <Typography variant="h5">No Data Available!</Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Typography variant="h5">No Data Available!</Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Typography variant="h5">No Data Available!</Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Typography variant="h5">No Data Available!</Typography>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Typography variant="h5">No Data Available!</Typography>
              </CustomTabPanel>
            </div>
          </div>
          <FunnyCard funnyImage={funnyImage} />
        </div>
      </div>
      <PostProductModal
        open={open}
        setOpen={setOpen}
        handleSubmit={handleSubmit}
        addProduct={addProduct}
        setSelectedImage={setSelectedImage}
        register={register}
        selectedImage={selectedImage}
      />
    </PrivateMainLayOut>
  );
};

export default Business2;
