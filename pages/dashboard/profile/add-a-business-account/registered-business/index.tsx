import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import RegisteredBusinessPage from "@components/modules/AddABusinessPage/RegisteredBusinessPage";

const RegsiteredBusiness: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard/payments" },
      { text: "Profile", url: `/dashboard/profile` },
      { text: "Add A Business Account", url: `/dashboard/profile/add-a-business-account` },
      { text: "Registered Business" },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Add A Business Account">
      <RegisteredBusinessPage />
    </TransactionsLayout>
  );
};

export default RegsiteredBusiness;
