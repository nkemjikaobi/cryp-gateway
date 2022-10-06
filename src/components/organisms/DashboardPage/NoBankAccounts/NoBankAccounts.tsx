import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

import NoImage from "@images/dashboard/emptyImage.png";

const NoBankAccounts = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <Image alt="No bank accounts image" height={229} src={NoImage} width={371} />
      <p className="mb-[2.625rem] mt-[3.188rem] text-14 smallLaptop:text-18 font-semibold smallLaptop:font-medium">You have no saved accounts yet</p>
      <CustomButton
        handleClick={() => router.push("/dashboard/withdraw/link-bank-account")}
        size={ButtonProperties.SIZES.big}
        title="LINK A BANK ACCOUNT"
        variant={ButtonProperties.VARIANT.primary.name}
      />
    </div>
  );
};

export default NoBankAccounts;
