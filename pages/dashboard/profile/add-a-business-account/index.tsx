import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import AddABusinessPage from "@components/modules/AddABusinessPage/AddABusinessPage";

import withAuth from "@hoc/withAuth";

const AddABusiness: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard/payments" },
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

export default withAuth(AddABusiness);
