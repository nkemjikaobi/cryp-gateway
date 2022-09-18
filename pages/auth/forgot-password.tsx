import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import ForgotPasswordPage from "@components/modules/ForgotPasswordPage/ForgotPasswordPage";

const SignIn: NextPage = () => {
  return (
    <AuthLayout title="Forgot Password">
      <ForgotPasswordPage />
    </AuthLayout>
  );
};

export default SignIn;
