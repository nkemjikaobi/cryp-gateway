import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import ProfilePage from "@components/modules/ProfilePage/ProfilePage";

const Invoice: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard" },
      { text: "Profile", url: `/dashboard/profile` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Profile">
      <ProfilePage />
    </TransactionsLayout>
  );
};

export default Invoice;
