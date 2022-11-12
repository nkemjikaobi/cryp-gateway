import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";

import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";

import { SEND_PASSWORD_RESET_CODE } from "@graphql/auth/mutations";

import { ButtonProperties, handleGraphQLErrors, NotificationTypes } from "@shared/libs/helpers";

const ResetLinkSuccess = () => {
  const router = useRouter();
  const { email } = router?.query || {};

  const [sendPasswordResetCode, { data, loading, error }] = useMutation(SEND_PASSWORD_RESET_CODE);

  const sendResetCode = async () => {
    await sendPasswordResetCode({
      variables: {
        email,
      },
    });
  };

  useEffect(() => {
    if (data) {
      crypToast(NotificationTypes.SUCCESS, "Email Resent");
    }

    if (error) {
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 mb-[3.563rem] font-medium">FORGOT PASSWORD</h3>
        <p className="text-14 tablet:text-18 font-medium mt-[3.563rem] mb-[3.625rem] tablet:mb-[5.625rem]">A password re-set link has been sent {email && `to ${email}`}</p>
        {loading ? <ImSpinner9 className="animate-spin" /> : <CustomButton customClass="capitalize" handleClick={() => sendResetCode()} isGhost={true} title="resend link" />}
        <CustomButton
          customClass="mt-12"
          handleClick={() => router.push("/auth/sign-in")}
          size={ButtonProperties.SIZES.big}
          title="GO BACK TO LOGIN"
          type="submit"
          variant={ButtonProperties.VARIANT.primary.name}
        />
      </div>
    </>
  );
};

export default ResetLinkSuccess;
