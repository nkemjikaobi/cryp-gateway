import { useRouter } from "next/router";
import React from "react";

import Icon from "@components/atoms/Icons";

const AddABusiness = () => {
  const router = useRouter();

  return (
    <div className="w-[21.438rem] tablet:w-[90%] smallLaptop:w-[46rem] mx-auto px-4 smallLaptop:pl-[3.375rem] smallLaptop:pr-[3.938rem] mt-[6.5rem] mb-32">
      <h3 className="text-18 font-medium">How should we register you?</h3>
      <div className="mt-[50px]">
        {AddABusinessData.map((business) => (
          <div
            className="bg-crypGray-150 mb-[2.875rem] pl-[2.188rem] pt-[1.25rem] pb-[87px] pr-[4.813rem] rounded-[0.938rem] cursor-pointer border border-crypGray-170"
            key={business.id}
            onClick={() => router.push(business.route)}
          >
            <Icon name={business.icon} />
            <h3 className="mt-[1.25rem] mb-[1.625rem] text-18 font-medium">{business.title}</h3>
            <p className="text-14 font-medium smallLaptop:w-[36rem]">{business.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddABusiness;

const AddABusinessData = [
  {
    id: 1,
    icon: "badge",
    title: "As A Registered Business",
    description: "You will need to provide your buiness registration certificate/license, a valid ID card and Utility Bill if you choose to onboard as a registered business",
    route: "/dashboard/profile/add-a-business-account/registered-business",
  },
  {
    id: 2,
    icon: "loader",
    title: "As An Un-registered Business",
    description:
      "Still in the process of registering your business? You will be required to provide only a valid ID card and Utility Bill if you choose to onboard as an un-registered business",
    route: "/dashboard/profile/add-a-business-account/unregistered-business",
  },
];
