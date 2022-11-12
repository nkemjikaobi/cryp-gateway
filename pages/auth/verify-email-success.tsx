import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import VerifyEmailPageSucces from "@components/modules/VerifyEmailPageSucces/VerifyEmailPageSucces";

const VerifyEmailSuccess: NextPage = () => {
  return (
    <AuthLayout title="Verify Email Success">
      <VerifyEmailPageSucces />
    </AuthLayout>
  );
};

export default VerifyEmailSuccess;
