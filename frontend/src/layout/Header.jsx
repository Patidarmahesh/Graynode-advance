import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

const pages = [
  {
    pageName: "Home",
    path: "/",
  },
  {
    pageName: "Business",
    path: "/business",
  },
  {
    pageName: "People",
    path: "/people",
  },
  {
    pageName: "News",
    path: "/news",
  },
  {
    pageName: "Jobs",
    path: "/jobs",
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#001a16"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <NavLink to={page.path} style={{ textDecoration: "none",color:"black"}}>
                    <Typography textAlign="center">{page.pageName}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <img alt="error" src="http://graynod.dollopinfotech.com/assets/graynod_logo.svg" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                width: "100%",
                border: "0px solid red",
                justifyContent: "space-between",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border:"0px solid red",
              }}
            >
              <img alt="error" style={{width:"200px"}} src="http://graynod.dollopinfotech.com/assets/graynod_logo.svg" />
            </div>
            <div
              style={{
                display: "flex",
                border: "0px solid gold",
                gap:"10px"
              }}
            >
              {pages.map((page, index) => (
                <NavLink to={page.path} style={{ textDecoration: "none" }}>
                  <Button
                    key={index}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block",fontSize:"20px",textTransform:"capitalize",width:"130px"}}
                  >
                    {page.pageName}
                  </Button>
                </NavLink>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                border: "0px solid gold",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                sx={{
                  borderRadius: "30px",
                  padding: "8px",
                  width: "144px",
                  background: "rgba(0, 218, 176, 0.5)",
                  color: "white",
                  textTransform:"capitalize",
                  fontSize:"20px"
                }}
              >
                Join Now
              </Button>
              </NavLink>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                sx={{
                  borderRadius: "30px",
                  padding: "8px",
                  width: "144px",
                  textTransform:"capitalize",
                  background: "rgba(0, 218, 176, 0.5)",
                  color: "white",
                  fontSize:"20px"
                }}
              >
                Sign In
              </Button>
              </NavLink>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
