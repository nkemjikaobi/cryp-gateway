import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import WithdrawPage from "@components/modules/WithdrawPage/WithdrawPage";

import withAuth from "@hoc/withAuth";

const Withdraw: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard/payments" },
      { text: "Withdraw", url: `/dashboard/withdraw` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Withdraw">
      <WithdrawPage />
    </TransactionsLayout>
  );
};

export default withAuth(Withdraw);
