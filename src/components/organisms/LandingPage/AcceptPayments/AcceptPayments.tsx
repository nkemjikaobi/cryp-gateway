import React from "react";

import Icon from "@components/atoms/Icons";

const AcceptPayments = () => {
  return (
    <div className="tablet:bg-crypGreen-50 rounded-[1.875rem] px-4 tablet:px-[4.5rem] smallLaptop:px-[9.5rem] py-[4.125rem] shadow-acceptPayment">
      <h2 className="mb-6 tablet:mb-[7.563rem] tablet:text-center text-20 tablet:text-37 smallLaptop:text-47 font-semibold">Trade and Accept Payments With Cryp Today</h2>
      <div className="hidden tablet:block">
        <div className="grid text-center grid-cols-3 tablet:gap-[3.25rem] gap-[7.25rem]">
          {AcceptPaymentsData.map((data) => (
            <div className="mb-[5.938rem]" key={data.id}>
              <h4 className="text-20 capitalize mb-[1.313rem] font-bold">{data.name}</h4>
              <p className="text-14 font-medium opacity-70">{data.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="block tablet:hidden">
        {AcceptPaymentsData.map((data) => (
          <div className="mb-6 tablet:mb-[5.938rem] flex items-center" key={data.id}>
            <Icon name="diagonalArrow" />
            <div className="ml-[1.063rem] mr-[2.063rem]">
              <h4 className="text-14 text-crypGreen-800 capitalize mb-[0.438rem] font-bold">{data.name}</h4>
              <p className="text-12  font-medium opacity-70">{data.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptPayments;

const AcceptPaymentsData = [
  {
    id: 1,
    name: "local tokens",
    body: "Plaid godard small batch health goth man braid, succulents disrupt subway tile. Vinyl proident sriracha, offal VHS",
  },
  {
    id: 2,
    name: "payment gateway",
    body: "Plaid godard small batch health goth man braid, succulents disrupt subway tile. Vinyl proident sriracha, offal VHS",
  },
  {
    id: 3,
    name: "secure channel",
    body: "Plaid godard small batch health goth man braid, succulents disrupt subway tile. Vinyl proident sriracha, offal VHS",
  },
  {
    id: 4,
    name: "utility tokens",
    body: "Plaid godard small batch health goth man braid, succulents disrupt subway tile. Vinyl proident sriracha, offal VHS",
  },
  {
    id: 5,
    name: "payment links",
    body: "Plaid godard small batch health goth man braid, succulents disrupt subway tile. Vinyl proident sriracha, offal VHS",
  },
  {
    id: 6,
    name: "USSD",
    body: "Plaid godard small batch health goth man braid, succulents disrupt subway tile. Vinyl proident sriracha, offal VHS",
  },
];
