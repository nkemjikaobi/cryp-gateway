import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import InputTransactionPin from "@components/organisms/modals/InputTransactionPin/InputTransactionPin";

import { ButtonProperties } from "@shared/libs/helpers";

const AddBankForm = () => {
  const [confirmPin, setConfirmPin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const addBank = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/withdraw");
      toast.success("Bank account added successfully!");
    }, 3000);
  };

  return (
    <>
      <div className="bg-white w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto rounded-[3.125rem] shadow-auth px-4 smallLaptop:px-6 mt-[4rem] smallLaptop:mt-[6.5rem] mb-32 text-12 smallLaptop:text-16">
        <div className="relative">
          <>
            <CustomLabel className="mb-[0.438rem]" title="Your Name" />
            <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="" type="text" />
          </>
          <>
            <CustomLabel className="mb-[0.438rem]" title="Bank" />
            <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="username" type="textarea" />
          </>
          <>
            <CustomLabel className="mb-[0.438rem]" title="Account Number" />
            <CustomInput className="border border-glass-450 rounded-[0.313rem] mr-4 mt-2 mb-[3.125rem]" name="username" type="textarea" />
          </>
        </div>
        <div className="flex flex-col pb-[4.563rem] justify-center items-center">
          <CustomButton
            customClass="mt-12"
            handleClick={() => setConfirmPin(true)}
            size={ButtonProperties.SIZES.big}
            title="SAVE BANK"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
      <CustomModal toggleVisibility={setConfirmPin} visibility={confirmPin}>
        <InputTransactionPin callBack={addBank} loader={loading} />
      </CustomModal>
    </>
  );
};

export default AddBankForm;
