import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyWalletInstance } from "src/store/global";
import { AppState } from "src/store/rootReducer";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import ConvertToken from "@components/organisms/modals/ConvertToken/ConvertToken";
import SendToken from "@components/organisms/modals/SendToken/SendToken";

import { ButtonProperties, CPUSD, WALLET_INSTANCE } from "@shared/libs/helpers";

const WalletBalance = () => {
  const [isBalanceHidden, setIsBalanceHidden] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [showSendToken, setShowSendToken] = useState<boolean>(false);
  const [showConvertToken, setShowConvertToken] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>(CPUSD);
  const [currencySymbol, setCurrencySymbol] = useState<string>(CPUSD);
  const [balance, setBalance] = useState<string>("34,000,000");
  const router = useRouter();
  const { walletInstance } = useSelector((state: AppState) => state.global || {});
  const dispatch = useDispatch();

  const handleToggle = () => {
    setShowDropDown(!showDropDown);
  };

  const handleWalletInstance = () => {
    if (walletInstance === WALLET_INSTANCE.CRYP_TOKENS) {
      dispatch(modifyWalletInstance(WALLET_INSTANCE.OTHER_TOKENS));
    } else {
      dispatch(modifyWalletInstance(WALLET_INSTANCE.CRYP_TOKENS));
    }
    handleToggle();
  };

  useEffect(() => {
    if (walletInstance === WALLET_INSTANCE.OTHER_TOKENS) {
      setCurrencySymbol("$");
      setBalance("4,000");
      setCurrency("USD");
    } else {
      setBalance("34,000,000");
      setCurrencySymbol(CPUSD);
      setCurrency(CPUSD);
    }
  }, [walletInstance]);

  return (
    <>
      <div className="bg-white rounded-[1.563rem] p-[1rem] smallLaptop:p-0 flex flex-col my-[1.25rem] justify-center items-center smallLaptop:block  smallLaptop:rounded-none">
        <div className="hidden smallLaptop:flex  items-center mb-[3.063rem] w-[28.25rem] relative">
          <h4 className="uppercase cursor-pointer text-16 text-crypYellow-200 font-extrabold mr-[1.563rem]" onClick={handleToggle}>
            {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? "cryp tokens" : "other coins/tokens"}
          </h4>
          {showDropDown ? (
            <Icon className="cursor-pointer" name="arrowUp" onClick={handleToggle} />
          ) : (
            <Icon className="cursor-pointer" name="yellowDropDown" onClick={handleToggle} />
          )}
          {showDropDown && (
            <div
              className="absolute cursor-pointer hover:bg-crypGray-50 left-0 top-10 text-14 font-semibold uppercase border border-crypGray-500 w-[171px] h-[66px] flex justify-center items-center bg-white rounded-[12px]"
              onClick={handleWalletInstance}
            >
              {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? "other coins/tokens" : "cryp tokens"}
            </div>
          )}
        </div>
        <div className="">
          <div>
            <div className="hidden smallLaptop:hidden items-center space-x-[0.625rem]">
              <h5 className="text-crypGreen-800">{currency}</h5>
              <Icon className="w-[0.813rem] h-[0.438rem]" name="yellowDropDown" />
            </div>
            <div className="flex items-center justify-between text-14 font-semibold space-x-[14.938rem]">
              <h4 className="uppercase text-[0.688rem] smallLaptop:text-14 whitespace-nowrap">total cryp balance</h4>
              <div className="hidden smallLaptop:flex items-center space-x-[0.625rem]">
                <h5 className="text-crypGreen-800">{currency}</h5>
                <Icon name="yellowArrowRight" />
              </div>
            </div>
            <div className="flex items-center smallLaptop:justify-between space-x-[0.938rem] smallLaptop:space-x-[16.625rem]">
              <h2 className="text-18 smallLaptop:text-30 font-extrabold text-crypGreen-800 mt-[0.875rem] mb-[1.375rem]">
                {isBalanceHidden ? "*".repeat(`${currencySymbol} ${balance}.00`.length) : `${currencySymbol} ${balance}.00`}
              </h2>
              {isBalanceHidden ? (
                <Icon className="cursor-pointer" name="lashes" onClick={() => setIsBalanceHidden(false)} />
              ) : (
                <Icon className="cursor-pointer" name="eye" onClick={() => setIsBalanceHidden(true)} />
              )}
            </div>
            <p className="text-14 font-semibold text-crypRed-400 mb-8 smallLaptop:mb-16">{currency} 0.00 pending</p>
          </div>
        </div>
        <div className="hidden smallLaptop:block">
          <div className="flex items-center space-x-[1.438rem]">
            <CustomButton
              customClass="w-[8.313rem] uppercase h-[2.75rem] text-black !border-crypGreen-500 !bg-crypGreen-500 hover:!bg-crypGreen-800"
              handleClick={() => router.push("/dashboard/invoice")}
              size={ButtonProperties.SIZES.small}
              title="receive"
              type="submit"
              variant={ButtonProperties.VARIANT.primary.name}
            />
            {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? (
              <CustomButton
                customClass="w-[8.313rem] uppercase h-[2.75rem] text-black"
                handleClick={() => router.push("/dashboard/withdraw")}
                size={ButtonProperties.SIZES.small}
                title="withdraw"
                type="submit"
                variant={ButtonProperties.VARIANT.accent.name}
              />
            ) : (
              <CustomButton
                customClass="w-[8.313rem] uppercase h-[2.75rem] text-black"
                handleClick={() => setShowSendToken(true)}
                size={ButtonProperties.SIZES.small}
                title="send"
                type="submit"
                variant={ButtonProperties.VARIANT.accent.name}
              />
            )}
            <CustomButton
              customClass="w-[8.313rem] uppercase h-[2.75rem] text-black border-crypGreen-70 !bg-crypGreen-70  hover:!bg-crypGreen-60"
              handleClick={() => setShowConvertToken(true)}
              size={ButtonProperties.SIZES.small}
              title="convert"
              type="submit"
              variant={ButtonProperties.VARIANT.primary.name}
            />
          </div>
        </div>
        <div className="block smallLaptop:hidden">
          <div className="flex items-center space-x-[1.438rem]">
            <div className="flex flex-col items-center">
              <Icon className="" name="receive" onClick={() => router.push("/dashboard/invoice")} />
              <h5 className="uppercase text-12 font-semibold">receive</h5>
            </div>

            {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? (
              <div className="flex flex-col items-center">
                <Icon className="" name="withdraw" onClick={() => router.push("/dashboard/withdraw")} />
                <h5 className="uppercase text-12 font-semibold">withdraw</h5>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Icon className="" name="withdraw" onClick={() => setShowSendToken(true)} />
                <h5 className="uppercase text-12 font-semibold">send</h5>
              </div>
            )}

            <div className="flex flex-col items-center">
              <Icon className="" name="convert" onClick={() => setShowConvertToken(true)} />
              <h5 className="uppercase text-12 font-semibold">convert</h5>
            </div>
          </div>
        </div>
      </div>
      <CustomModal toggleVisibility={setShowSendToken} visibility={showSendToken}>
        <SendToken />
      </CustomModal>
      <CustomModal toggleVisibility={setShowConvertToken} visibility={showConvertToken}>
        <ConvertToken />
      </CustomModal>
    </>
  );
};

export default WalletBalance;
