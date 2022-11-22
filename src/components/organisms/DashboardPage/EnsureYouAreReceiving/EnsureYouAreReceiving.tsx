import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

import Icon from "@components/atoms/Icons";
import ScanQRMoreInfo from "@components/organisms/modals/ScanQRMoreInfo/ScanQRMoreInfo";

const EnsureYouAreReceiving = () => {
  return (
    <>
      <p className="text-center text-14 tablet:text-18 font-medium my-[2.813rem] text-crypRed-500 mb-[69.5px]">
        *Ensure you are receiving a BEP 20 Token/Coin, any other may result to a loss of your money
      </p>
      <CopyToClipboard
        onCopy={() => {
          toast.success("Wallet Address Copied");
        }}
        text="paymelink.BTC/wallet/"
      >
        <div className="flex justify-center items-center cursor-pointer text-12 smallLaptop:text-14">
          <Icon className="mr-[2.063rem]" name="copy" />
          <span className="text-crypBlue-300 underline underline-offset-8">paymelink.BTC/wallet/</span>
        </div>
      </CopyToClipboard>
      <p className="text-center text-14 tablet:text-18 font-medium my-[2.813rem]">Copy and share the link below to get paid directly in crypto</p>
      <p className="text-center text-14 tablet:text-18 font-medium my-[2.813rem]">Or</p>
      <p className="text-center text-14 tablet:text-18 pb-[69px] text-crypGreen-800 font-medium my-[2.813rem] flex items-center justify-center relative">
        Scan For Wallet Address <ScanQRMoreInfo customClass="left-[450px]" message="Scan the wallet QR Code to get the address. Works best on a mobile view" />
      </p>
    </>
  );
};

export default EnsureYouAreReceiving;
