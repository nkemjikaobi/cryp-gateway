import Image from "next/image";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import TradeImg from "@images/home/trade-accept.png";

const TradeAndAccept = () => {
  return (
    <div className="flex flex-col smallLaptop:flex-row pl-4 smallLaptop:px-[3.125rem] pr-[1.25rem] tablet:space-x-[3.188rem] pb-[7.25rem] justify-between tablet:items-center">
      <Image height={464} src={TradeImg} width={766} />
      <div>
        <h2 className="mt-[3.375rem] smallLaptop:mt-0 text-20 tablet:text-37 bigLaptop:text-47 font-semibold">Trade and Accept Payments Through CPay</h2>
        <p className="text-14 my-[1rem] bigLaptop:my-[2.313rem] tablet:w-[33.188rem] font-medium opacity-70">
          Individual or Merchant, empower your business today with Cryp. We help you make sense of your everyday web payments.
        </p>
        <CustomLink customClass="text-12 uppercase hover:text-crypYellow-300 smallLaptop:text-16 font-semibold text-crypYellow-200 flex items-center" destination="#">
          Learn More <Icon className="ml-4" name="yellowArrowRight" />
        </CustomLink>
      </div>
    </div>
  );
};

export default TradeAndAccept;
