import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import SignInPage from "@components/modules/SignInPage/SignInPage";

const SignIn: NextPage = () => {
  return (
    <AuthLayout title="Sign In">
      <SignInPage />
    </AuthLayout>
  );
};

export default SignIn;
