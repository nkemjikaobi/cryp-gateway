import React from "react";

import Invoice from "@components/organisms/DashboardPage/Invoice/Invoice";

const InvoicePage = () => {
  return (
    <>
      <hr className="hidden smallLaptop:block my-2 television:hidden" />
      <Invoice />
    </>
  );
};

export default InvoicePage;
