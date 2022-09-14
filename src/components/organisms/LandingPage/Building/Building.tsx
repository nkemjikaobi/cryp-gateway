import { useRouter } from "next/router";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { ButtonProperties } from "@shared/libs/helpers";

const Building = () => {
  const router = useRouter();
  return (
    <>
      <div className="pt-32 bigLaptop:pt-48 pb-16 smallLaptop:pb-36 pl-[1.25rem] tablet:pl-[3.125rem]">
        <div className="">
          <p className="text-[1.255rem] leading-[1.763rem] font-semibold whitespace-nowrap bigLaptop:whitespace-normal tablet:leading-[4rem] smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[2.5rem] smallLaptop:text-[2.813rem] desktop:text-[4rem]  tablet:font-medium">
            Empowering African blockchain
          </p>
          <p className="text-[1.255rem] leading-[1.763rem] font-bold tablet:leading-[4rem] tablet:whitespace-nowrap bigLaptop:whitespace-normal  smallLaptop:leading-[5rem] desktop:leading-[6.375rem] tablet:text-[2.5rem] smallLaptop:text-[2.813rem] desktop:text-[4rem] tablet:font-medium">
            payments beyond borders
          </p>
          <p className="text-14 tablet:text-16 smallLaptop:text-18  opacity-60 smallLaptop:opacity-70 font-medium w-full tablet:w-[55%] mt-8 smallLaptop:mt-12">
            Individual or Merchant, empower your business today with Cryp. We help you make sense of your everyday web payments.
          </p>
          <CustomButton
            customClass="px-4 text-16 h-[3.75] bigLaptop:h-[5rem] mt-12"
            handleClick={() => router.push("/auth/sign-up")}
            size={ButtonProperties.SIZES.big}
            title="CREATE A FREE ACCOUNT WITH US"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
        {/* <div className="absolute top-40 right-0">
          <div className="">
            <Image height={523} src={CrypLocator} width={1051} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Building;
