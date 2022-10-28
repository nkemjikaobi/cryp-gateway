import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import SingleSendTokenOption from "@components/organisms/DashboardPage/SingleSendTokenOption/SingleSendTokenOption";

import { ButtonProperties } from "@shared/libs/helpers";

interface SendTokenProps {
  setSendTokenOptions: Function;
  setShowSendToken: Function;
}

const SendToken: React.FC<SendTokenProps> = ({ setSendTokenOptions, setShowSendToken }) => {
  const [activeOption, setActiveOption] = useState<number>(1);
  const router = useRouter();

  const handleOptionSelect = (identifier: number) => {
    setActiveOption(identifier);
  };

  const handleSendReroute = () => {
    if (activeOption === 1) {
      return router.push("/dashboard/send-to-cryp-assets");
    }
    setShowSendToken(false);
    setSendTokenOptions(true);
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-16  text-center tablet:text-20 font-medium pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Send
      </Dialog.Title>
      <p className="text-center text-14 tablet:text-18 font-medium my-[2.813rem]">Please pick an option below</p>
      <div className="h-[16.25rem] overflow-y-scroll">
        {SendTokenData.map((sendData) => (
          <SingleSendTokenOption activeOption={activeOption} data={sendData} handleOptionSelect={handleOptionSelect} key={sendData.id} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton
          customClass="mt mb-12"
          handleClick={() => handleSendReroute()}
          size={ButtonProperties.SIZES.big}
          title="CONTINUE"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default SendToken;

const SendTokenData = [
  {
    id: 1,
    name: "Send to a CRYP user",
  },
  {
    id: 2,
    name: "Send to external wallet",
  },
];
