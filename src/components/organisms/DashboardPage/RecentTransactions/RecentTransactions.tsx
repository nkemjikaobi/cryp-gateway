import React from "react";

import Icon from "@components/atoms/Icons";

// import NoTransaction from "./NoTransaction";
import TransactionItem from "./TransactionItem";

const RecentTransactions = () => {
  return (
    <div className="bg-white w-[27rem] h-[29.375rem] pt-8 rounded-[1.25rem] overflow-y-scroll">
      <div className="flex items-center justify-between pl-[2.188rem] pr-[0.625rem] pb-[2.438rem]">
        <h5 className="text-18 font-bold text-crypGreen-800">Recent Transactions</h5>
        <div className="flex items-center space-x-[0.625rem]">
          <h5 className="text-crypGreen-800">This Month</h5>
          <Icon className="w-[0.813rem] h-[2.438rem]" name="yellowDropDown" />
        </div>
      </div>
      <div className=" pl-[2.188rem] pr-[0.625rem]">
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
