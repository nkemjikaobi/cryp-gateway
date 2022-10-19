import React from "react";

import CustomTabs from "@components/atoms/CustomTabs/CustomTabs";
import EnsureYouAreReceiving from "@components/organisms/DashboardPage/EnsureYouAreReceiving/EnsureYouAreReceiving";
import Invoice from "@components/organisms/DashboardPage/Invoice/Invoice";

const InvoicePage = () => {
  const getTabNames = () => {
    return ["prepare an invoice", "send wallet address"];
  };

  const tabComponents = [{ element: () => <Invoice /> }, { element: () => <EnsureYouAreReceiving /> }];

  return (
    <>
      <hr className="hidden smallLaptop:block my-2 television:hidden" />
      <div className="mt-[113px]">
        <CustomTabs tabComponents={tabComponents} tabNames={getTabNames()} />
      </div>
    </>
  );
};

export default InvoicePage;
