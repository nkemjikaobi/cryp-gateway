import React from "react";

import CustomInput from "@components/atoms/CustomInput/CustomInput";

interface TransactionAmountProps {
  isBalanceVisible?: boolean;
}

const TransactionAmount: React.FC<TransactionAmountProps> = ({ isBalanceVisible }) => {
  return (
    <>
      {isBalanceVisible && <h4 className="font-semibold text-crypGreen-800 text-center py-[2.188rem]"> (CRYP Balance cUSD 400,000.00)</h4>}
      <CustomInput
        className={`border border-t-0 border-r-0 border-l-0 border-b-crypGray-400 rounded-[0.313rem] h-[3.75rem] mr-4 mb-[3.625rem] ${isBalanceVisible ? "" : "mt-[2.188rem]"}`}
        container="tablet:px-6"
        inputClassName="placeholder:text-14 border-black placeholder:text-center"
        name="amount"
        placeholder="Enter amount"
        type="number"
      />
    </>
  );
};

export default TransactionAmount;

TransactionAmount.defaultProps = {
  isBalanceVisible: true,
};
