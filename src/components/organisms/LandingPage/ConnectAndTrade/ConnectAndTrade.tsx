import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

const ConnectAndTrade = () => {
  const router = useRouter();
  return (
    <div className="flex smallLaptop:items-center pl-4 pr-[1.25rem] smallLaptop:px-[3.125rem] flex-col bigLaptop:flex-row pt-[2.313rem] smallLaptop:pt-[10.188rem]">
      <div>
        <h2 className="text-20 tablet:text-37 smallLaptop:text-47 font-medium">Connect and Trade Well Beyond Borders</h2>
        <p className="text-14 my-[2.313rem] tablet:w-[33.188rem] font-medium opacity-70">
          Individual or Merchant, empower your business today with Cryp. We help you make sense of your everyday web payments.
        </p>
        <CustomButton
          customClass="mt-12"
          handleClick={() => router.push("/auth/sign-up")}
          isTransparent={true}
          size={ButtonProperties.SIZES.small}
          title="GET STARTED"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
      <div className="flex items-center justify-center">
        <Icon className="w-[18.5rem] h-[20.188rem] smallLaptop:w-[50.5rem] smallLaptop:h-[50.438rem]" name="globe" />
      </div>
    </div>
  );
};

export default ConnectAndTrade;
