import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import InputTransactionPin from "@components/organisms/modals/InputTransactionPin/InputTransactionPin";

import { ButtonProperties } from "@shared/libs/helpers";

import TransactionAmount from "../TransactionAmount/TransactionAmount";

const SendCrypAssets = () => {
  const [activeBank, setActiveBank] = useState<number>(-1);
  const [hasSelectedBank, setHasSelectedBank] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleBankSelection = (identifier: number) => {
    setActiveBank(identifier);
  };

  const sendToCrypAssets = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Money sent to your PRIME WALLET successfully!!");
      router.push("/dashboard");
    }, 3000);
  };

  return (
    <>
      <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto">
        <Toaster position="top-center" />
        <h4 className="font-semibold text-crypRed-500 text-center py-[2.188rem]">*You can only send funds from your OTHER COINS/TOKENS to your CRYP TOKENS</h4>
        <TransactionAmount />
        <div className="flex items-center justify-between">
          <div>
            <h5>All</h5>
            <p className="mt-[1.25rem] mb-[4.125rem]"> (NGN 0.00)</p>
          </div>
          {activeBank === -1 ? (
            <Icon className="cursor-pointer" name="radioFilled" onClick={() => handleBankSelection(-1)} />
          ) : (
            <Icon className="cursor-pointer" name="radio" onClick={() => handleBankSelection(-1)} />
          )}
        </div>
        <div className="flex items-center justify-center">
          <CustomButton
            customClass="mt-12 mb-12"
            handleClick={() => setHasSelectedBank(true)}
            size={ButtonProperties.SIZES.big}
            title="CONTINUE"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
      <CustomModal toggleVisibility={setHasSelectedBank} visibility={hasSelectedBank}>
        <InputTransactionPin callBack={sendToCrypAssets} loader={loading} />
      </CustomModal>
    </>
  );
};

export default SendCrypAssets;
