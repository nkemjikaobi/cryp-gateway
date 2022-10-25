import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

const DashboardSideBar = () => {
  return (
    <div className="bg-white h-[70.813rem] w-[17.063rem] pt-8 pl-8 mb-[1.313rem]">
      <CustomLink destination="/">
        <Icon className="w-[5.125rem] h-[2.75rem] mb-[3.063rem]" name="logo" />
      </CustomLink>
      <ul className="space-y-[5.5rem] text-14 fotnt-medium">
        {DashboardSideBarData.map((data) => (
          <li className="flex items-center space-x-4 cursor-pointer" key={data.id}>
            <Icon name={data.icon} />
            <h5 className="uppercase">{data.name}</h5>
          </li>
        ))}
        <li className="flex items-center space-x-4 cursor-pointer">
          <Icon name="logout" />
          <h5 className="uppercase text-crypRed-500">sign out</h5>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSideBar;

const DashboardSideBarData = [
  {
    id: 1,
    name: "payments",
    icon: "wallet",
    route: "/dashboard/payments",
  },
  {
    id: 2,
    name: "nft storefront",
    icon: "chest",
    route: "/dashboard/nft-storefront",
  },
  {
    id: 3,
    name: "crypto market",
    icon: "activity",
    route: "/dashboard/crypto-market",
  },
];
