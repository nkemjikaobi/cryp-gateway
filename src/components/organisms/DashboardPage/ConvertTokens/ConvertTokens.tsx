import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import InputTransactionPin from "@components/organisms/modals/InputTransactionPin/InputTransactionPin";

import { ButtonProperties, CPUSD, WALLET_INSTANCE } from "@shared/libs/helpers";

import TransactionAmount from "../TransactionAmount/TransactionAmount";

interface ConvertTokensProps {
  coin: string | null;
}

const ConvertTokens: React.FC<ConvertTokensProps> = ({ coin }) => {
  const [readyToConvert, setReadyToConvert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { walletInstance } = useSelector((state: AppState) => state.global || {});

  const handleConvert = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Conversion successful!!");
      router.push("/dashboard/payments");
    }, 3000);
  };

  return (
    <>
      <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto">
        <TransactionAmount isBalanceVisible={false} />
        <div className="flex flex-col smallLaptop:flex-row smallLaptop:items-center space-y-4 smallLaptop:space-y-0 justify-between text-14 smallLaptop:text-18 font-medium">
          <span>{`(${walletInstance === WALLET_INSTANCE.OTHER_TOKENS ? coin : CPUSD} 0.0052568)`}</span>
          <span>(N 24,000.00)</span>
          <span>{`(${walletInstance === WALLET_INSTANCE.OTHER_TOKENS ? CPUSD : coin} 4,000.00)`}</span>
        </div>
        <div className="flex items-center justify-center">
          <CustomButton
            customClass="mt-12 mb-12"
            handleClick={() => setReadyToConvert(true)}
            size={ButtonProperties.SIZES.big}
            title="COMPLETE CONVERSION"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
      <CustomModal toggleVisibility={setReadyToConvert} visibility={readyToConvert}>
        <InputTransactionPin callBack={handleConvert} loader={loading} />
      </CustomModal>
    </>
  );
};

export default ConvertTokens;
