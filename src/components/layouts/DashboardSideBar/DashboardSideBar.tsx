import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "src/store/auth";
import { setToInitialState } from "src/store/global";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import { LocalStorageKeys } from "@shared/libs/helpers";

const DashboardSideBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.EXPIRATION_TIME);

    dispatch(setCurrentUser({}));
    dispatch(setToInitialState());

    router.push("/auth/sign-in");
  };

  return (
    <div className="bg-white h-[70.813rem] w-[17.063rem] pt-8 pl-8 mb-[1.313rem]">
      <CustomLink destination="/">
        <Icon className="w-[5.125rem] h-[2.75rem] mb-[3.063rem]" name="logo" />
      </CustomLink>
      <ul className="space-y-[5.5rem] text-14 font-medium">
        {DashboardSideBarData.map((data) => (
          <li className="flex items-center space-x-4 cursor-pointer relative" key={data.id} onClick={() => router.push(data.route)}>
            {router.pathname === data.route && <Icon className="absolute -left-5" name="activeLink" />}
            <Icon name={data.icon} />
            <h5 className="uppercase">{data.name}</h5>
          </li>
        ))}
        <li className="flex items-center space-x-4 cursor-pointer">
          <Icon name="logout" />
          <h5 className="uppercase text-crypRed-500" onClick={() => logout()}>
            sign out
          </h5>
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
