import React from "react";

import ForgotPassword from "@components/organisms/ForgotPasswordPage/ForgotPassword/ForgotPassword";

const ForgotPasswordPage = () => {
  return (
    <div className="text-black ">
      <div className="max-w-[90rem] mx-auto bg-authDoodlesMobile tablet:bg-authDoodles bg-cover bg-no-repeat">
        <ForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
