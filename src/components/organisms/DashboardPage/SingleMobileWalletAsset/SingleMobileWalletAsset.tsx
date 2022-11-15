import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

interface SingleMobileWalletAssetProps {
  asset: any;
  setSingleReceive: Function;
}

const SingleMobileWalletAsset: React.FC<SingleMobileWalletAssetProps> = ({ asset, setSingleReceive }) => {
  return (
    <div className="mb-[3.438rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[4.5rem] h-16 relative">
            <Icon name={asset.logo} />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-14 mb-1 whitespace-nowrap truncate">{asset.symbol}</h4>
            <h6 className="text-12 font-medium whitespace-nowrap truncate">{asset.name}</h6>
          </div>
        </div>
        <div>
          <p className="text-12 font-semibold mb-[0.375rem]">{asset.cryptoAmount}</p>
          <p className="text-12 font-semibold opacity-70">{asset.valueOwned}</p>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <CustomButton
          customClass="!px-[1.25rem] !py-[0.688rem] !w-[5.25rem] !h-[2.75rem] mr-[28px]"
          handleClick={() => {}}
          size={ButtonProperties.SIZES.small}
          title="SEND"
          variant={ButtonProperties.VARIANT.accent.name}
        />
        <CustomButton
          customClass="!px-[1.25rem] !py-[0.688rem] !w-[5.25rem] !h-[2.75rem]"
          handleClick={() => setSingleReceive(true)}
          size={ButtonProperties.SIZES.small}
          title="RECEIVE"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default SingleMobileWalletAsset;
