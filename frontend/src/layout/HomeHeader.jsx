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
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AddHomeIcon from "@mui/icons-material/AddHome";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import LogoutModel from "../components/models/LogoutModel";
import { useSearch } from "../Context/Search";
import { GetRequest } from "../api-handler/apihandler";

const pages = [
  {
    pageName: "Home",
    icon: <AddHomeIcon />,
    active: "gold",
    path: "/home",
  },
  {
    pageName: "Business",
    icon: <StorefrontIcon />,
    path: "/business2",
  },
  {
    pageName: "Messages",
    icon: <MessageIcon />,
    path: "/messages",
  },
  {
    pageName: "Job",
    icon: <WorkIcon />,
    path: "/job2",
  },
  {
    pageName: "News",
    icon: <ArticleIcon />,
    path: "/news2",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const HomeHeader = () => {
  const [home, setHome] = React.useState(true);
  const [businnes, setBusinnes] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [job, setJob] = React.useState(false);
  const [news, setNews] = React.useState(false);
  // model state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // model state
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const [search, setSearch] = useSearch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event) {
      const response = await GetRequest(
        `/api/auth/search/${search.keyword}`
      );
      setSearch({ ...search, results: response.data.data.allSearchData});
      navigate("/search/mahesh");
    }
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: "#001a16", padding: "14px", zIndex: "1 " }}
      >
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
                    <NavLink
                      to={page.path}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">
                        {page.pageName}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <NavLink sx={{ textDecoration: "none" }} to="/dashbored/home">
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img
                  alt="error"
                  src="http://graynod.dollopinfotech.com/assets/graynod_logo.svg"
                />
              </Typography>
            </NavLink>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  width: "100%",
                  border: "0px solid red",
                  gap: "50px",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "0px solid gold",
                }}
              >
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <img
                    alt="error"
                    style={{ width: "200px" }}
                    src="http://graynod.dollopinfotech.com/assets/graynod_logo.svg"
                  />
                </NavLink>
              </div>
              <form
                style={{
                  border: "0px solid gold",
                  width: "22%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onSubmit={handleSubmit}
              >
                <Search
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "white",
                    color: "black",
                    marginLeft: "24px",
                    width: "100%",
                    height: "52px",
                  }}
                  value={search.keyword}
                  onChange={(e) =>
                    setSearch({ ...search, keyword: e.target.value })
                  }
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </form>
              <div
                style={{
                  display: "flex",
                  border: "0px solid gold",
                  gap: "8px",
                }}
              >
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setHome(true);
                      setBusinnes(false);
                      setMessage(false);
                      setJob(false);
                      setNews(false);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      display: "flex",
                      gap: "10px",
                      background: home ? "#d4fff7" : "",
                      color: home ? "#00dab0" : "white",
                      fontSize: "20px",
                      textTransform: "lowercase",
                    }}
                  >
                    <AddHomeIcon />
                    Home
                  </Button>
                </NavLink>
                <NavLink to="/business2" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setHome(false);
                      setBusinnes(true);
                      setMessage(false);
                      setJob(false);
                      setNews(false);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      display: "flex",
                      gap: "10px",
                      background: businnes ? "#d4fff7" : "",
                      color: businnes ? "#00dab0" : "white",
                      fontSize: "20px",
                      textTransform: "lowercase",
                    }}
                  >
                    <StorefrontIcon />
                    Business
                  </Button>
                </NavLink>
                <NavLink to="/messages" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setHome(false);
                      setBusinnes(false);
                      setMessage(true);
                      setJob(false);
                      setNews(false);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      display: "flex",
                      gap: "10px",
                      background: message ? "#d4fff7" : "",
                      color: message ? "#00dab0" : "white",
                      fontSize: "20px",
                      textTransform: "lowercase",
                    }}
                  >
                    <MessageIcon />
                    Messages
                  </Button>
                </NavLink>
                <NavLink to="/job2" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setHome(false);
                      setBusinnes(false);
                      setMessage(false);
                      setJob(true);
                      setNews(false);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      display: "flex",
                      gap: "10px",
                      background: job ? "#d4fff7" : "",
                      color: job ? "#00dab0" : "white",
                      fontSize: "20px",
                      textTransform: "lowercase",
                    }}
                  >
                    <WorkIcon />
                    Job
                  </Button>
                </NavLink>
                <NavLink to="/news2" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={() => {
                      setHome(false);
                      setBusinnes(false);
                      setMessage(false);
                      setJob(false);
                      setNews(true);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      display: "flex",
                      gap: "10px",
                      background: news ? "#d4fff7" : "",
                      color: news ? "#00dab0" : "white",
                      fontSize: "20px",
                      textTransform: "lowercase",
                    }}
                  >
                    <ArticleIcon />
                    News
                  </Button>
                </NavLink>
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
                <NavLink to="/notification" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "30px",
                      padding: "10px",
                      width: "120px",
                      background: "rgba(0, 218, 176, 0.5)",
                      color: "white",
                    }}
                  >
                    <AddAlertIcon />
                  </Button>
                </NavLink>
                <Button
                  onClick={handleOpen}
                  variant="outlined"
                  startIcon={<PersonIcon />}
                  sx={{
                    borderRadius: "30px",
                    padding: "10px",
                    width: "120px",
                    background: "rgba(0, 218, 176, 0.5)",
                    color: "white",
                  }}
                >
                  Log Out
                </Button>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <LogoutModel open={open} setOpen={setOpen} />
    </>
  );
};

export default HomeHeader;
