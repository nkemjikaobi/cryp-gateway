import Head from "next/head";
import React from "react";

import { Themes } from "@shared/libs/helpers";

import DashboardMobileNavigation from "../DashboardMobileNavigation/DashboardMobileNavigation";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DesktopFooter from "../DesktopFooter/DesktopFooter";
import MobileFooter from "../MobileFooter/MobileFooter";

interface DashboardLayout {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
  showFooter?: boolean;
  hideFooterOnMobile?: boolean;
  theme?: string;
}

const DashboardLayout = ({ children, title, description, keywords, hideFooterOnMobile, showFooter, theme }: DashboardLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      {/* <section className="smallLaptop:px-0 bg-crypGray-50 relative overflow-x-hidden">
        <main className="h-auto z-50 pb-[5rem] flex">
          <div className="hidden smallLaptop:block">
            <DashboardSideBar />
          </div>
          <div className="w-full">
            <div className="block smallLaptop:hidden">
              <DashboardMobileNavigation />
            </div>
            {children}
          </div>
        </main>
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
      </section> */}
      <section className="smallLaptop:px-0 bg-crypGray-50 relative">
        <>
          {/* <div className="hidden  smallLaptop:block smallLaptop:sticky smallLaptop:w-full smallLaptop:top-0 smallLaptop:z-50 overflow-hidden"> */}
          <div className="block sticky w-full top-0 z-50 overflow-hidden">
            <div className="flex flex-col smallLaptop:flex-row">
              <div className="hidden smallLaptop:block">
                <DashboardSideBar />
              </div>
              <div className="block smallLaptop:hidden">
                <DashboardMobileNavigation />
              </div>
              <div className="w-full">
                <main className="">{children}</main>
              </div>
            </div>
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
          </div>
        </>
      </section>
    </div>
  );
};

DashboardLayout.defaultProps = {
  title: "Cryp",
  description: "A blockchain powered gateway",
  keywords: "crypto, blockchain, cryp, dapp, decentralized",
  hideFooterOnMobile: true,
  showFooter: true,
  theme: Themes.DARK,
};

export default DashboardLayout;
