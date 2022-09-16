import React, { useEffect, useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";
import { DesktopNav } from "@components/componentData/Navigation/DesktopNav";

import useClickOutside from "@hooks/useClickOutside";

import { Themes } from "@shared/libs/helpers";

interface MobileNavigationProps {
  theme?: string;
}

const MobileNavigation = ({ theme }: MobileNavigationProps) => {
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
        {isOpen ? (
          <Icon className="cursor-pointer" name="cancel" onClick={() => setIsOpen(false)} />
        ) : theme === Themes.DARK ? (
          <Icon className="cursor-pointer" name="hamburger" onClick={() => setIsOpen(true)} />
        ) : (
          <Icon className="cursor-pointer" name="hamburgerBlack" onClick={() => setIsOpen(true)} />
        )}
      </div>
      <ul className={`px-8 pt-8 relative tablet:px-12 pb-5 b-black ${isOpen ? "openNav" : "closeNav"}`} ref={node}>
        <div className="bg-glass-400 absolute top-0 left-0 backdrop-blur-[3.125rem] h-full w-full" />
        {DesktopNav.map((data) => (
          <li className="mx-2 mb-8 flex items-center text-white opacity-95" key={data.id}>
            <CustomLink customClass="capitalize text-16 font-semibold" destination={data.route}>
              {data.name}
            </CustomLink>
            {data.hasOptions && <Icon className="ml-4 cursor-pointer" name="dropDown" />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavigation;

MobileNavigation.defaultProps = {
  theme: Themes.DARK,
};
