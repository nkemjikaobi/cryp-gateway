import React from "react";

import RecentTransactions from "../RecentTransactions/RecentTransactions";
import WalletGrowth from "../WalletGrowth/WalletGrowth";

const CrypTokensInstance = () => {
  return (
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
  );
};

export default CrypTokensInstance;
