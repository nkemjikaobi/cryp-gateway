import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

const VerifyEmailSuccess = () => {
  const router = useRouter();

  return (
    <div className="pt-[2.5rem] flex flex-col items-center justify-center px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
      <Icon className="mb-12 smallLaptop:mb-[7.375rem] w-[12.625rem] h-[8.375rem] smallLaptop:w-[16.813rem] smallLaptop:h-[10rem]" name="tick" />
      <h3 className="text-16 text-center tablet:text-30 font-semibold">Verified and Ready To Go!</h3>
      <div className="flex text-center items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        You have successfully verified this account. You can now sign in to begin
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="mt-12"
          handleClick={() => router.push("/auth/login")}
          size={ButtonProperties.SIZES.big}
          title="SIGN INTO MY NEW ACCOUNT"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default VerifyEmailSuccess;
