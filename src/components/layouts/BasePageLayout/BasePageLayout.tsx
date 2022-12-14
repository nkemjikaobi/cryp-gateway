import Head from "next/head";
import React from "react";

import DesktopNavigation from "@components/layouts/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "@components/layouts/MobileNavigation/MobileNavigation";

import { Themes } from "@shared/libs/helpers";

import DesktopFooter from "../DesktopFooter/DesktopFooter";
import MobileFooter from "../MobileFooter/MobileFooter";

interface BasePageLayout {
  children: any;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  hideFooterOnMobile?: boolean;
  theme?: string;
}

const BasePageLayout = ({ children, theme, showNavigation, showFooter, title, description, keywords, hideFooterOnMobile }: BasePageLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="smallLaptop:px-0 relative overflow-x-hidden">
        {showNavigation && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:w-full smallLaptop:fixed smallLaptop:top-0 smallLaptop:z-50">
              <DesktopNavigation theme={theme} />
            </div>
            <div className="block w-full top-0 fixed z-50 smallLaptop:hidden">
              <MobileNavigation theme={theme} />
            </div>
          </>
        )}
        <main className="h-auto z-50">{children}</main>
        {showFooter && (
          <>
            <div className="hidden smallLaptop:block smallLaptop:w-full">
              <DesktopFooter theme={theme} />
            </div>
            {!hideFooterOnMobile && (
              <div className="block w-full z-50 smallLaptop:hidden">
                <MobileFooter />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

BasePageLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "Cryp",
  description: "A blockchain powered gateway",
  keywords: "crypto, blockchain, cryp, dapp, decentralized",
  hideFooterOnMobile: true,
  theme: Themes.DARK,
};

export default BasePageLayout;
