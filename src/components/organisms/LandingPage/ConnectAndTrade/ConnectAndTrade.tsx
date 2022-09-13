import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

const ConnectAndTrade = () => {
  return (
    <div className="flex items-center pt-[10.188rem]">
      <div>
        <h2 className="text-47 font-semibold">Connect and Trade Well Beyond Borders</h2>
        <p className="text-14 my-[2.313rem] w-[33.188rem] font-medium opacity-70">
          Individual or Merchant, empower your business today with Cryp. We help you make sense of your everyday web payments.
        </p>
        <CustomButton
          customClass="border-[#388F88] w-[10.25rem] text-16 h-[3.75] bigLaptop:h-[5rem] mt-12"
          handleClick={() => {}}
          isTransparent={true}
          size={ButtonProperties.SIZES.small}
          title="GET STARTED"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
      <Icon name="globe" />
    </div>
  );
};

export default ConnectAndTrade;
