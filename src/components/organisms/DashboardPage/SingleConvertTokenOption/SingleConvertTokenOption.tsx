import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import Icon from "@components/atoms/Icons";

import { CPUSD, WALLET_INSTANCE } from "@shared/libs/helpers";

interface SingleConvertTokenOptionProps {
  activeOption: number;
  data: any;
  handleOptionSelect: Function;
}

const SingleConvertTokenOption: React.FC<SingleConvertTokenOptionProps> = ({ activeOption, data, handleOptionSelect }) => {
  const { walletInstance } = useSelector((state: AppState) => state.global || {});

  return (
    <>
      <div className="flex justify-between items-center mb-[4.125rem]">
        <div className="flex items-center">
          <Icon className="mr-[1.125rem]" name={data.logo} />
          <div>
            <p className="text-14 font-medium mb-[0.125rem]"> {walletInstance === WALLET_INSTANCE.OTHER_TOKENS ? `${data.symbol} to ${CPUSD}` : `${CPUSD} to ${data.symbol}`}</p>
            <p className="font-medium text-12 text-crypGray-200">{walletInstance === WALLET_INSTANCE.OTHER_TOKENS ? `${data.name} / ${CPUSD}` : `${CPUSD} / ${data.name}`}</p>
          </div>
        </div>
        {activeOption === data.id ? (
          <Icon className="cursor-pointer" name="radioFilled" onClick={() => handleOptionSelect(data.id)} />
        ) : (
          <Icon className="cursor-pointer" name="radio" onClick={() => handleOptionSelect(data.id)} />
        )}
      </div>
    </>
  );
};

export default SingleConvertTokenOption;
