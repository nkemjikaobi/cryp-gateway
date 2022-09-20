import React from "react";

import Icon from "@components/atoms/Icons";

interface TransactionItemProps {
  transaction: any;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <div className="flex items-center mb-8">
      {transaction.type === "credit" ? <Icon className="pr-[10px]" name="creditArrow" /> : <Icon className="pr-[10px]" name="debitArrow" />}
      <div>
        <div className="flex items-center justify-between w-[283px] mb-4">
          <h5 className="font-semibold text-[11px]">{transaction.date}</h5>
          <h6 className={`text-14 font-semibold ${transaction.type === "credit" ? "text-crypGreen-800" : "text-crypRed-500"} `}>{transaction.price}</h6>
        </div>
        <p className="text-14 font-semibold ">{transaction.name}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
