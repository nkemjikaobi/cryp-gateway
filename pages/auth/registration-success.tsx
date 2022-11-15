import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import AuthLayout from "@components/layouts/AuthLayout/AuthLayout";

import { ButtonProperties } from "@shared/libs/helpers";

import NoImage from "@images/dashboard/emptyImage.png";

const RegistrationSuccess: NextPage = () => {
  const router = useRouter();
  return (
    <AuthLayout title="Registration Success">
      <div className="flex flex-col justify-center items-center mt-24">
        <Image alt="No bank accounts image" height={229} src={NoImage} width={371} />
        <h2 className="text-center text-30 font-medium mt-[3.813rem] mb-[4.188rem]">Congratulations and Welcome to CRYP! </h2>
        <p className="text-18 font-medium text-center w-[80%] television:w-full">
          It doesn’t end here. You can have all our <span className="text-crypGreen-800">PRO level features</span> at your fingertips today if you add a
          <span className="text-crypGreen-800"> Business Account for FREE</span> !
        </p>
        <CustomButton
          customClass="mt-[4.063rem] mb-8 smallLaptop:mb-[4.813rem]"
          handleClick={() => router.push("/dashboard/profile/add-a-business-account")}
          size={ButtonProperties.SIZES.big}
          title="ADD A BUSINESS ACCOUNT NOW"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomButton customClass="capitalize" handleClick={() => router.push("/dashboard/payments")} isGhost={true} title="skip for now" />
      </div>
    </AuthLayout>
  );
};

export default RegistrationSuccess;
