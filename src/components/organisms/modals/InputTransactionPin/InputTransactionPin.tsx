import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";

import { ButtonProperties } from "@shared/libs/helpers";

interface InputTransactionPinProps {
  callBack: Function;
  loader: boolean;
}
const InputTransactionPin: React.FC<InputTransactionPinProps> = ({ callBack, loader }) => {
  const [otp, setOtp] = useState<string>("");

  const handleOtpChange = async (otp: string) => {
    if (otp) {
      setOtp(otp);
    }
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] h-[23rem] tablet:h-[38.188rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Dialog.Title as="h3" className="text-14 tablet:text-18 font-semibold pt-[3.063rem] smallLaptop:pt-[4.313rem]">
        Complete Action
      </Dialog.Title>
      <div className="relative">
        <div className="mb-[3.313rem]">
          <h3 className="text-14 py-8 smallLaptop:pt-[3.688rem] smallLaptop:pb-[4.25rem] tablet:text-16 font-semibold">Please input your Transaction PIN</h3>
          <OtpComponent isInputNum={true} numInputs={4} onChange={handleOtpChange} otp={otp} value={otp} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CustomButton
          customClass="smallLaptop:mt-[106px]"
          handleClick={() => callBack()}
          isDisabled={loader}
          isSubmitting={loader}
          size={ButtonProperties.SIZES.big}
          title="COMPLETE"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default InputTransactionPin;
