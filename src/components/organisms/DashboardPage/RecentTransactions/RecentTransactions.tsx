import React from "react";

import Icon from "@components/atoms/Icons";

// import NoTransaction from "./NoTransaction";
import TransactionItem from "./TransactionItem";

const RecentTransactions = () => {
  return (
    <div className="bg-white w-[432px] h-[470px] pt-[32px] rounded-[20px] overflow-y-scroll">
      <div className="flex items-center justify-between pl-[35px] pr-[10px] pb-[39px]">
        <h5 className="text-18 font-bold text-crypGreen-800">Recent Transactions</h5>
        <div className="flex items-center space-x-[10px]">
          <h5 className="text-crypGreen-800">This Month</h5>
          <Icon className="w-[13px] h-[7px]" name="yellowDropDown" />
        </div>
      </div>
      <div className=" pl-[35px] pr-[10px]">
        {TransactionsData.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>

      {/* <NoTransaction /> */}
    </div>
  );
};

export default RecentTransactions;

/**
 * Remember to truncate texts
 */
// todo

const TransactionsData = [
  {
    id: 1,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "credit",
  },
  {
    id: 2,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "credit",
  },
  {
    id: 3,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "debit",
  },
  {
    id: 4,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "debit",
  },
  {
    id: 5,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "credit",
  },
  {
    id: 6,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "debit",
  },
  {
    id: 7,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "credit",
  },
  {
    id: 8,
    name: "Odofin Adedam0la Taofeekat...",
    price: "cpUSD 23,000.00",
    date: "12 Jan, 2022 09:09PM",
    type: "debit",
  },
];
