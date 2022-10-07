import Image from "next/image";
import React from "react";

import Icon from "@components/atoms/Icons";

import Gtb from "@images/dashboard/gtb.png";

interface SingleBankAccountProps {
  bankAccount: any;
  handleBankSelection: Function;
  activeBank: number;
  setDeleteAccount: Function;
}

const SingleBankAccount: React.FC<SingleBankAccountProps> = ({ bankAccount, handleBankSelection, activeBank, setDeleteAccount }) => {
  return (
    <div className="flex items-center justify-between mb-[2.813rem]">
      <div className="flex items-center">
        <div className="mr-[1.813rem]">
          <Image height={59} src={Gtb} width={57} />
        </div>
        <div className="space-y-[0.813rem]">
          <h4 className="text-14 smallLaptop:text-base">{bankAccount.accountName}</h4>
          <h4 className="text-12 smallLaptop:text-14">{bankAccount.bankName}</h4>
          <h4 className="text-12 smallLaptop:text-14">{bankAccount.accountNumber}</h4>
        </div>
      </div>
      <div className="flex items-center">
        {activeBank === bankAccount.id ? (
          <Icon className="cursor-pointer mr-[2.75rem]" name="radioFilled" onClick={() => handleBankSelection(bankAccount.id)} />
        ) : (
          <Icon className="cursor-pointer mr-[2.75rem]" name="radio" onClick={() => handleBankSelection(bankAccount.id)} />
        )}
        <Icon className="cursor-pointer" name="trash" onClick={() => setDeleteAccount(true)} />
      </div>
    </div>
  );
};

export default SingleBankAccount;
