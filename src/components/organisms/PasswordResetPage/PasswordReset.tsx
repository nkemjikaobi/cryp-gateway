import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import SecurityQuestion from "@components/organisms/modals/SecurityQuestion/SecurityQuestion";

import { ButtonProperties } from "@shared/libs/helpers";

const PasswordReset = () => {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-semibold mb-[2.438rem]">Password Reset</h3>
        <div className="relative">
          <CustomInput
            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[5.813rem]"
            container="px-6"
            iconPosition="end"
            id="date"
            inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
            name="arrivalTime"
            placeholder="Enter New Password"
            type="password"
          />
          <CustomInput
            className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-4"
            container="px-6"
            iconPosition="end"
            id="date"
            inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
            name="arrivalTime"
            placeholder="Confirm New Password"
            type="password"
          />
        </div>
        <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
          <CustomButton
            customClass="mt-12"
            handleClick={() => setShowSecurityQuestion(true)}
            size={ButtonProperties.SIZES.big}
            title="RESET PASSWORD"
            variant={ButtonProperties.VARIANT.primary.name}
          />
        </div>
      </div>
      <CustomModal toggleVisibility={setShowSecurityQuestion} visibility={showSecurityQuestion}>
        <SecurityQuestion />
      </CustomModal>
    </>
  );
};

export default PasswordReset;
