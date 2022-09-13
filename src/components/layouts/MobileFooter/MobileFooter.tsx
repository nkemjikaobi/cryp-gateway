import React, { useState } from "react";

import Icon from "@components/atoms/Icons";
import { FooterData } from "@components/componentData/Footer/FooterData";
import MobileFooterOptions from "@components/FooterOptions.tsx/MobileFooterOptions";

import { Themes } from "@shared/libs/helpers";

interface MobileFooterProps {
  theme?: string;
}
const MobileFooter = ({ theme }: MobileFooterProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      className={`smallLaptop:hidden flex flex-col ${
        theme === Themes.DARK ? "text-white" : "text-black"
      } opacity-70 justify-between px-3   laptop:px-40 laptop:py-5 drop-shadow-md tabet:h-80`}
    >
      <div className="divide-y-[0.1px] divide-gray-100/[.2]">
        {FooterData.map((data) => (
          <div className="w-full mb-12 smallLaptop:mt-7 " key={data.identifier}>
            <MobileFooterOptions
              activeIndex={activeIndex}
              identifier={data.identifier}
              logo={data.logo}
              options={data.options}
              setActiveIndex={setActiveIndex}
              theme={theme}
              title={data.title}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center mb-8 smallLaptop:-mt-8">
        <Icon className="mr-4 cursor-pointer" name={`${theme === Themes.DARK ? "copywright" : "copywrightLight"}`} />
        <h5 className="">Cryp</h5>
      </div>
    </div>
  );
};

export default MobileFooter;

MobileFooter.defaultProps = {
  theme: Themes.DARK,
};
