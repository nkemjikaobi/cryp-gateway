import React from "react";

import VerifyEmail from "@components/organisms/PasswordResetPage/VerifyEmail/VerifyEmail";

const VerifyEmailPage = () => {
  return (
    <div className="text-black ">
      <div className="max-w-[90rem] mx-auto bg-authDoodlesMobile tablet:bg-authDoodles bg-cover bg-no-repeat">
        <VerifyEmail />
      </div>
    </div>
  );
};

export default VerifyEmailPage;
