import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const ForgotSecurityQuestionn = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 mb-[3.563rem] font-medium">FORGOT SECURITY QUESTION</h3>
        <p className="text-14 tablet:text-18 font-medium mt-[3.563rem] mb-[3.625rem] tablet:mb-[5.625rem]">
          Please send an email with the header “RESET SECURITY QUESTION” to cryp.africa@support.com
        </p>
        <CustomButton
          customClass="mt-12"
          handleClick={() => router.push("/auth/sign-in")}
          size={ButtonProperties.SIZES.big}
          title="GO BACK TO LOGIN"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </>
  );
};

export default ForgotSecurityQuestionn;
