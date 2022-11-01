import React from "react";
import { Toaster } from "react-hot-toast";

import ProfileAndNotifications from "../ProfileAndNotifications/ProfileAndNotifications";

const NFTStoreFront = () => {
  return (
    <div className="ml-[0.625rem] mr-4 smallLaptop:w-[70.688rem] television:w-full smallLaptop:h-[33.313rem] relative rounded-br-[2.5rem] rounded-bl-[2.5rem]">
      <Toaster position="top-center" />

      <ProfileAndNotifications />
    </div>
  );
};

export default NFTStoreFront;
