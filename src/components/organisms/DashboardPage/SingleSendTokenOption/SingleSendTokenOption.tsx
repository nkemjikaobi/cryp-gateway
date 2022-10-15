import React from "react";

import Icon from "@components/atoms/Icons";

interface SingleSendTokenOptionProps {
  activeOption: number;
  data: any;
  handleOptionSelect: Function;
}

const SingleSendTokenOption: React.FC<SingleSendTokenOptionProps> = ({ activeOption, data, handleOptionSelect }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-[4.125rem]">
        <p>{data.name}</p>
        {activeOption === data.id ? (
          <Icon className="cursor-pointer" name="radioFilled" onClick={() => handleOptionSelect(data.id)} />
        ) : (
          <Icon className="cursor-pointer" name="radio" onClick={() => handleOptionSelect(data.id)} />
        )}
      </div>
    </>
  );
};

export default SingleSendTokenOption;
