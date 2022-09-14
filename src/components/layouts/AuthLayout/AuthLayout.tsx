import Head from "next/head";
import React, { useEffect, useState } from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

interface AuthLayout {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
}

const AuthLayout = ({ children, title, description, keywords }: AuthLayout) => {
  const [navBar, setNavBar] = useState<boolean>(false);

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
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="smallLaptop:px-0 relative overflow-x-hidden">
        <>
          <div className="hidden smallLaptop:block smallLaptop:w-full smallLaptop:fixed smallLaptop:top-0 smallLaptop:z-50">
            <div className={`w-full scroll-bg ${navBar ? "bg-white" : ""}`}>
              <div className="max-w-[90rem] py-[1.5rem] pl-[3.125rem] pr-[5.375rem]  mx-auto flex justify-between items-center">
                <div className="flex items-center justify-between bigLaptop:w-[45%]">
                  <CustomLink destination="/">
                    <Icon className="w-[5.125rem] h-[2.75rem]" name="logo" />
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>
          <div className="block w-full top-0 fixed z-50 smallLaptop:hidden">
            <div>
              <div className={`flex justify-between py-4 px-[1.25rem] tablet:px-14 items-center ${navBar ? "bg-white" : ""}`}>
                <CustomLink customClass="cursor-pointer mt-4" destination="/">
                  <Icon className="w-[4.125rem] h-[1.75rem]" name="logo" />
                </CustomLink>
              </div>
            </div>
          </div>
        </>
        <main className="h-auto z-50">{children}</main>
      </section>
    </div>
  );
};

AuthLayout.defaultProps = {
  title: "Cryp",
  description: "A blockchain powered gateway",
  keywords: "crypto, blockchain, cryp, dapp, decentralized",
};

export default AuthLayout;
