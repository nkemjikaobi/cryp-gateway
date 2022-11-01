import type { NextPage } from "next";
import React from "react";

import DashboardLayout from "@components/layouts/DashboardLayout/DashboardLayout";
import DashboardPage from "@components/modules/DashboardPage/DashboardPage";

import { Themes } from "@shared/libs/helpers";

const DashBoardPayments: NextPage = () => {
  return (
    <DashboardLayout hideFooterOnMobile={true} theme={Themes.LIGHT} title="Dashboard Home">
      <DashboardPage />
    </DashboardLayout>
  );
};

export default DashBoardPayments;
