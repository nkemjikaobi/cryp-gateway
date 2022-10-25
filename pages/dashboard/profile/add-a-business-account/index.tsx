import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import AddABusinessPage from "@components/modules/AddABusinessPage/AddABusinessPage";

const AddABusiness: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard" },
      { text: "Profile", url: `/dashboard/profile` },
      { text: "Add A Business Account", url: `/dashboard/profile/add-a-business-account` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Add A Business Account">
      <AddABusinessPage />
    </TransactionsLayout>
  );
};

export default AddABusiness;
