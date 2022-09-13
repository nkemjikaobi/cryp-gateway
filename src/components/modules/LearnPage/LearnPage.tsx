import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import Sessions from "@components/organisms/LearnPage/Sessions/Sessions";

import { Themes } from "@shared/libs/helpers";

const LearnPage = () => {
  return (
    <div className=" max-w-[90rem] mx-auto">
      <div className="px-[2.813rem] bigLaptop:pl-[19.75rem] pt-[7.688rem] pb-[4.25rem] bigLaptop:pb-[11.75rem]">
        <Sessions />
      </div>
      <MobileFooter theme={Themes.LIGHT} />
    </div>
  );
};

export default LearnPage;
