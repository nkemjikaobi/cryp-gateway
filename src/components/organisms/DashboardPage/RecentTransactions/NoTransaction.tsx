import Image from "next/image";
import React from "react";

import NoTransactions from "@images/dashboard/noTransactions.png";

const NoTransaction = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image height={218} src={NoTransactions} width={334} />
      </div>
      <p className="pt-[2.625rem] pb-[6.063rem] px-[5.375rem] text-14 font-medium">No coins rolling in your transactions yet.</p>
    </>
  );
};

export default NoTransaction;
