import React, { useState } from "react";

import Icon from "@components/atoms/Icons";

interface ScanQRMoreInfoProps {
  message: string;
  customClass?: string;
}

const ScanQRMoreInfo: React.FC<ScanQRMoreInfoProps> = ({ message, customClass }) => {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  return (
    <div className={`hidden absolute smallLaptop:flex items-center ${customClass}`}>
      <Icon className="ml-[0.688rem] cursor-pointer" name="question" onClick={() => setShowHelp(true)} />
      {showHelp && (
        <div className="rounded-[1.875rem] w-[277px] bg-white flex flex-col shadow-qrInfo px-[0.813rem] py-4 ml-4">
          <Icon className="self-end cursor-pointer" name="yellowClose" onClick={() => setShowHelp(false)} />
          <p className="text-12 text-black pb-12">{message}</p>
        </div>
      )}
    </div>
  );
};

export default ScanQRMoreInfo;

ScanQRMoreInfo.defaultProps = {
  customClass: "",
};
