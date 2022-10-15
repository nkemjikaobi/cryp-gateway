import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import SingleConvertTokenOption from "@components/organisms/DashboardPage/SingleConvertTokenOption/SingleConvertTokenOption";

import { ButtonProperties, WALLET_INSTANCE } from "@shared/libs/helpers";

const ConvertToken = () => {
  const [activeOption, setActiveOption] = useState<number>(1);
  const { walletInstance } = useSelector((state: AppState) => state.global || {});

  const router = useRouter();

  const handleOptionSelect = (identifier: number) => {
    setActiveOption(identifier);
  };

  const proceed = () => {
    const selectedToken = ConvertTokenData.filter((data) => data.id === activeOption);
    localStorage.setItem("coin", selectedToken[0].symbol);
    router.push("/dashboard/convert-coins");
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-16  text-center tablet:text-20 font-semibold pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Convert
      </Dialog.Title>
      <p className="text-center text-14 tablet:text-18 font-semibold my-[2.813rem]">
        {walletInstance === WALLET_INSTANCE.OTHER_TOKENS ? "What coin do you want to convert?" : "What coin do you want to convert into?"}
      </p>
      <div className="h-[16.25rem] smallLaptop:h-[26.25rem] overflow-y-scroll">
        {ConvertTokenData.map((convertData) => (
          <SingleConvertTokenOption activeOption={activeOption} data={convertData} handleOptionSelect={handleOptionSelect} key={convertData.id} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton customClass="mt mb-12" handleClick={proceed} size={ButtonProperties.SIZES.big} title="CONTINUE" variant={ButtonProperties.VARIANT.primary.name} />
      </div>
    </div>
  );
};

export default ConvertToken;

const ConvertTokenData = [
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
