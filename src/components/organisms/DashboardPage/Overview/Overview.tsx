import React from "react";

import Icon from "@components/atoms/Icons";

import ProfileAndNotifications from "../ProfileAndNotifications/ProfileAndNotifications";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import WalletBalance from "../WalletBalance/WalletBalance";
import WalletDoughnutCharts from "../WalletDoughnutCharts/WalletDoughnutCharts";
import WalletGrowth from "../WalletGrowth/WalletGrowth";

const Overview = () => {
  return (
    <div className="smallLaptop:bg-white ml-[0.625rem] mr-4 smallLaptop:w-[70.688rem] television:w-full smallLaptop:h-[33.313rem] relative rounded-br-[2.5rem] rounded-bl-[2.5rem]">
      <ProfileAndNotifications />
      <div className="smallLaptop:flex smallLaptop:items-center smallLaptop:justify-between smallLaptop:pt-[9.188rem] smallLaptop:px-[3.25rem]">
        <WalletBalance />
        <Icon className="hidden smallLaptop:block" name="divider" />
        <WalletDoughnutCharts />
      </div>
      <div className="pt-[2rem] smallLaptop:pt-[4.188rem]">
        <h5 className="text-18 font-bold text-crypGreen-800 mb-2 pl-4 smallLaptop:pl-0">Growth</h5>
        <div className="hidden smallLaptop:block">
          <div className="flex flex-col smallLaptop:flex-row smallLaptop:items-center smallLaptop:justify-between television:justify-start">
            <WalletGrowth />
            <RecentTransactions />
          </div>
        </div>
        <div className="block smallLaptop:hidden">
          <div className="flex flex-col smallLaptop:flex-row smallLaptop:items-center smallLaptop:justify-between">
            <RecentTransactions />
            {/* <WalletGrowth /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
