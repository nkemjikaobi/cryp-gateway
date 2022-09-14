import React from "react";

import Login from "@components/organisms/SignInPage/Login/Login";

const SignInPage = () => {
  return (
    <div className="text-black ">
      <div className="max-w-[90rem] mx-auto bg-authDoodlesMobile tablet:bg-authDoodles bg-cover bg-no-repeat">
        <Login />
      </div>
    </div>
  );
};

export default SignInPage;
