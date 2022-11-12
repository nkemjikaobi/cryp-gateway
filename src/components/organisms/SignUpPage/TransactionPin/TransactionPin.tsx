import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { CREATE_PIN } from "@graphql/auth/mutations";

import { ButtonProperties, handleGraphQLErrors, NotificationTypes } from "@shared/libs/helpers";

interface UserDetailsProps {
  step: StepProps;
}
const TransactionPin = ({ step }: UserDetailsProps) => {
  const [otp, setOtp] = useState<string>("");
  const [confirmOtp, setConfirmOtp] = useState<string>("");
  const [createPin, { data, loading, error }] = useMutation(CREATE_PIN);

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

  const createUserPin = async () => {
    if (otp !== confirmOtp) {
      return crypToast(NotificationTypes.ERROR, "Pins dont match");
    }

    const pinDetails = { pin: otp };

    await createPin({
      variables: {
        input: {
          ...pinDetails,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      crypToast(NotificationTypes.SUCCESS, "Pin created");
      step.goNextStep();
    }

    if (error) {
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  return (
    <>
      <h3 className="text-16 tablet:text-20 font-medium">Transaction PIN Set-up</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        This PIN will be used for any debit or credit transaction in your Wallet
      </div>
      <div className="relative">
        <div className="mb-[3.313rem]">
          <h3 className="text-16 tablet:text-18 font-medium">Enter transaction PIN</h3>
          <OtpComponent isInputNum={true} isInputSecure={true} numInputs={4} onChange={handleOtpChange} otp={otp} value={otp} />
        </div>
        <div className="">
          <h3 className="text-16 tablet:text-18 font-medium">Confirm transaction PIN</h3>
          <OtpComponent isInputNum={true} isInputSecure={true} numInputs={4} onChange={handleConfirmOtpChange} otp={confirmOtp} value={confirmOtp} />
        </div>
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="mt-12"
          handleClick={() => createUserPin()}
          isDisabled={loading}
          isSubmitting={loading}
          size={ButtonProperties.SIZES.big}
          title="NEXT"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomButton customClass="capitalize" handleClick={() => step.goNextStep()} isGhost={true} title="skip for now" />
      </div>
    </>
  );
};

export default TransactionPin;
