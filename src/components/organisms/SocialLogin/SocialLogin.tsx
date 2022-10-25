import React from "react";

import Icon from "@components/atoms/Icons";

const SocialLogin = () => {
  return (
    <div className="mt-[2.125rem] space-x-4 flex items-center justify-between">
      {SocialsData.map((social) => (
        <div
          className="flex items-center justify-center space-x-2 cursor-pointer rounded-[0.625rem] w-[11.875rem] tablet:w-[15.125rem] h-[2.938rem] tablet:h-[3.75rem] border border-glass-450"
          key={social.id}
        >
          <Icon name={social.icon} />
          <p className="capitalize font-medium text-14">{social.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialLogin;

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
