import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";
import { AppState } from "src/store/rootReducer";

import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";

import { SEND_EMAIL_CODE, USE_EMAIL_CODE } from "@graphql/auth/mutations";

import { ButtonProperties, handleGraphQLErrors, NotificationTypes } from "@shared/libs/helpers";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string>("");
  const [useEmailCode, { data, loading, error }] = useMutation(USE_EMAIL_CODE);
  const [sendEmailCode, { data: sendData, loading: sendLoading, error: sendError }] = useMutation(SEND_EMAIL_CODE);
  const { user } = useSelector((state: AppState) => state.auth || {});

  const router = useRouter();

  const handleOtpChange = async (otp: string) => {
    if (otp) {
      setOtp(otp);
    }
  };

  const verifyCode = async () => {
    const codeDetails = { code: otp };

    await useEmailCode({
      variables: {
        ...codeDetails,
      },
    });
  };

  useEffect(() => {
    if (data) {
      router.push("/auth/verify-email-success");
    }

    if (error) {
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  const resendCode = async () => {
    const emailDetails = { email: user.email };

    await sendEmailCode({
      variables: {
        ...emailDetails,
      },
    });
  };

  useEffect(() => {
    if (sendData) {
      crypToast(NotificationTypes.SUCCESS, "Code resent");
    }

    if (sendError) {
      handleGraphQLErrors(sendError);
    }
  }, [sendData, sendError]);

  return (
    <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
      <h3 className="text-16 tablet:text-20 font-medium">VERIFY YOUR EMAIL ADDRESS</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        To complete your profile set-up, please enter the verification code sent to your email
      </div>
      <div className="relative">
        <div className="mb-[3.313rem]">
          <h3 className="text-16 tablet:text-18 font-medium">Enter Verification Code</h3>
          <OtpComponent isInputNum={true} isInputSecure={true} numInputs={6} onChange={handleOtpChange} otp={otp} value={otp} />
        </div>
      </div>
      <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
        <CustomButton
          customClass="mt-12"
          handleClick={() => verifyCode()}
          isDisabled={loading}
          isSubmitting={loading}
          size={ButtonProperties.SIZES.big}
          title="VERIFY MY EMAIL NOW"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
        {sendLoading ? <ImSpinner9 className="animate-spin" /> : <CustomButton customClass="capitalize" handleClick={() => resendCode()} isGhost={true} title="resend link" />}
      </div>
    </div>
  );
};

export default VerifyEmail;
