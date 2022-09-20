import React from "react";

import Icon from "@components/atoms/Icons";

import WalletBalance from "../WalletBalance/WalletBalance";
import WalletDoughnutCharts from "../WalletDoughnutCharts/WalletDoughnutCharts";

const Overview = () => {
  return (
    <div className="bg-white ml-[0.625rem] mr-4 w-[70.688rem] television:w-full h-[29.313rem] relative rounded-br-[2.5rem] rounded-bl-[2.5rem]">
      <div className="flex items-center space-x-[2.938rem] top-[1.625rem] absolute right-[3.313rem]">
        <Icon className="cursor-pointer" name="bell" />
        <div className="w-[2.375rem] h-[2.375rem] rounded-full bg-profilePic bg-cover bg-center bg-no-repeat" />
      </div>
      <div className="flex items-center justify-between pt-[9.188rem] divide- h-[18.688re] px-[3.25rem]">
        <WalletBalance />
        <Icon name="divider" />
        <WalletDoughnutCharts />
      </div>
    </div>
  );
};

export default Overview;
