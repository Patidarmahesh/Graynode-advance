import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./create.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { PostRequest } from "../../api-handler/apihandler";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanySchema, UserSchema } from "../../Schema/schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom';

const UserAndcompany = ({ authForm, setNext }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [count, setCount] = useState(5);
  const [show,setShow] = useState(false);
  const navigate = useNavigate();
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const gotoLogin = () => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/");
    if (count===0) {
      return () => clearInterval(interval); 
    }
  };

  // ________|USER AND COMPANY REGISTER FROM|_________
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authForm === "user" ? UserSchema : CompanySchema),
  });
  const createUserAndCompany = async (values) => {
    console.log(values);
    const response = await PostRequest(
      authForm === "user"
        ? "/api/auth/user/register"
        : "/api/auth/company/register",
      values,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log("...........", response);

    if (response.data.status===200) {
      console.log(response.data.message);
      toast.success(response.data.message);
      setShow(true)
      reset();
      // gotoLogin();
      navigate("/login");
    } else {
      toast.error(response.data.message);
    }
  };
  // ________|USER AND COMPANY REGISTER FROM|_________

  return (
    <div>
      <ToastContainer />
      {authForm === "user" ? (
        <div className="user">
          <form
            className="user-form"
            onSubmit={handleSubmit(createUserAndCompany)}
          >
            <TextField
              label="Enter Youre Full Name"
              placeholder="Enter Youre Full Name"
              multiline
              name="name"
              {...register("name")}
              error={!!errors?.name}
              sx={{ width: "85%" }}
              helperText={errors?.name?.message}
            ></TextField>
            <TextField
              label="Enter Youre Email Id"
              placeholder="Enter Youre Email Id"
              multiline
              name="email"
              {...register("email")}
              sx={{ width: "85%" }}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            ></TextField>
            <TextField
              label="Enter Youre Mobile Number"
              placeholder="Enter Youre Mobile Number"
              multiline
              name="mobile"
              {...register("mobile")}
              sx={{ width: "85%" }}
              error={!!errors?.mobile}
              helperText={errors?.mobile?.message}
            ></TextField>
            <FormControl variant="outlined" sx={{ width: "85%" }}>
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

            <div className="button-container">
              <Button
                variant="contained"
                id="prev-button"
                onClick={() => setNext(true)}
              >
                <ArrowBackIcon />
                Prev
              </Button>
              <Button variant="contained" id="next-button" type="submit">
                Create Now
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="company">
          <form
            className="company-form"
            onSubmit={handleSubmit(createUserAndCompany)}
          >
            <div className="select-container">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Company Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label=" Company Type"
                  name="companyType"
                  {...register("companyType")}
                  error={!!errors?.companyType}
                  helperText={errors?.companyType?.message}
                >
                  <MenuItem value={"Private"}>Private</MenuItem>
                  <MenuItem value={"Public"}>Public</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Industery
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Industery"
                  name="industry"
                  {...register("industry")}
                  error={!!errors?.industry}
                  helperText={errors?.industry?.message}
                >
                  {industery.map((values) => {
                    return <MenuItem value={values}>{values}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
            <TextField
              label="Enter Youre Company Name"
              placeholder="Enter Company Full Name"
              multiline
              sx={{ width: "85%" }}
              name="name"
              {...register("name")}
              error={!!errors?.name}
              helperText={errors?.name?.message}
            ></TextField>
            <TextField
              label="Enter Youre Email Id"
              placeholder="Enter Youre Email Id"
              multiline
              sx={{ width: "85%" }}
              name="email"
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            ></TextField>
            <TextField
              label="Enter Youre Mobile Number"
              placeholder="Enter Youre Mobile Number"
              multiline
              sx={{ width: "85%" }}
              name="mobile"
              {...register("mobile")}
              error={!!errors?.mobile}
              helperText={errors?.mobile?.message}
            ></TextField>
            <TextField
              label="Enter Youre Address"
              placeholder="Enter Youre Address"
              multiline
              sx={{ width: "85%" }}
              name="address"
              {...register("address")}
              error={!!errors?.address}
              helperText={errors?.address?.message}
            ></TextField>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              sx={{ width: "85%" }}
              multiline
              rows={2}
            />
            <TextField
              label="Enter Youre Website"
              placeholder="Enter Youre Website"
              multiline
              sx={{ width: "85%" }}
            ></TextField>
            <FormControl variant="outlined" sx={{ width: "85%" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Enter Youre Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder="Enter Youre Password"
                type={showPassword ? "text" : "password"}
                name="password"
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
            <div className="button-container">
              <Button
                variant="contained"
                id="prev-button"
                onClick={() => setNext(true)}
              >
                <ArrowBackIcon />
                Prev
              </Button>
              <Button variant="contained" id="next-button" type="submit">
                Create Now
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserAndcompany;
