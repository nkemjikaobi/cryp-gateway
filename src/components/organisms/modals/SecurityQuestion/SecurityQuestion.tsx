import { Dialog } from "@headlessui/react";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLabel from "@components/atoms/CustomLabel/CustomLabel";
import CustomLink from "@components/atoms/CustomLink/CustomLink";

import { ButtonProperties } from "@shared/libs/helpers";

const SecurityQuestion = () => {
  return (
    <div className="rounded-[50px] h-[611px] px-16 bg-white text-black">
      <Dialog.Title as="h4" className="pt-[69px] text-18 font-semibold mb-[14px]">
        Prove Your Identity
      </Dialog.Title>
      <hr className="mb-[65px]" />
      <h5 className="font-semibold mb-16">Answer your Security Question below</h5>
      <div className="">
        <div className="relative">
          <CustomLabel className="mb-4" id="question" title="My Best Friend" />
          <CustomInput
            className="border border-glass-450 rounded-[5px] h-[60px] mr-4 mt-2 mb-[30px]"
            container="px-6"
            id="question"
            inputClassName="placeholder:text-xs border-black"
            name="text"
            placeholder="Enter Security Answer "
            type="email"
          />
          <CustomLink customClass="absolute right-0 text-crypGreen-800" destination="#">
            Forgot Security Question?
          </CustomLink>
        </div>
        <div className="bg-citiBlue-200 text-center mt-24 rounded-md w-[10.25rem] tablet:w-[8.809rem] ml-[20%] tablet:ml-[30%]">
          <CustomButton
            customClass="!w-full font-14 rounded-md uppercase h-[3.75rem] tablet:h-[3.671rem]"
            handleClick={() => {}}
            size={ButtonProperties.SIZES.medium}
            title="continue"
            type="submit"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityQuestion;
