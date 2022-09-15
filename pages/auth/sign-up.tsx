import type { NextPage } from "next";
import React from "react";

import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";
import SignUpPage from "@components/modules/SignUpPage/SignUpPage";

const Home: NextPage = () => {
  return (
    <AuthLayout title="Sign Up">
      <SignUpPage />
    </AuthLayout>
  );
};

export default Home;
