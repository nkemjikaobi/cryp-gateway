import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@components/layouts/BasePageLayout/BasePageLayout";
import TokenomicsPage from "@components/modules/TokenomicsPage/TokenomicsPage";

import { Themes } from "@shared/libs/helpers";

const Tokenomics: NextPage = () => {
  return (
    <BasePageLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Tokenomics Page">
      <TokenomicsPage />
    </BasePageLayout>
  );
};

export default Tokenomics;
