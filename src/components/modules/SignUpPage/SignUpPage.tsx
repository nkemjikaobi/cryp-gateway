import React from "react";

import Register from "@components/organisms/SignUpPage/Register/Register";

const SignUpPage = () => {
  return (
    <div className="text-black ">
      <div className="max-w-[90rem] mx-auto bg-authDoodlesMobile tablet:bg-authDoodles bg-cover bg-no-repeat">
        <Register />
      </div>
    </div>
  );
};

export default SignUpPage;
