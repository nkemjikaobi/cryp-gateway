import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import ResetLinkSuccessPage from "@components/modules/ResetLinkSuccessPage/ResetLinkSuccessPage";

const ResetLinkSuccess: NextPage = () => {
  return (
    <AuthLayout title="Reset Link Success">
      <ResetLinkSuccessPage />
    </AuthLayout>
  );
};

export default ResetLinkSuccess;
