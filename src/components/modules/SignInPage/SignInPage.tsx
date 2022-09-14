import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import Login from "@components/organisms/SignInPage/Login/Login";

const SignInPage = () => {
  return (
    <div className="text-black ">
      <div className="max-w-[90rem] mx-auto bg-authDoodles bg-cover bg-no-repeat">
        <Login />
      </div>
      <MobileFooter />
    </div>
  );
};

export default SignInPage;
