import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { ButtonProperties } from "@shared/libs/helpers";

interface UserDetailsProps {
  step: StepProps;
}
const SecurityQuestionAndAnswer = ({ step }: UserDetailsProps) => {
  const router = useRouter();
  return (
    <>
      <h3 className="text-16 tablet:text-20 font-semibold">Security Question and Answer</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        Keep your money even safer, create your own custom security questions and answers
      </div>
      <h5 className="text-crypRed-500 text-14 font-semibold mt-12 mb-[1.125rem]">Tip: Try creating questions and answers that are not generic or random for anyone else to know</h5>
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
          handleClick={() => router.push("/auth/registration-success")}
          size={ButtonProperties.SIZES.big}
          title="COMPLETE REGISTRATION"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomButton customClass="capitalize" handleClick={() => step.goNextStep()} isGhost={true} title="skip for now" />
      </div>
    </>
  );
};

export default SecurityQuestionAndAnswer;
