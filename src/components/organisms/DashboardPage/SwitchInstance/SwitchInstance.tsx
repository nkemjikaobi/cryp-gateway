import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyWalletInstance } from "src/store/global";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import { WALLET_INSTANCE } from "@shared/libs/helpers";

const SwitchInstance = () => {
  const { walletInstance } = useSelector((state: AppState) => state.global || {});
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
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

  return (
    <div className="flex ml-2 smallLaptop:ml-0 items-center mb-[3.063rem] w-[28.25rem] relative">
      <h4 className="uppercase cursor-pointer text-16 text-crypYellow-200 font-extrabold mr-[1.563rem]" onClick={handleToggle}>
        {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? "cryp tokens" : "other coins/tokens"}
      </h4>
      {showDropDown ? <Icon className="cursor-pointer" name="arrowUp" onClick={handleToggle} /> : <Icon className="cursor-pointer" name="yellowDropDown" onClick={handleToggle} />}
      {showDropDown && (
        <div
          className="absolute cursor-pointer hover:bg-crypGray-50 left-0 top-10 text-14 font-medium uppercase border border-crypGray-500 w-[171px] z-20 h-[66px] flex justify-center items-center bg-white rounded-[12px]"
          onClick={handleWalletInstance}
        >
          {walletInstance === WALLET_INSTANCE.CRYP_TOKENS ? "other coins/tokens" : "cryp tokens"}
        </div>
      )}
    </div>
  );
};

export default SwitchInstance;
