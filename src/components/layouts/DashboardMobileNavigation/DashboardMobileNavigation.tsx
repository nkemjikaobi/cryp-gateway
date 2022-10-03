import React, { useEffect, useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import useClickOutside from "@hooks/useClickOutside";

import { Themes } from "@shared/libs/helpers";

interface DashboardMobileNavigationProps {
  theme?: string;
}

const DashboardMobileNavigation = ({ theme }: DashboardMobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const node = useClickOutside(() => {
    setIsOpen(false);
  });

  const [, setNavBar] = useState<boolean>(false);

  const changeBackGround = () => {
    if (window.scrollY > 5) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", changeBackGround);
    }
  });

  return (
    <>
      <div className={`flex justify-between py-4 px-[1.25rem] tablet:px-14 items-center bg-white `}>
        <CustomLink customClass="cursor-pointer mt-4" destination="/">
          <Icon className="w-[4.125rem] h-[1.75rem]" name="logo" />
        </CustomLink>
        <div className="flex items-center space-x-[2.375rem]">
          <Icon name="messages" />
          <Icon name="bell" />
          {isOpen ? (
            <Icon className="cursor-pointer" name="cancel2" onClick={() => setIsOpen(false)} />
          ) : (
            <Icon className="cursor-pointer" name="hamburgerBlack" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      <ul className={` pt-8 relative tablet:px-12 pb-5 bg-glass-600 ${isOpen ? "openNav" : "closeNav"}`} ref={node}>
        {/* <div className="bg-black absolute top-0 left-0 backdrop-blur-[3.125rem] h-full w-full" /> */}
        {MobileDashboardSideBarData.map((data) => (
          <li className="mx-2 mb-8 flex items-center text-white opacity-95" key={data.id}>
            <Icon className="mr-2" name={data.icon} />
            <CustomLink customClass="capitalize text-16 font-semibold" destination={data.route}>
              {data.name}
            </CustomLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DashboardMobileNavigation;

DashboardMobileNavigation.defaultProps = {
  theme: Themes.DARK,
};

const MobileDashboardSideBarData = [
  {
    id: 2,
    name: "nft storefront",
    icon: "chestLight",
    route: "/dashboard/nft-storefront",
  },
  {
    id: 3,
    name: "crypto market",
    icon: "activityLight",
    route: "/dashboard/crypto-market",
  },
  {
    id: 4,
    name: "profile",
    icon: "profile",
    route: "/dashboard/profile",
  },
];
