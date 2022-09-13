import Image from "next/image";
import React from "react";

import CustomLink from "@components/atoms/CustomLink/CustomLink";
import Icon from "@components/atoms/Icons";

import GetComfortableImg from "@images/home/get-comfortable.png";

const GetComfortable = () => {
  return (
    <div className="flex space-x-[11.5rem] pb-[7.25rem] justify-between items-center">
      <div>
        <h2 className="text-47 font-semibold w-[70%]">Get Comfortable and Trade Easily Both On The Web and USSD</h2>
        <p className="text-14 my-[2.313rem] w-[30.75rem] font-medium opacity-70">
          Selvage post-ironic you probably haven&apos;t heard of them ut hoodie knausgaard. Normcore pitchfork subway tile glossier praxis, tempor hot chicken single-origin coffee
          occupy sint try-hard XOXO. Hot chicken health goth jianbing, glossier
        </p>
        <CustomLink
          customClass="text-12 uppercase hover:text-crypYellow-300 smallLaptop:text-16 font-semibold text-crypYellow-200 absolute bottom-4 right-5 tablet:left-10 flex items-center"
          destination="#"
        >
          Get Started <Icon className="ml-4" name="yellowArrowRight" />
        </CustomLink>
      </div>
      <Image height={766} src={GetComfortableImg} width={464} />
    </div>
  );
};

export default GetComfortable;
