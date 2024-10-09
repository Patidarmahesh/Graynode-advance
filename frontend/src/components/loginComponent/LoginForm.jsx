import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginWithUserAndCompany } from "../../Schema/schema";
import { PostRequest } from "../../api-handler/apihandler";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "../signupcomponent/create.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [auth, setAuth] = useAuth();

  // ________|USER AND COMPANY REGISTER FROM|_________
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginWithUserAndCompany),
  });
  const loginUserAndCompany = async (values) => {
    console.log(values);
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
      setAuth({
        ...auth,
        userAndCompay: response.data,
        token: response.data.token,
      });
      localStorage.setItem("authusercompany", JSON.stringify(response.data));
      toast.success(response.data.message);
      setShow(true);
      reset();
      // gotoLogin();
      navigate("/home");
    } else {
      toast.error(response.data.message);
    }
  };
  // ________|USER AND COMPANY REGISTER FROM|_________

  return (
    <div className="create-account-container">
      <div className="create-account-middle-container">
        <div className="create-account-1st-div">
          <div className="logo-back-to-home">
            <div className="goto-home-content">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ background: "black", color: "white", padding: "20px" }}
                >
                  <ArrowBackIcon />
                </Button>
              </NavLink>
              <Typography variant="h6">Back To Home</Typography>
            </div>
            <div className="avatar">
              <img src="http://graynod.dollopinfotech.com/assets/web/images/login-logo.png" />
            </div>
          </div>
          <div className="create-account-card">
            <div className="create-account-text">
              <Typography variant="h3" className="!importent create-text">
                Welcome{" "}
                <Typography
                  variant="h3"
                  sx={{ color: "green", fontWeight: "bold" }}
                >
                  Back,
                </Typography>
              </Typography>
              <div className="image-div">
                <img src="http://graynod.dollopinfotech.com/assets/web/images/login-arrow.png" />
              </div>
            </div>
            <Typography variant="h6">
              Please enter your email or password to sign in and access to your
              account user and company.
            </Typography>
            <div>
              <ToastContainer />
              <div className="user">
                <form
                  className="user-form"
                  onSubmit={handleSubmit(loginUserAndCompany)}
                >
                  <TextField
                    label="Enter Youre Email Id"
                    placeholder="Enter Youre Email Id"
                    multiline
                    name="email"
                    {...register("email")}
                    className="!importent name-textfield"
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                  ></TextField>
                  <FormControl variant="outlined" id="password-textfield">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Enter Youre Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      placeholder="Enter Youre Password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      error={!!errors?.password}
                      helperText={errors?.password?.message}
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
                      label="Enter Youre Password"
                    />
                  </FormControl>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      fontSize: "20px",
                      width: "86%",
                      marginTop: "-20px",
                    }}
                  >
                    Recover Password ?
                  </Typography>
                  <Button id="login-form-buttonnn" type="submit">
                    Sign In
                  </Button>
                  <div className="head-line">
                    <div className="div1"></div>
                    <p>Or</p>
                    <div className="div2"></div>
                  </div>
                  <Button id="login-form-button-22">Sign In With Google</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="create-account-2st-div">
          <img
            alt="error"
            src="http://graynod.dollopinfotech.com/assets/web/images/login-right-img.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
