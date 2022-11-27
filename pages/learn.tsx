import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import SignInPage from "@components/modules/SignInPage/SignInPage";

const Learn: NextPage = () => {
  return (
    // <BasePageLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Learn Page">
    //   <SignInPage />
    // </BasePageLayout>
    <AuthLayout title="Sign In">
      <SignInPage />
    </AuthLayout>
  );
};

export default Learn;
