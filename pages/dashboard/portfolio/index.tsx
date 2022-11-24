import type { NextPage } from "next";
import React from "react";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import PorfolioPage from "@components/modules/PorfolioPage/PortfolioPage";

import withAuth from "@hoc/withAuth";

const Withdraw: NextPage = () => {
  const getBreadCrumbs = () => {
    return [
      { text: "Create NFT", url: "/dashboard/nft-storefront" },
      { text: "Porfolio", url: `/dashboard/porfolio` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Porfolio">
      <PorfolioPage />
    </TransactionsLayout>
  );
};

export default withAuth(Withdraw);
