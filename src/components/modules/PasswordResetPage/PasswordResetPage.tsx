import React from "react";

import PasswordReset from "@components/organisms/PasswordResetPage/PasswordReset";

const PasswordResetPage = () => {
  return (
    <div className="text-black ">
      <div className="max-w-[90rem] mx-auto bg-authDoodlesMobile tablet:bg-authDoodles bg-cover bg-no-repeat">
        <PasswordReset />
      </div>
    </div>
  );
};

export default PasswordResetPage;
