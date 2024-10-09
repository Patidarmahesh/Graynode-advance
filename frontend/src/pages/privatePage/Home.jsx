import React from "react";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";
import HomeProfile from "../../components/homeComponent/HomeProfile";

const Home = () => {
  return (
    <PrivateMainLayOut secure={true}>
      <HomeProfile/>
    </PrivateMainLayOut>
  );
};

export default Home;
