import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import { ToastContainer, toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../Schema/schema";
import FunnyCard from "../../components/homeComponent/funnyCard/FunnyCard";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import "../../components/homeComponent/profile.css";
import { GetRequest, PutRequest } from "../../api-handler/apihandler";
import "react-toastify/dist/ReactToastify.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "1px solid #c7d5e1",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<></>} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const funnyImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/7da78f3c60ad38c83e86c93f219ceb5b_1.gif",
    heading: "Funny Laugh",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/2b8e1e7b9d7930aa6a8e397a8fc765b2_1.gif",
    heading: "Burger",
  },
  {
    image:
      "http://graynod.dollopinfotech.com/uploads/advertisement/055b7d1a9954156a2a1bbab80f19dd23_1.gif",
    heading: "Testing 3",
    advertiesment2: "advertiesment2",
  },
];
const manageNotification = [
  {
    General: "General Posts",
    GeneralHeading: "Manage general posts notifications by toggle",
  },
  {
    General: "Business Hub",
    GeneralHeading: "Manage Marketplace notifications by toggle",
  },
  {
    General: "Jobs",
    GeneralHeading: "Manage Jobs notifications by toggle",
  },
  {
    General: "News",
    GeneralHeading: "Manage News notifications by toggle",
  },
  {
    General: "Group",
    GeneralHeading: "Manage Group notifications by toggle",
  },
];

const managePrivacy = [
  {
    General: "Profile Photo",
    GeneralHeading: "Control who can see your profile photo",
  },
  {
    General: "Profile",
    GeneralHeading:
      "Control who can see your bio. No one will see your address.",
  },
  {
    General: "Discoverability",
    GeneralHeading: "Control who can search for you",
  },
  {
    General: "Location",
    GeneralHeading: "Control who can see your Location",
  },
];

