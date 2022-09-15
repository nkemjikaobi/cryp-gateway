import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import SecurityQuestion from "@components/organisms/modals/SecurityQuestion/SecurityQuestion";
import SocialLogin from "@components/organisms/SocialLogin/SocialLogin";

import { ButtonProperties } from "@shared/libs/helpers";

const Login = () => {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-semibold">Nice to have you back @Adedam0la!</h3>
        <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
          Don’t have an account?{" "}
          <span className="text-crypGreen-800 ml-2">
            <CustomLink destination="/auth/sign-up">Register Now</CustomLink>
          </span>
        </div>
        <div className="relative">
          <CustomInput
            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
            container="tablet:px-6"
            inputClassName="placeholder:text-xs border-black"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <CustomInput
            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-4"
            container="px-6"
            iconPosition="end"
            id="date"
            inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
            name="arrivalTime"
            type="password"
          />
          <CustomLink customClass="absolute right-0 text-crypGreen-800 text-14 tablet:text-base" destination="#">
            Forgot Password?
          </CustomLink>
        </div>
        <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
          <CustomButton
            customClass="px-4 text-12 tablet:text-16 h-[3.75] bigLaptop:h-[5rem] mt-12"
            handleClick={() => setShowSecurityQuestion(true)}
            size={ButtonProperties.SIZES.medium}
            title="SIGN ME IN"
            variant={ButtonProperties.VARIANT.primary.name}
          />
          <p className="font-semibold">or Sign in with</p>
        </div>
        <SocialLogin />
      </div>
      <CustomModal toggleVisibility={setShowSecurityQuestion} visibility={showSecurityQuestion}>
        <SecurityQuestion />
      </CustomModal>
    </>
  );
};

export default Login;
