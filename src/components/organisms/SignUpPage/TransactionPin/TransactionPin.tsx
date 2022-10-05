import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { ButtonProperties } from "@shared/libs/helpers";

interface UserDetailsProps {
  step: StepProps;
}
const TransactionPin = ({ step }: UserDetailsProps) => {
  const [otp, setOtp] = useState<string>("");
  const [confirmOtp, setConfirmOtp] = useState<string>("");

  const handleOtpChange = async (otp: string) => {
    if (otp) {
      setOtp(otp);
    }
  };

  const handleConfirmOtpChange = async (otp: string) => {
    if (otp) {
      setConfirmOtp(otp);
    }
  };

  return (
    <>
      <h3 className="text-16 tablet:text-20 font-semibold">Transaction PIN Set-up</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        This PIN will be used for any debit or credit transaction in your Wallet
      </div>
      <div className="relative">
        <div className="mb-[3.313rem]">
          <h3 className="text-16 tablet:text-18 font-semibold">Enter transaction PIN</h3>
          <OtpComponent isInputNum={true} numInputs={4} onChange={handleOtpChange} otp={otp} value={otp} />
        </div>
        <div className="">
          <h3 className="text-16 tablet:text-18 font-semibold">Confirm transaction PIN</h3>
          <OtpComponent isInputNum={true} numInputs={4} onChange={handleConfirmOtpChange} otp={confirmOtp} value={confirmOtp} />
        </div>
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton customClass="mt-12" handleClick={() => step.goNextStep()} size={ButtonProperties.SIZES.big} title="NEXT" variant={ButtonProperties.VARIANT.primary.name} />
        <CustomButton customClass="capitalize" handleClick={() => step.goNextStep()} isGhost={true} title="skip for now" />
      </div>
    </>
  );
};

export default TransactionPin;
