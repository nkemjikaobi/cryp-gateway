import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

const ScanQRMoreInfo = () => {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  return (
    <div className="relative flex ">
      {!showHelp && <Icon className="ml-[0.688rem] cursor-pointer" name="question" onClick={() => setShowHelp(true)} />}
      {showHelp && (
        <div className="rounded-[1.875rem] w-[10.625rem] bg-white flex flex-col shadow-qrInfo px-[0.813] ml-4">
          <Icon className="self-end cursor-pointer" name="yellowClose" onClick={() => setShowHelp(false)} />
          <p className="text-12 text-black pb-12">Scan the wallet QR Code to get the address. Works best on a mobile view</p>
        </div>
      )}
    </div>
  );
};

export default ScanQRMoreInfo;
