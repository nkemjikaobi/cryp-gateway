import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import SendToCrpAssetsPage from "@components/modules/SendToCrypAssetsPage/SendToCrypAssetsPage";

const Withdraw: NextPage = () => {
  const getBreadCrumbs = () => {
    return [{ text: "Dashboard", url: "/dashboard/payments" }, { text: "Send To Cryp Assets" }];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Send Cryp Assets">
      <SendToCrpAssetsPage />
    </TransactionsLayout>
  );
};

export default Withdraw;
