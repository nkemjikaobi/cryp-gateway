import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";
import SocialLogin from "@components/organisms/SocialLogin/SocialLogin";

import { ButtonProperties } from "@shared/libs/helpers";

interface UserDetailsProps {
  step: StepProps;
}
const UserDetails = ({ step }: UserDetailsProps) => {
  return (
    <>
      <h3 className="text-16 tablet:text-20 font-semibold">
        Experience <span className="text-crypYellow-200">limitless payments</span> when you register with us
      </h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        Already have an account?
        <span className="text-crypGreen-800 ml-2">
          <CustomLink destination="/auth/sign-in">Sign in</CustomLink>
        </span>
      </div>
      <div className="relative">
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Enter Business Name"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Enter Phone Number"
          type="tel"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="email"
          placeholder="Enter Your Email Address"
          type="email"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
          container="tablet:px-6"
          inputClassName="placeholder:text-xs border-black"
          name="username"
          placeholder="Enter Username"
          type="text"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-4"
          container="px-6"
          iconPosition="end"
          inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
          name="arrivalTime"
          placeholder="Enter Password"
          type="password"
        />
        <CustomInput
          className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-4"
          container="px-6"
          iconPosition="end"
          inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
          name="arrivalTime"
          placeholder="Confirm Password"
          type="password"
        />
        <div>
          <CustomCheckBox
            className="mt-[1.813rem] "
            label="Keep me signed in"
            labelClassName="text-14 ml-[0.313rem] font-semibold whitespace-nowrap"
            labelPosition="end"
            shape="square"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="px-4 text-12 tablet:text-16 h-[3.75] bigLaptop:h-[5rem] mt-12"
          handleClick={() => step.goNextStep()}
          size={ButtonProperties.SIZES.medium}
          title="REGISTER ME"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <p className="font-semibold">or register with</p>
      </div>
      <SocialLogin />
    </>
  );
};

export default UserDetails;
