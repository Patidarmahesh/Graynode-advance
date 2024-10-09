import React, { useEffect } from "react";
import "./view.css";
import { Button, Typography } from "@mui/material";
import FunnyCard from "../homeComponent/funnyCard/FunnyCard";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditProfile from "../models/EditProfile";
import { useAuth } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { PutRequest } from "../../api-handler/apihandler";
import { useExistUserAndCompany } from "../../Context/UserAndCompany";

const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/6037b9518b33c18aec8ef47af267a8a0_1.gif",
    heading: "Testing",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/c5a2e63e33dffd074a7a53a38d31495e_1.gif",
    heading: "Abc1 Abc1 Abc1",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/055b7d1a9954156a2a1bbab80f19dd23_1.gif",
    heading: "Testing 3",
    advertiesment2: "advertiesment2",
  },
];
const ViewProfileCard = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [profileImage, setProfileImage] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [auth] = useAuth();
  const [userAndCompanyFind, setUserAndCompanyFind] = useExistUserAndCompany();
  console.log("mahesh",userAndCompanyFind);
  const { register, handleSubmit, reset,setValue,control } = useForm();

  const editProofile = async (values) => {
    const formData = new FormData();
    formData.append("background",selectedImage);
    formData.append("profile",profileImage);
    formData.append("name", values.name);
    formData.append("companyType", values.companyType);
    formData.append("industry", values.industry);
    formData.append("website", values.website);
    formData.append("description", values.description);
    // console.log("formData",formData.get('background'));
    // formData.append("location", values.location);
    const response = await PutRequest("/api/auth/company/update", formData, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: auth.token,
      },
    });
    if (response) {
      Swal.fire({
        icon: "Good job!",
        title: "Youre Profile is Update!",
        icon: "success",
        timer: 1500,
      });
      reset();
      setSelectedImage('');
      handleClose();
    } else {
    }
  };

  const setProfileData = () =>{
    setValue("name",userAndCompanyFind.data.name);
    setValue("companyType",userAndCompanyFind.data.companyType);
    setValue("industry",userAndCompanyFind.data.industry);
    setValue("email",userAndCompanyFind.data.email); 
    setValue("website",userAndCompanyFind.data.website);
    setValue("description",userAndCompanyFind.data.description);
    setValue("address",userAndCompanyFind.data.address);
  }
  useEffect(()=>{
    setProfileData();
  },[userAndCompanyFind])
  return (
    <>
      <div className="view-profile-container" style={{ marginTop: "6rem" }}>
        <div className="view-profile-middle-content">
          <div className="view-profile-container">
            <div className="view-card">
              <div className="view-image-logo-content">
                <img src="http://graynod.dollopinfotech.com/assets/web/images/company-img.png" />
              </div>
              <div className="user-profile-image">
                <div className="user-image-text-div">
                  <div className="user-image-content">
                    <div className="user-images">
                      <img src="http://graynod.dollopinfotech.com/assets/web/images/user-img.png" />
                    </div>
                    <Button
                      variant="contained"
                      id="edit-button"
                      onClick={() => handleOpen()}
                    >
                      <EditIcon /> Edit Profile
                    </Button>
                  </div>
                  <Typography variant="h4" sx={{ fontWeight: "700" }}>
                    {userAndCompanyFind.data.name}
                  </Typography>
                  <Typography variant="h6">{userAndCompanyFind.data.companyType}</Typography>
                </div>
                <div className="stright-line"></div>
              </div>
              <div className="about-content-user">
                <div className="over-view">
                  <Typography variant="h5">Overview</Typography>
                  <Typography variant="h6">not know</Typography>
                  <Typography variant="h5">Industry</Typography>
                  <Typography variant="h6">Cement</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="view-emoji-content">
            <FunnyCard funnyImage={funnyImage} />
          </div>
        </div>
      </div>
      <EditProfile
        open={open}
        handleClose={handleClose}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        setOpen={setOpen}
        register={register}
        handleSubmit={handleSubmit}
        editProofile={editProofile}
        control={control}
      />
    </>
  );
};

export default ViewProfileCard;
