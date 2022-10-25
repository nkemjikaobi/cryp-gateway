import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import SingleSendTokenOptions from "@components/organisms/DashboardPage/SingleSendTokenOptions/SingleSendTokenOptions";

import { ButtonProperties } from "@shared/libs/helpers";

interface SendTokenOptionsProps {
  setShowCopyAddress: Function;
  setReceiveTokenOptions: Function;
}
const ReceiveTokenOptions: React.FC<SendTokenOptionsProps> = ({ setShowCopyAddress, setReceiveTokenOptions }) => {
  const [activeOption, setActiveOption] = useState<number>(1);

  const handleOptionSelect = (identifier: number) => {
    setActiveOption(identifier);
  };

  const proceed = () => {
    setReceiveTokenOptions(false);
    setShowCopyAddress(true);
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-16  text-center tablet:text-20 font-medium pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Receive
      </Dialog.Title>
      <p className="text-center text-14 tablet:text-18 font-medium my-[2.813rem]">What coin do you want to receive?</p>
      <div className="h-[16.25rem] smallLaptop:h-[26.25rem] overflow-y-scroll">
        {ReceiveTokenOptionsData.map((data) => (
          <SingleSendTokenOptions activeOption={activeOption} data={data} handleOptionSelect={handleOptionSelect} key={data.id} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton customClass="mt mb-12" handleClick={proceed} size={ButtonProperties.SIZES.big} title="CONTINUE" variant={ButtonProperties.VARIANT.primary.name} />
      </div>
    </div>
  );
};

export default ReceiveTokenOptions;

const ReceiveTokenOptionsData = [
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
