import React from "react";

import Icon from "@components/atoms/Icons";

const ProfileAndNotifications = () => {
  return (
    <div className="hidden smallLaptop:flex items-center space-x-[2.938rem] top-[1.625rem] absolute right-[3.313rem]">
      <Icon className="cursor-pointer" name="bell" />
      <div className="w-[2.375rem] h-[2.375rem] rounded-full bg-profilePic bg-cover bg-center bg-no-repeat" />
    </div>
  );
};

export default ProfileAndNotifications;
