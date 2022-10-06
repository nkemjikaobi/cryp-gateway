import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";

import { ButtonProperties } from "@shared/libs/helpers";

const InputTransactionPin = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const addBnak = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/withdraw");
      toast.success("Bank account added successfully!");
    }, 3000);
  };

  const handleOtpChange = async (otp: string) => {
    if (otp) {
      setOtp(otp);
    }
  };

  return (
    <div className="rounded-[1.875rem] tablet:rounded-[3.125rem] h-[23rem] tablet:h-[38.188rem] mx-[1.875rem] px-[1.125rem] tablet:px-16 bg-white text-black">
      <Toaster position="top-center" />
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
          handleClick={() => addBnak()}
          isDisabled={loading}
          isSubmitting={loading}
          size={ButtonProperties.SIZES.big}
          title="COMPLETE"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default InputTransactionPin;
