import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import { WALLET_INSTANCE } from "@shared/libs/helpers";

import CrypTokensInstance from "../CrypTokensInstance/CrypTokensInstance";
import OtherTokensInstance from "../OtherTokensInstance/OtherTokensInstance";
import ProfileAndNotifications from "../ProfileAndNotifications/ProfileAndNotifications";
import WalletBalance from "../WalletBalance/WalletBalance";
import WalletDoughnutCharts from "../WalletDoughnutCharts/WalletDoughnutCharts";

const Overview = () => {
  const { walletInstance } = useSelector((state: AppState) => state.global || {});

  return (
    <div className="smallLaptop:bg-white ml-[0.625rem] mb-12 mr-4 smallLaptop:w-[70.688rem] television:w-full smallLaptop:h-[33.313rem] relative rounded-br-[2.5rem] rounded-bl-[2.5rem]">
      <ProfileAndNotifications />
      <div className="smallLaptop:flex smallLaptop:items-center smallLaptop:justify-between smallLaptop:pt-[9.188rem] smallLaptop:px-[3.25rem]">
        <WalletBalance />
        <Icon className="hidden smallLaptop:block" name="divider" />
        <WalletDoughnutCharts />
      </div>
      {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? <CrypTokensInstance /> : <OtherTokensInstance />}
    </div>
  );
};

export default Overview;
