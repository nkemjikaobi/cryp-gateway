import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

const WalletBalance = () => {
  const [isBalanceHidden, setIsBalanceHidden] = useState<boolean>(false);
  return (
    <div className="bg-white rounded-[25px] p-[1rem] flex flex-col my-[1.25rem] justify-center items-center smallLaptop:block  smallLaptop:rounded-none">
      <div className="hidden smallLaptop:flex items-center space-x-[3.563rem] mb-[3.063rem] w-[28.25rem] ">
        <h4 className="uppercase text-14 text-crypYellow-200 font-extrabold">cryp tokens</h4>
        <Icon name="yellowDropDown" />
      </div>
      <div className="">
        <div>
          <div className="hidden smallLaptop:hidden items-center space-x-[0.625rem]">
            <h5 className="text-crypGreen-800">cpUSD</h5>
            <Icon className="w-[0.813rem] h-[0.438rem]" name="yellowDropDown" />
          </div>
          <div className="flex items-center justify-between text-14 font-semibold space-x-[14.938rem]">
            <h4 className="uppercase text-[0.688rem] smallLaptop:text-14 whitespace-nowrap">total cryp balance</h4>
            <div className="hidden smallLaptop:flex items-center space-x-[0.625rem]">
              <h5 className="text-crypGreen-800">cpUSD</h5>
              <Icon name="yellowArrowRight" />
            </div>
          </div>
          <div className="flex items-center smallLaptop:justify-between space-x-[0.938rem] smallLaptop:space-x-[16.625rem]">
            <h2 className="text-18 smallLaptop:text-30 font-extrabold text-crypGreen-800 mt-[0.875rem] mb-[1.375rem]">
              {isBalanceHidden ? "*".repeat("cpUSD 4,000.00".length) : "cpUSD 34,000,000.00"}
            </h2>
            {isBalanceHidden ? (
              <Icon className="cursor-pointer" name="lashes" onClick={() => setIsBalanceHidden(false)} />
            ) : (
              <Icon className="cursor-pointer" name="eye" onClick={() => setIsBalanceHidden(true)} />
            )}
          </div>
          <p className="text-14 font-semibold text-crypRed-400 mb-8 smallLaptop:mb-16">cpUSD 0.00 pending</p>
        </div>
      </div>
      <div className="hidden smallLaptop:block">
        <div className="flex items-center space-x-[1.438rem]">
          <CustomButton
            customClass="font-14 rounded-md w-[8.313rem] uppercase h-[2.75rem] text-black"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="receive"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
          <CustomButton
            customClass="font-14 rounded-md w-[8.313rem] uppercase h-[2.75rem] text-black bg-crypYellow-200"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="withdraw"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
          <CustomButton
            customClass="font-14 rounded-md uppercase w-[8.313rem] h-[2.75rem] text-black !bg-crypGreen-70"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.small}
            title="convert"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
      <div className="block smallLaptop:hidden">
        <div className="flex items-center space-x-[1.438rem]">
          {WalletBalanceActions.map((wallet) => (
            <div className="flex flex-col items-center" key={wallet.id}>
              <Icon className="" name={wallet.icon} />
              <h5 className="uppercase text-12 font-semibold">{wallet.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;

const WalletBalanceActions = [
  {
    id: 1,
    icon: "receive",
    name: "receive",
  },
  {
    id: 2,
    icon: "withdraw",
    name: "withdraw",
  },
  {
    id: 3,
    icon: "convert",
    name: "convert",
  },
];
