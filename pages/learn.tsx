import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import LearnPage from "@components/modules/LearnPage/LearnPage";

import { Themes } from "@shared/libs/helpers";

const Learn: NextPage = () => {
  return (
    <BasePageLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Learn Page">
      <LearnPage />
    </BasePageLayout>
  );
};

export default Learn;
