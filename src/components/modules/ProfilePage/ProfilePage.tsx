import React from "react";

import Profile from "@components/organisms/DashboardPage/Profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <hr className="hidden smallLaptop:block my-2 television:hidden" />
      <Profile />
    </>
  );
};

export default ProfilePage;
