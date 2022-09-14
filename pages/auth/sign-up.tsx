import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import HomePage from "@components/modules/HomePage/HomePage";

import { Themes } from "@shared/libs/helpers";

const Home: NextPage = () => {
  return (
    <BasePageLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Cryp Gateway">
      <HomePage />
    </BasePageLayout>
  );
};

export default Home;
