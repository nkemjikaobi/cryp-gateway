import type { NextPage } from "next";
import React from "react";

import DashboardLayout from "@components/layouts/DashboardLayout/DashboardLayout";
import NFTStoreFrontPage from "@components/modules/NFTStoreFrontPage/NFTStoreFrontPage";

import withAuth from "@hoc/withAuth";

import { Themes } from "@shared/libs/helpers";

const NFTStoreFront: NextPage = () => {
  return (
    <DashboardLayout hideFooterOnMobile={true} showFooter={true} theme={Themes.LIGHT} title="NFT Storefront">
      <NFTStoreFrontPage />
    </DashboardLayout>
  );
};

export default withAuth(NFTStoreFront);
