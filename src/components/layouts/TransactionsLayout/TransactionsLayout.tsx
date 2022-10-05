import Head from "next/head";
import React from "react";

import { BreadCrumbProps } from "@components/CustomBreadCrumb/BreadCrumbProps";
import CustomBreadCrumb from "@components/CustomBreadCrumb/CustomBreadCrumb";

import { Themes } from "@shared/libs/helpers";

interface TransactionsLayout {
  children: any;
  title?: string;
  description?: string;
  keywords?: string;
  showBreadCrumbs?: boolean;
  breadcrumbs?: Array<BreadCrumbProps>;
}

const TransactionsLayout = ({ children, title, description, keywords, showBreadCrumbs, breadcrumbs }: TransactionsLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="relative ">
        {breadcrumbs && showBreadCrumbs && (
          <div className="pt-6 max-w-[90rem] mx-auto">
            <CustomBreadCrumb breadCrumbs={breadcrumbs} />
          </div>
        )}
        <main className="h-auto max-w-[90rem] mx-auto ">{children}</main>
      </section>
    </div>
  );
};

TransactionsLayout.defaultProps = {
  title: "Cryp",
  description: "A blockchain powered gateway",
  keywords: "crypto, blockchain, cryp, dapp, decentralized",
  hideFooterOnMobile: true,
  showFooter: true,
  theme: Themes.DARK,
  breadcrumbs: [],
  showBreadCrumbs: true,
};

export default TransactionsLayout;
