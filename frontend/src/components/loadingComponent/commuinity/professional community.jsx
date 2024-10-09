import React from "react";
import "./community.css";
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { PostRequest } from "../../../api-handler/apihandler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginWithUserAndCompany } from "../../../Schema/schema";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../Context/AuthContext";

const avatarImage = [
  {
    image:
      "http://graynod.dollopinfotech.com/assets/web/images/medium-shot.png",
    class: "avatar-1st",
    direction: "down",
  },
  {
    image: "http://graynod.dollopinfotech.com/assets/web/images/6.png",
    class: "avatar-2st",
    direction: "up",
  },
  {
    image: "http://graynod.dollopinfotech.com/assets/web/images/5.png",
    class: "avatar-same--1st",
    direction: "down",
  },
  {
    image: "http://graynod.dollopinfotech.com/assets/web/images/2.png",
    class: "avatar-3st",
    direction: "down",
  },
  {
    image: "http://graynod.dollopinfotech.com/assets/web/images/3.png",
    class: "avatar-4st",
    direction: "up",
  },
  {
    image: "http://graynod.dollopinfotech.com/assets/web/images/4.png",
    class: "avatar-6st",
    direction: "down",
  },
];

const ProfessionalCommunity = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // ________|USER AND COMPANY REGISTER FROM|_________
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginUserAndCompany = async (values) => {
    const response = await PostRequest(
      "/api/auth/user/and/company/login",
      values,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (response.data.status === 200) {
      toast.success(response.data.message);
      setAuth({
        ...auth,
        userAndCompay:response.data,
        token:response.data.token,
      })
      localStorage.setItem("authusercompany", JSON.stringify(response.data));
      reset();
      navigate("/home");
    } else {
      toast.error(response.data.message);
    }
  };
  // ________|USER AND COMPANY REGISTER FROM|_________

  return (
    <div className="professional-container">
      <ToastContainer />
      <div className="professional-middle-content">
        <div className="login-container">
          <Typography variant="h2" id="login-container-heading">
            Welcome to your<Typography variant="h2">professional</Typography>
            community
          </Typography>
          <Typography variant="h5" id="login-small-text">
            Join us your professional community
          </Typography>
          <form
            className="login-form"
            onSubmit={handleSubmit(loginUserAndCompany)}
          >
            <TextField
              label="Enter Youre Email"
              placeholder="Enter Youre Email"
              multiline
              className="!importent name-text"
              sx={{ marginBottom: "14px", fontSize: "20px" }}
              type="email"
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            ></TextField>
            <FormControl variant="outlined" className="!importent name-text">
              <InputLabel
                htmlFor="outlined-adornment-password"
                sx={{ fontSize: "20px" }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Enter Youre Password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                error={!!errors?.email} 
                helperText={errors?.email?.message}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "20px",
                }}
              >
                Recover Password ?
              </Typography>
            </FormControl>
            <Button id="form-button-signin" type="submit">
              Sign In
            </Button>
            <div className="head-line">
              <div className="div1"></div>
              <p>Or</p>
              <div className="div2"></div>
            </div>
            <Button id="form-button-2">Sign In With Google</Button>
          </form>
        </div>
        <div className="professional-avatar">
          <div className="avatar-middle-part">
            {avatarImage.map((values) => {
              return (
                <Fade direction={values.direction}>
                  <div className={values.class}>
                    <img
                      alt="error"
                      src={values.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCommunity;
