import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import InvoicePage from "@components/modules/InvoicePage/InvoicePage";

import withAuth from "@hoc/withAuth";

const Invoice: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard/payments" },
      { text: "Invoice", url: `/dashboard/invoice` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Invoice">
      <InvoicePage />
    </TransactionsLayout>
  );
};

export default withAuth(Invoice);
