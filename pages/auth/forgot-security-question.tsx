import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import ForgotSecurityQuestionPage from "@components/modules/ForgotSecurityQuestionPage/ForgotSecurityQuestionPage";

const ForgotSecurityQuestion: NextPage = () => {
  return (
    <AuthLayout title="Forgot Security Question">
      <ForgotSecurityQuestionPage />
    </AuthLayout>
  );
};

export default ForgotSecurityQuestion;
