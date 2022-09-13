import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import AcceptPayments from "@components/organisms/LandingPage/AcceptPayments/AcceptPayments";
import Building from "@components/organisms/LandingPage/Building/Building";

const HomePage = () => {
  return (
    <div className="bg-[#F6F6F6] text-black">
      <div className="max-w-[90rem] mx-auto">
        <Building />
        <AcceptPayments />
      </div>
      <MobileFooter />
    </div>
  );
};

export default HomePage;
