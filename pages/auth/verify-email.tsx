import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import VerifyEmailPage from "@components/modules/VerifyEmailPage/VerifyEmailPage";

const VerifyEmail: NextPage = () => {
  return (
    <AuthLayout title="Verify Email">
      <VerifyEmailPage />
    </AuthLayout>
  );
};

export default VerifyEmail;
