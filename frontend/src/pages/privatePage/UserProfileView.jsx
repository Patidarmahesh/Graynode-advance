import React from "react";
import ProfileViewCard from "../../components/userProfileView/ProfileViewCard";
import PrivateMainLayOut from "../../layout/mainlayout/PrivateMainLayOut";

const UserProfileView = () => {
  return (
    <PrivateMainLayOut>
      <ProfileViewCard />
    </PrivateMainLayOut>
  );
};

export default UserProfileView;
