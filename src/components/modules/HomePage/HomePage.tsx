import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import AcceptPayments from "@components/organisms/LandingPage/AcceptPayments/AcceptPayments";
import Building from "@components/organisms/LandingPage/Building/Building";
import ConnectAndTrade from "@components/organisms/LandingPage/ConnectAndTrade/ConnectAndTrade";
import GetComfortable from "@components/organisms/LandingPage/GetComfortable/GetComfortable";
import TradeAndAccept from "@components/organisms/LandingPage/TradeAndAccept/TradeAndAccept";

const HomePage = () => {
  return (
    <div className="bg-[#F6F6F6] text-black">
      <div className="max-w-[90rem] mx-auto">
        <Building />
        <AcceptPayments />
        <ConnectAndTrade />
        <TradeAndAccept />
        <GetComfortable />
      </div>
      <MobileFooter />
    </div>
  );
};

export default HomePage;
