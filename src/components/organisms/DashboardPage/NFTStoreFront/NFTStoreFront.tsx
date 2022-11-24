import React from "react";
import { ImSpinner9 } from "react-icons/im";

import CustomTabs from "@components/atoms/CustomTabs/CustomTabs";
import CreateNFT from "@components/organisms/NFTPage/CreateNFT/CreateNFT";

import ProfileAndNotifications from "../ProfileAndNotifications/ProfileAndNotifications";

const NFTStoreFront = () => {
  const getTabNames = () => {
    return [
      { name: "create nft", hasRedirect: false },
      { name: "portfolio", hasRedirect: true, route: "/dashboard/portfolio" },
    ];
  };

  const tabComponents = [{ element: () => <CreateNFT /> }, { element: () => <ImSpinner9 className="animate-spin" /> }];
  return (
    <div className="ml-[0.625rem] mr-4 smallLaptop:w-[70.688rem] television:w-full smallLaptop:h-[33.313rem] relative rounded-br-[2.5rem] rounded-bl-[2.5rem]">
      <ProfileAndNotifications />
      <div className="smallLaptop:pt-[89px] mb-[272px]">
        <CustomTabs
          tabComponents={tabComponents}
          tabNames={getTabNames()}
          tabsClass="!w-full"
          tabsListClass="mt-8 smallLaptop:mt-0 smallLaptop:ml-[161px] smallLaptop:mr-[281px]"
        />
      </div>
    </div>
  );
};

export default NFTStoreFront;
