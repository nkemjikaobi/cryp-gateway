import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import Icon from "@components/atoms/Icons";
import SecurityQuestion from "@components/organisms/modals/SecurityQuestion/SecurityQuestion";

import { ButtonProperties } from "@shared/libs/helpers";

const Login = () => {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white pt-[40px] px-[30px] tablet:px-[75px] pb-[61px] tablet:w-[736px] mx-[16px] tablet:mx-auto mt-[57px] rounded-[50px] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-semibold">Nice to have you back @Adedam0la!</h3>
        <div className="flex items-center mt-[37px] mb-[57px] text-14 tablet:text-18 font-medium">
          Don’t have an account?{" "}
          <span className="text-crypGreen-800 ml-2">
            <CustomLink destination="/auth/sign-up">Register Now</CustomLink>
          </span>
        </div>
        <div className="relative">
          <CustomInput
            className="border border-glass-450 rounded-[5px] h-[60px] mr-4 mt-2 mb-[30px]"
            container="tablet:px-6"
            inputClassName="placeholder:text-xs border-black"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <CustomInput
            className="border border-glass-450 rounded-[5px] h-[60px] mr-4 mt-2 mb-4"
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
        <div className="flex flex-col space-y-[40px] tablet:space-y-[51px] justify-center items-center">
          <CustomButton
            customClass="px-4 text-12 tablet:text-16 h-[3.75] bigLaptop:h-[5rem] mt-12"
            handleClick={() => setShowSecurityQuestion(true)}
            size={ButtonProperties.SIZES.medium}
            title="SIGN ME IN"
            variant={ButtonProperties.VARIANT.primary.name}
          />
          <p className="font-semibold">or Sign in with</p>
        </div>
        <div className="mt-[34px] flex items-center justify-between">
          {SocialsData.map((social) => (
            <div
              className="flex items-center justify-center space-x-2 cursor-pointer rounded-[10px] w-[130px] tablet:w-[242px] h-[47px] tablet:h-[60px] border border-glass-450"
              key={social.id}
            >
              <Icon name={social.icon} />
              <p className="capitalize font-semibold text-14">{social.name}</p>
            </div>
          ))}
        </div>
      </div>
      <CustomModal toggleVisibility={setShowSecurityQuestion} visibility={showSecurityQuestion}>
        <SecurityQuestion />
      </CustomModal>
    </>
  );
};

export default Login;

const SocialsData = [
  {
    id: 1,
    icon: "google",
    name: "google",
  },
  {
    id: 2,
    icon: "facebook",
    name: "facebook",
  },
];
