import { Dialog } from "@headlessui/react";
import React from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import Icon from "@components/atoms/Icons";

import { ButtonProperties } from "@shared/libs/helpers";

// const ThankYouData = [
//   {
//     id: 1,
//     name: "discord",
//     route: "#",
//   },
//   {
//     id: 2,
//     name: "telegram",
//     route: "https://t.me/CrypAfrica",
//   },
//   {
//     id: 3,
//     name: "whatsapp",
//     route: "#",
//   },
// ];

interface ThankYouProps {
  setThankYou: Function;
}

const ThankYou = ({ setThankYou }: ThankYouProps) => {
  const handleJoinCommunity = () => {
    window.open("https://t.me/CrypAfrica", "_blank");
  };
  return (
    <div className="flex flex-col justify-center rounded-2xl items-center bg-waitList bg-no-repeat bg-cover bg-center relative">
      <div className="bg-glass-100 rounded-[10.313rem] absolute top-0 left-0 backdrop-blur-[100px] h-full w-full" />
      <Icon className="absolute right-6 top-4 cursor-pointer" name="cancel" onClick={() => setThankYou(false)} />
      <Dialog.Title as="h4" className="mb-4 capitalize text-[2.313rem] opacity-95 whitespace-nowrap font-semibold mt-8">
        Thank You!
      </Dialog.Title>
      <p className="capitalize my-8 tablet:my-16 text-14 w-[80%] opacity-95 text-center font-medium">Join our community to stay in touch with us </p>
      {/* <div className="flex p-16 opacity-95">
        {ThankYouData.map((data) => (
          <a href={data.route} key={data.id} rel="noreferrer" target="_blank">
            <Icon className="w-[2.449rem] h-[2.449rem] tablet:w-[4.009rem] tablet:h-[4.009rem] mx-4" name={data.name} />
          </a>
        ))}
      </div> */}
      <div className="flex justify-center items-center mb-8 opacity-95">
        <CustomButton
          customClass="mt-12 w-[10.25rem] h-[3.75] bigLaptop:h-[5rem] bigLaptop:w-[12rem]"
          handleClick={handleJoinCommunity}
          size={ButtonProperties.SIZES.small}
          title="JOIN COMMUNITY"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </div>
  );
};

export default ThankYou;
