import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import SingleSendTokenOptions from "@components/organisms/DashboardPage/SingleSendTokenOptions/SingleSendTokenOptions";

import { ButtonProperties } from "@shared/libs/helpers";

interface SendTokenOptionsProps {
  setShowPasteAddress: Function;
  setSendTokenOptions: Function;
}
const SendTokenOptions: React.FC<SendTokenOptionsProps> = ({ setShowPasteAddress, setSendTokenOptions }) => {
  const [activeOption, setActiveOption] = useState<number>(1);

  const handleOptionSelect = (identifier: number) => {
    setActiveOption(identifier);
  };

  const proceed = () => {
    setSendTokenOptions(false);
    setShowPasteAddress(true);
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-16  text-center tablet:text-20 font-semibold pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Send
      </Dialog.Title>
      <p className="text-center text-14 tablet:text-18 font-semibold my-[2.813rem]">What coin do you want to send?</p>
      <div className="h-[16.25rem] smallLaptop:h-[26.25rem] overflow-y-scroll">
        {SendTokenOptionsData.map((data) => (
          <SingleSendTokenOptions activeOption={activeOption} data={data} handleOptionSelect={handleOptionSelect} key={data.id} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton customClass="mt mb-12" handleClick={proceed} size={ButtonProperties.SIZES.big} title="SEND COIN" variant={ButtonProperties.VARIANT.primary.name} />
      </div>
    </div>
  );
};

export default SendTokenOptions;

const SendTokenOptionsData = [
  {
    id: 1,
    logo: "bitcoin",
    symbol: "BTC",
    name: "BITCOIN",
  },
  {
    id: 2,
    logo: "litecoin",
    symbol: "LTC",
    name: "LITECOIN",
  },
  {
    id: 3,
    logo: "ada",
    symbol: "ADA",
    name: "CARDANO",
  },
  {
    id: 4,
    logo: "usdt",
    symbol: "USDT",
    name: "TETHER",
  },
];
