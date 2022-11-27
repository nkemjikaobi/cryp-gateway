import React from "react";

import CustomTabs from "@components/atoms/CustomTabs/CustomTabs";

import Collections from "../Collections/Collections";
import Gallery from "../Gallery/Gallery";
import PortfolioStoreFront from "../PortfolioStoreFront/PortfolioStoreFront";

const Portfolio = () => {
  const getTabNames = () => {
    return [{ name: "gallery" }, { name: "collections" }, { name: "storefront" }];
  };

  const tabComponents = [{ element: () => <Gallery /> }, { element: () => <Collections /> }, { element: () => <PortfolioStoreFront /> }];

  return (
    <div>
      <div className="pt-8 smallLaptop:pt-[5.438rem] smallLaptop:pl-24 mb-[17rem]">
        <CustomTabs tabComponents={tabComponents} tabNames={getTabNames()} tabsClass="!w-full px-8" tabsListClass="smallLaptop:ml-[161px] smallLaptop:mr-[281px]" />
      </div>
    </div>
  );
};

export default Portfolio;
