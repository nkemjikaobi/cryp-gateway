import React from "react";

import CustomTabs from "@components/atoms/CustomTabs/CustomTabs";
import CreateNFT from "@components/organisms/NFTPage/CreateNFT/CreateNFT";
import Portfolio from "@components/organisms/NFTPage/Portfolio/Portfolio";

import ProfileAndNotifications from "../ProfileAndNotifications/ProfileAndNotifications";

const NFTStoreFront = () => {
  const getTabNames = () => {
    return ["create nft", "portfolio"];
  };

  const tabComponents = [{ element: () => <CreateNFT /> }, { element: () => <Portfolio /> }];
  return (
    <div className="ml-[0.625rem] mr-4 smallLaptop:w-[70.688rem] television:w-full smallLaptop:h-[33.313rem] relative rounded-br-[2.5rem] rounded-bl-[2.5rem]">
      <ProfileAndNotifications />
      <div className="smallLaptop:pt-[89px] mb-[272px]">
        <CustomTabs tabComponents={tabComponents} tabNames={getTabNames()} tabsClass="!w-full" tabsListClass="ml-[161px] mr-[281px]" />
      </div>
    </div>
  );
};

export default NFTStoreFront;
