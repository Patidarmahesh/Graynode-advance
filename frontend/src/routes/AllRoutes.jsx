import React from "react";
import { Route, Routes } from "react-router-dom";
import Business from "../pages/Business";
import People from "../pages/People";
import News from "../pages/News";
import Jobs from "../pages/Jobs";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/privatePage/Home";
import Messages from "../pages/privatePage/Messages";
import Job2 from "../pages/privatePage/Job";
import Business2 from "../pages/privatePage/Business";
import News2 from "../pages/privatePage/News";
import Notification from "../pages/privatePage/Notification";
import BookMark from "../pages/privatePage/BookMark";
import Setting from "../pages/privatePage/Setting";
import FAQ from "../pages/privatePage/FAQ";
import { useAuth } from "../Context/AuthContext";
import ViewProfile from "../pages/privatePage/ViewProfile";
import UserProfileView from "../pages/privatePage/UserProfileView";
import Search from "../pages/privatePage/Search";

const AllRoutes = () => {
  const [auth] = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/business" element={<Business />}/>
      <Route path="/people" element={<People />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/jobs" element={<Jobs />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      {/* ________|PRIVATE PAGE|_________ */}
        <Route path="/home" element={<Home />}/>
        <Route path="/viewprofile" element={<ViewProfile />}/>
        <Route path="/profile/:name" element={<UserProfileView/>}/>
        <Route path="/search/:name" element={<Search/>}/>
        <Route path="/business2" element={<Business2 />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/Job2" element={<Job2 />}/>
        <Route path="/news2" element={<News2 />}/>
        <Route path="/notification" element={<Notification />}/>
        <Route path="/bookmark" element={<BookMark />}/>
        <Route path="/setting" element={<Setting />}/>
        <Route path="/faq" element={<FAQ />}/>
      {/* ________|PRIVATE PAGE|_________ */}
    </Routes>
  );
};

export default AllRoutes;
