import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";

import { ButtonProperties } from "@shared/libs/helpers";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[5.563rem] tablet:mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-medium mb-[3rem] tablet:mb-[6.938rem]">FORGOT PASSWORD</h3>
        <div className="relative tablet:mb-[8.125rem]">
          <CustomInput
            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
            container="tablet:px-6"
            inputClassName="placeholder:text-xs border-black"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center tablet:mb-[5.719rem]">
          <CustomButton
            customClass="mt-12"
            handleClick={() => router.push("/auth/reset-link-success")}
            size={ButtonProperties.SIZES.big}
            title="SEND RESET LINK"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
