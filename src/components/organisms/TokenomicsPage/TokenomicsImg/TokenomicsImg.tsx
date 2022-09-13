import Image from "next/image";
import React from "react";

import TokenomicsImgg from "@images/tokenomics/tokenomics.png";

const TokenomicsImg = () => {
  return (
    <div className="px-[1.25rem] pt-[5.625rem] tablet:pt-[6.25rem] tablet:pb-[3.125rem] tablet:px-[4.375rem] smallLaptop:px-[6.25rem] smallLaptop:pt-[11.25rem]  bigLaptop:px-[11.25rem] bigLaptop:pt-[11.25rem] bigLaptop:pb-[7.188rem]">
      <Image height={507} src={TokenomicsImgg} width={1080} />
    </div>
  );
};

export default TokenomicsImg;
