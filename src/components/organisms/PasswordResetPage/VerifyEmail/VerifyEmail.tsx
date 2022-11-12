// import { useMutation } from "@apollo/client";
import React, { useState } from "react";

// import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";

// import { CREATE_PIN } from "@graphql/auth/mutations";

import { ButtonProperties } from "@shared/libs/helpers";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string>("");
  // const [createPin, { data, loading, error }] = useMutation(CREATE_PIN);

  const handleOtpChange = async (otp: string) => {
    if (otp) {
      setOtp(otp);
    }
  };

  // const createUserPin = async () => {

  //   const pinDetails = { pin: otp };

  //   await createPin({
  //     variables: {
  //       input: {
  //         ...pinDetails,
  //       },
  //     },
  //   });
  // };

  // useEffect(() => {
  //   if (data) {
  //     crypToast("Email verified");
  //   }

  //   if (error) {
  //     handleGraphQLErrors(error);
  //   }
  // }, [data, error]);

  return (
    <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
      <h3 className="text-16 tablet:text-20 font-medium">VERIFY YOUR EMAIL ADDRESS</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        To complete your profile set-up, please enter the verification code sent to your email
      </div>
      <div className="relative">
        <div className="mb-[3.313rem]">
          <h3 className="text-16 tablet:text-18 font-medium">Enter Verification Code</h3>
          <OtpComponent isInputNum={true} isInputSecure={true} numInputs={4} onChange={handleOtpChange} otp={otp} value={otp} />
        </div>
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="mt-12"
          handleClick={() => {}}
          // isDisabled={loading}
          // isSubmitting={loading}
          size={ButtonProperties.SIZES.big}
          title="VERIFY MY EMAIL NOW"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        <CustomButton customClass="capitalize" handleClick={() => {}} isGhost={true} title="resend link" />
      </div>
    </div>
  );
};

export default VerifyEmail;
