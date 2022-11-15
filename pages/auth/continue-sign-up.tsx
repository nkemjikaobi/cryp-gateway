import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import ContinueSignUpPage from "@components/modules/ContinueSignUpPage/ContinueSignUpPageContinueSignUpPage";

const SignUp: NextPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <ContinueSignUpPage />
    </AuthLayout>
  );
};

export default SignUp;