const Setting = () => {
  const [allList, setAllList] = useState(true);
  const [setting, setSetting] = useState([]);
  const [mobile, setMobile] = useState();
  const [savedList, setSavedList] = useState(false);
  const [myList, setMyList] = useState(false);
  // _______________Profile_Photo_______________
  const [connection, setConnection] = useState(true);
  const [everyOne, setEveryOne] = useState(false);
  const [me, setMe] = useState(false);
  // _______________Profile_Photo_______________
  // _______________Profile_______________
  const [connection2, setConnection2] = useState(true);
  const [everyOne2, setEveryOne2] = useState(false);
  const [me2, setMe2] = useState(false);
  // _______________Profile_______________
  // _______________Discoverability_______________
  const [connection3, setConnection3] = useState(true);
  const [everyOne3, setEveryOne3] = useState(false);
  const [me3, setMe3] = useState(false);
  // _______________Discoverability_______________
  const [expande, setExpandedd] = React.useState("panel1");
  const [showPassword, setShowPassword] = React.useState(false);
  const auths = localStorage.getItem("authusercompany");
  const existe = JSON.parse(auths);

  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeee = (panel) => (event, newExpanded) => {
    setExpandedd(newExpanded ? panel : false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getExistUser = async () => {
    const response = await GetRequest("/api/auth/getsingle/data", {
      headers: {
        "content-type": "application/json",
        Authorization: existe.token,
      },
    });
    if (response) {
      setSetting(response.data.data);
    } else {
    }
  };

  const updateMobile = async () => {
    const response = await PutRequest(
      "/api/auth/edit/mobile",
      { mobile },
      {
        headers: {
          "content-type": "application/json",
          Authorization: existe.token,
        },
      }
    );
    if (response.data.success === true) {
      getExistUser();
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const updatePassword = async (value) => {
    const response = await PutRequest("/api/auth/edit/password", value, {
      headers: {
        "content-type": "application/json",
        Authorization: existe.token,
      },
    });
    if (response.data.success === true) {
      getExistUser();
      toast.success(response.data.message);
      reset();
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    getExistUser();
  }, []);

  return (
    <PrivateMainLayOut>
      <ToastContainer />
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
                <div className="list-icon2">
                  <SettingsIcon sx={{ fontSize: "30px" }} />
                  <Typography variant="h6">Manage Setting</Typography>
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
                <div className="list-icon2">
                  <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
                  <Typography variant="h6">Notification</Typography>
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
                <div className="list-icon2">
                  <PrivacyTipIcon sx={{ fontSize: "30px" }} />
                  <Typography variant="h6">Privacy</Typography>
                </div>
                <KeyboardArrowRightIcon sx={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
          <div className="upload-user-profile">
            <div className="myList-contane">
              <Typography variant="h5" sx={{ width: "100%" }}>
                {allList
                  ? "Manage Setting"
                  : savedList
                  ? "Manage Notification"
                  : "Manage Your Privacy"}
              </Typography>
            </div>
            <div className="setting-contaner">
              {allList && (
                <>
                  <Accordion
                    expandIcon={<ExpandMoreIcon />}
                    expande={expande === "panel1"}
                    onChange={handleChangeee("panel1")}
                    sx={{
                      background: "white",
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #c7d5e1",
                      borderBottom: "none",
                    }}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      sx={{ background: "white" }}
                    >
                      <div className="acordian-mobile-contianer">
                        <MobileScreenShareIcon sx={{ fontSize: "30px" }} />
                        <Typography
                          variant="h5"
                          sx={{
                            width: "80%",
                            marginLeft: "14px",
                            marginRight: "14px",
                          }}
                        >
                          Phone Number
                          <Typography>
                            Edit and save to update your new phone number
                          </Typography>
                        </Typography>

                        <ExpandMoreIcon sx={{ fontSize: "40px" }} />
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        borderTop: "1px solid #c7d5e1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <Typography sx={{ color: "#6c757d" }}>
                        Phone Number
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        onChange={(e) => setMobile(e.target.value)}
                        defaultValue={setting.mobile}
                        sx={{ width: "50%", fontSize: "20px" }}
                      />
                      <Button id="setting-button" onClick={updateMobile}>
                        Save
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expandIcon={<ExpandMoreIcon />}
                    expande={expande === "panel1"}
                    onChange={handleChangeee("panel1")}
                    sx={{
                      background: "white",
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #c7d5e1",
                    }}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      sx={{ background: "white" }}
                    >
                      <div className="acordian-mobile-contianer">
                        <EmailIcon sx={{ fontSize: "30px" }} />
                        <Typography
                          variant="h5"
                          sx={{
                            border: "0px solid red",
                            width: "80%",
                            marginLeft: "14px",
                            marginRight: "14px",
                          }}
                        >
                          Email Address
                          <Typography>
                            Edit and save to update your new email id
                          </Typography>
                        </Typography>

                        <ExpandMoreIcon sx={{ fontSize: "40px" }} />
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        borderTop: "1px solid #c7d5e1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      <Typography sx={{ color: "#6c757d" }}>
                        Email Id
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        disabled
                        value={setting.email}
                        variant="outlined"
                        sx={{ width: "50%", fontSize: "20px", color: "black" }}
                      />
                    </AccordionDetails>
                  </Accordion>
                  <form onSubmit={handleSubmit(updatePassword)}>
                    <Accordion
                      expandIcon={<ExpandMoreIcon />}
                      expande={expande === "panel1"}
                      onChange={handleChangeee("panel1")}
                      sx={{
                        background: "white",
                        padding: "10px",
                        borderRadius: "10px",
                        border: "1px solid #c7d5e1",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        sx={{ background: "white" }}
                      >
                        <div className="acordian-mobile-contianer">
                          <LockIcon sx={{ fontSize: "30px" }} />
                          <Typography
                            variant="h5"
                            sx={{
                              border: "0px solid red",
                              width: "80%",
                              marginLeft: "14px",
                              marginRight: "14px",
                            }}
                          >
                            Change Password
                            <Typography>
                              Change your password to update
                            </Typography>
                          </Typography>
                          <ExpandMoreIcon sx={{ fontSize: "40px" }} />
                        </div>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          borderTop: "1px solid #c7d5e1",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Typography sx={{ color: "#6c757d" }}>
                          Current Password
                        </Typography>
                        <FormControl
                          sx={{ width: "50%", fontSize: "20px" }}
                          variant="outlined"
                        >
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            name="currentpassword"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            {...register("currentpassword")}
                            placeholder="Current Password"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <div className="invalid-feedback">
                            {errors.currentpassword?.message}
                          </div>
                        </FormControl>
                        <Typography sx={{ color: "#6c757d" }}>
                          New Password
                        </Typography>
                        <FormControl
                          sx={{ width: "50%", fontSize: "20px" }}
                          variant="outlined"
                        >
                          <OutlinedInput
                            id="outlined-adornment-password"
                            {...register("password")}
                            name="password"
                            placeholder="New Password"
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <div className="invalid-feedback">
                            {errors.password?.message}
                          </div>
                        </FormControl>
                        <Typography sx={{ color: "#6c757d" }}>
                          Confirm New Password
                        </Typography>
                        <FormControl
                          sx={{ width: "50%", fontSize: "20px" }}
                          variant="outlined"
                        >
                          <OutlinedInput
                            id="outlined-adornment-password"
                            name="confirmPassword"
                            placeholder="Confirm New Password"
                            {...register("confirmPassword")}
                            className={`form-control ${
                              errors.confirmPassword ? "is-invalid" : ""
                            }`}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <div className="invalid-feedback">
                            {errors.confirmPassword?.message}
                          </div>
                        </FormControl>
                        <Button id="setting-button" type="submit">
                          Save
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </form>
                </>
              )}
              {savedList && (
                <>
                  {manageNotification.map((p, index) => {
                    return (
                      <Accordion
                        key={index}
                        expandIcon={<ExpandMoreIcon />}
                        expande={expande === "panel1"}
                        onChange={handleChangeee("panel1")}
                        sx={{
                          background: "white",
                          padding: "8px",
                          borderRadius: "10px",
                          border: "1px solid #c7d5e1",
                        }}
                      >
                        <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                          sx={{ background: "white" }}
                        >
                          <div className="acordian-mobile-contianer">
                            <Typography
                              variant="h5"
                              sx={{
                                width: "100%",
                              }}
                            >
                              {p.General}
                              <Typography>{p.GeneralHeading}</Typography>
                            </Typography>

                            <ExpandMoreIcon sx={{ fontSize: "40px" }} />
                          </div>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            borderTop: "1px solid #c7d5e1",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography>Allow notifications</Typography>
                          <AntSwitch
                            defaultChecked
                            inputProps={{ "aria-label": "ant design" }}
                          />
                          <Typography>Allow Email</Typography>
                          <AntSwitch
                            defaultChecked
                            inputProps={{ "aria-label": "ant design" }}
                          />
                          <Typography>Allow Push</Typography>
                          <AntSwitch
                            defaultChecked
                            inputProps={{ "aria-label": "ant design" }}
                          />
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </>
              )}
              {myList && (
                <>
                  {managePrivacy.map((p, index) => {
                    return (
                      <Accordion
                        key={index}
                        expandIcon={<ExpandMoreIcon />}
                        expande={expande === "panel1"}
                        onChange={handleChangeee("panel1")}
                        sx={{
                          background: "white",
                          padding: "8px",
                          borderRadius: "10px",
                          border: "1px solid #c7d5e1",
                        }}
                      >
                        <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                          sx={{ background: "white" }}
                        >
                          <div className="acordian-mobile-contianer">
                            <Typography
                              variant="h5"
                              sx={{
                                width: "100%",
                              }}
                            >
                              {p.General}
                              <Typography>{p.GeneralHeading}</Typography>
                            </Typography>

                            <ExpandMoreIcon sx={{ fontSize: "40px" }} />
                          </div>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            borderTop: "1px solid #c7d5e1",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            onClick={() => {
                              if (p.General === "Profile Photo") {
                                setConnection(true);
                                setMe(false);
                                setEveryOne(false);
                              }
                              if (p.General === "Profile") {
                                setConnection2(true);
                                setMe2(false);
                                setEveryOne2(false);
                              }
                              if (p.General === "Discoverability") {
                                setConnection3(true);
                                setMe3(false);
                                setEveryOne3(false);
                              }
                            }}
                            className={
                              p.General === "Profile Photo"
                                ? connection
                                  ? "setting-actives"
                                  : "graynod-connection-button"
                                : p.General === "Profile"
                                ? connection2
                                  ? "setting-actives"
                                  : "graynod-connection-button"
                                : p.General === "Discoverability" && connection3
                                ? "setting-actives"
                                : "graynod-connection-button"
                            }
                          >
                            Graynod Connection
                          </div>
                          <div
                            onClick={() => {
                              if (p.General === "Profile Photo") {
                                setConnection(false);
                                setMe(false);
                                setEveryOne(true);
                              }
                              if (p.General === "Profile") {
                                setConnection2(false);
                                setMe2(false);
                                setEveryOne2(true);
                              }
                              if (p.General === "Discoverability") {
                                setConnection3(false);
                                setMe3(false);
                                setEveryOne3(true);
                              }
                            }}
                            className={
                              p.General === "Profile Photo"
                                ? everyOne
                                  ? "setting-actives"
                                  : "graynod-connection-button"
                                : p.General === "Profile"
                                ? everyOne2
                                  ? "setting-actives"
                                  : "graynod-connection-button"
                                : p.General === "Discoverability" && everyOne3
                                ? "setting-actives"
                                : "graynod-connection-button"
                            }
                          >
                            Everyone on Graynod
                          </div>
                          <div
                            onClick={() => {
                              if (p.General === "Profile Photo") {
                                setConnection(false);
                                setMe(true);
                                setEveryOne(false);
                              }
                              if (p.General === "Profile") {
                                setConnection2(false);
                                setMe2(true);
                                setEveryOne2(false);
                              }
                              if (p.General === "Discoverability") {
                                setConnection3(false);
                                setMe3(true);
                                setEveryOne3(false);
                              }
                            }}
                            className={
                              p.General === "Profile Photo"
                                ? me
                                  ? "setting-actives"
                                  : "graynod-connection-button"
                                : p.General === "Profile"
                                ? me2
                                  ? "setting-actives"
                                  : "graynod-connection-button"
                                : p.General === "Discoverability" && me3
                                ? "setting-actives"
                                : "graynod-connection-button"
                            }
                          >
                            Only me
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </>
              )}
            </div>
            <div className="login-user-card-details"></div>
          </div>
          <FunnyCard funnyImage={funnyImage} />
        </div>
      </div>
    </PrivateMainLayOut>
  );
};

export default Setting;
