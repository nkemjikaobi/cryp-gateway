import React from "react";

import MobileFooter from "@components/layouts/MobileFooter/MobileFooter";
import RelatedRead from "@components/organisms/TokenomicsPage/RelatedRead/RelatedRead";
import TokenomicsImg from "@components/organisms/TokenomicsPage/TokenomicsImg/TokenomicsImg";
import TokenomicsV1 from "@components/organisms/TokenomicsPage/TokenomicsV1/TokenomicsV1";

import { Themes } from "@shared/libs/helpers";

const TokenomicsPage = () => {
  return (
    <div className="max-w-[90rem] mx-auto bg-white television:flex television:flex-col television:justify-center television:items-center">
      <TokenomicsImg />
      <div className="mx-auto w-full">
        <TokenomicsV1 />
        <hr className="border-1 border-[#114443] w-[274px] mx-auto tablet:w-[1224px] mb-12 tablet:mt-4" />
        <RelatedRead />
      </div>
      <MobileFooter theme={Themes.LIGHT} />
    </div>
  );
};

export default TokenomicsPage;
