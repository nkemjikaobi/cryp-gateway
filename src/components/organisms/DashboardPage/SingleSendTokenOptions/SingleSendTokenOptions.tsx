import React from "react";

import Icon from "@components/atoms/Icons";

interface SingleSendTokenOptionsProps {
  activeOption: number;
  data: any;
  handleOptionSelect: Function;
}

const SingleSendTokenOptions: React.FC<SingleSendTokenOptionsProps> = ({ activeOption, data, handleOptionSelect }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-[4.125rem]">
        <div className="flex items-center">
          <Icon className="mr-[1.125rem]" name={data.logo} />
          <div>
            <p className="text-14 font-medium mb-[0.125rem]">{data.symbol}</p>
            <p className="font-medium text-12 text-crypGray-200">{data.name}</p>
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

export default SingleSendTokenOptions;
