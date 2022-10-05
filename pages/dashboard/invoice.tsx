import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import InvoicePage from "@components/modules/InvoicePage/InvoicePage";

const Invoice: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard" },
      { text: "Invoice", url: `/dashboard/invoice` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Invoice">
      <InvoicePage />
    </TransactionsLayout>
  );
};

export default Invoice;
