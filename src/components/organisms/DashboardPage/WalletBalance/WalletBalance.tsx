import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

const WalletBalance = () => {
  return (
    <div>
      <div className="flex items-center space-x-[3.563rem] mb-[3.063rem] w-[28.25rem]">
        <h4 className="uppercase text-14 text-crypYellow-200 font-extrabold">cryp tokens</h4>
        <Icon name="yellowDropDown" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center justify-between text-14 font-semibold space-x-[14.938rem]">
            <h4 className="uppercase ">total cryp balance</h4>
            <div className="flex items-center space-x-[0.625rem]">
              <h5 className="text-crypGreen-800">cpUSD</h5>
              <Icon name="yellowArrowRight" />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-[16.625rem]">
            <h2 className="text-30 font-extrabold text-crypGreen-800 mt-[0.875rem] mb-[1.375rem]">cpUSD 0.00</h2>
            <Icon name="eye" />
          </div>
          <p className="text-14 font-semibold text-crypRed-400 mb-16">cpUSD 0.00 pending</p>
        </div>
      </div>
      <div className="flex items-center space-x-[1.438rem]">
        <CustomButton
          customClass="!w-full font-14 rounded-md uppercase h-[2.75rem] text-black"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="receive"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomButton
          customClass="!w-full font-14 rounded-md uppercase h-[2.75rem] text-black bg-crypYellow-200"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="withdraw"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomButton
          customClass="!w-full font-14 rounded-md uppercase h-[2.75rem] text-black !bg-crypGreen-70"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="convert"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default WalletBalance;
