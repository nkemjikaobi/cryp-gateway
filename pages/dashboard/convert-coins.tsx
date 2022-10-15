import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import TransactionsLayout from "@components/layouts/TransactionsLayout/TransactionsLayout";
import ConvertTokensPage from "@components/modules/ConvertTokensPage/ConvertTokensPage";

import { CPUSD, WALLET_INSTANCE } from "@shared/libs/helpers";

const Withdraw: NextPage = () => {
  const [coin, setCoin] = useState<string | null>("");
  const { walletInstance } = useSelector((state: AppState) => state.global || {});

  useEffect(() => {
    if (window) {
      setCoin(window.localStorage.getItem("coin"));
    }
  }, []);

  const getBreadCrumbs = () => {
    return [
      { text: "Dashboard", url: "/dashboard" },
      { text: `Convert Coins ${coin && `(${walletInstance === WALLET_INSTANCE.OTHER_TOKENS ? `${coin} TO ${CPUSD}` : `${CPUSD} to ${coin}`})`}` },
    ];
  };
  return (
    <TransactionsLayout breadcrumbs={getBreadCrumbs()} title="Convert Tokens">
      <ConvertTokensPage coin={coin} />
    </TransactionsLayout>
  );
};

export default Withdraw;
