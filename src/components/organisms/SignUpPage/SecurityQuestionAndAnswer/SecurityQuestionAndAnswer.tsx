import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { ButtonProperties } from "@shared/libs/helpers";

interface UserDetailsProps {
  step?: StepProps;
  isNotstepper?: boolean;
  callBack?: Function;
}
const SecurityQuestionAndAnswer = ({ step, isNotstepper, callBack }: UserDetailsProps) => {
  const router = useRouter();
  const handleSubmit = () => {
    if (isNotstepper) {
      callBack && callBack();
    } else {
      router.push("/auth/registration-success");
    }
  };
  return (
    <div
      className={`${
        isNotstepper
          ? "rounded-[1.875rem] tablet:rounded-[3.125rem] h-[23rem] tablet:h-[38.188rem] mx-[1.875rem] p-8 px-[1.125rem] overflow-y-scroll tablet:px-16 bg-white text-black"
          : ""
      }`}
    >
      <h3 className="text-16 tablet:text-20 font-medium">Security Question and Answer</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        Keep your money even safer, create your own custom security questions and answers
      </div>
      <h5 className="text-crypRed-500 text-14 font-medium mt-12 mb-[1.125rem]">Tip: Try creating questions and answers that are not generic or random for anyone else to know</h5>
      <div className="relative">
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Security Question 1"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Security Answer 1"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Security Question 2"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Security Answer 2"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Security Question 3"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Security Answer 3"
          type="text"
        />
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="mt-4"
          handleClick={() => handleSubmit()}
          size={ButtonProperties.SIZES.big}
          title={`${isNotstepper ? "RESET" : "COMPLETE REGISTRATION"}`}
          variant={ButtonProperties.VARIANT.primary.name}
        />
        {!isNotstepper && <CustomButton customClass="capitalize" handleClick={() => step?.goNextStep()} isGhost={true} title="skip for now" />}
      </div>
    </div>
  );
};

export default SecurityQuestionAndAnswer;

SecurityQuestionAndAnswer.defaultProps = {
  step: {},
  isNotstepper: false,
  callBack: () => {},
};
