import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./allmodel.css";
import { deepPurple } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const style = {
  position: "absolute",
  top: "43%",
  left: "84%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 2,
};

const logoutModelIcon = [
  {
    pageName: "Bookmarks",
    icon: <BookmarkBorderIcon />,
    path: "/bookmark",
    active: "gold",
  },
  {
    pageName: "Settings",
    icon: <SettingsIcon />,
    path: "/setting",
  },
  {
    pageName: "FAQ",
    icon: <LiveHelpIcon />,
    path: "/faq",
  },
  {
    pageName: "Log Out",
    icon: <LogoutIcon />,
  },
];

const LogoutModel = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logoutUser = () => {
    setAuth({
      ...auth,
      userAndCompay:'',
      token: "",
    });
    localStorage.removeItem("authusercompany");
    console.log("hellow");
    handleClose();
    navigate("/login");
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
            <div className="logout-model">
              <div className="avatar-content">
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    height: "60px",
                    width: "60px",
                  }}
                >
                  MP
                </Avatar>
                <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                  Mahesh
                </Typography>
              </div>
              <NavLink
                to="/viewprofile"
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" id="view-profile">
                  View Profile
                </Button>
              </NavLink>
            </div>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Account
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, gap: 2, display: "flex", flexDirection: "column" }}
            >
              {logoutModelIcon?.map((values, index) => {
                return (
                  <NavLink to={values.path} style={{ textDecoration: "none" }}>
                    <Typography
                      key={index}
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        cursor: "pointer",
                        color: "black",
                      }}
                      onClick={() =>
                        values.pageName == "Log Out" ? logoutUser() : ""
                      }
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          color: "rgba(0, 218, 176, 0.5)",
                        }}
                      >
                        {values.icon}
                      </Typography>
                      {values.pageName}
                    </Typography>
                  </NavLink>
                );
              })}
            </Typography>
            <div className="footer-model">
              <Typography>© 2022 Graynod: All rights reserved</Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default LogoutModel;
