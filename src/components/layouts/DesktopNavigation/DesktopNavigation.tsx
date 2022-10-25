import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { DesktopNav } from "@components/componentData/Navigation/DesktopNav";

import { Themes } from "@shared/libs/helpers";

interface DesktopNavigationProps {
  theme?: string;
}
const DesktopNavigation = ({ theme }: DesktopNavigationProps) => {
  const [navBar, setNavBar] = useState<boolean>(false);
  const router = useRouter();

  const changeBackGround = () => {
    if (window.scrollY > 80) {
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
    <div
      className={` w-full scroll-bg ${navBar && theme === Themes.DARK ? "bg-black" : navBar && theme === Themes.LIGHT && "bg-white"} ${
        theme === Themes.DARK ? "bg-dark" : "bg-white"
      }`}
    >
      <div className="max-w-[90rem] py-[1.5rem] pl-[3.125rem] pr-[5.375rem]  mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between bigLaptop:w-[45%]">
          <CustomLink destination="/">
            <Icon className="w-[5.125rem] h-[2.75rem]" name="logo" />
          </CustomLink>
          <ul className={`flex items-center justify-between ml-[2.125rem] ${theme === Themes.DARK ? "text-white" : "text-black"}`}>
            {DesktopNav.map((data) => (
              <li className="mx-8 flex items-center " key={data.id}>
                <CustomLink customClass="capitalize text-14 smallLaptop:text-16 bigLaptop:text-18 font-medium" destination={data.route}>
                  {data.name}
                </CustomLink>
                {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between" onClick={() => router.push("/auth/sign-in")}>
          <p className=" cursor-pointer uppercase text-14 smallLaptop:text-16 bigLaptop:text-18 font-bold text-crypYellow-200 hover:text-crypYellow-300">sign in</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;

DesktopNavigation.defaultProps = {
  theme: Themes.DARK,
};
