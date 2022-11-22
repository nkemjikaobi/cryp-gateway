import { useMutation } from "@apollo/client";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import yupPassword from "yup-password";

import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import OtpComponent from "@components/atoms/OtpComponent/OtpComponent";
yupPassword(Yup); // extend yup

import { RESET_PASSWORD } from "@graphql/auth/mutations";

import { ButtonProperties, errorMessages, handleGraphQLErrors, NotificationTypes } from "@shared/libs/helpers";

const PasswordReset = () => {
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);
  const [otp, setOtp] = useState<string>("");

  const router = useRouter();
  const query = router.query;
  const { email } = query;

  const handleOtpChange = async (otp: string) => {
    if (otp) {
      setOtp(otp);
    }
  };

  const initialState = {
    oldPassword: "",
    newPassword: "",
  };

  interface Values {
    oldPassword: string;
    newPassword: string;
  }

  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required(errorMessages.required)
      .min(8, errorMessages.minChar(8))
      .minLowercase(1, errorMessages.minLowerCase(1))
      .minUppercase(1, errorMessages.minUpperCase(1))
      .minNumbers(1, errorMessages.minNumber(1))
      .minSymbols(1, errorMessages.minSymbol(1)),
    newPassword: Yup.string()
      .required(errorMessages.required)
      .oneOf([Yup.ref("oldPassword"), null], errorMessages.passwordMatch),
  });

  const sendResetCode = async (values: Values) => {
    const passDetails = { code: otp, newPassword: values.newPassword, email };

    await resetPassword({
      variables: {
        input: {
          ...passDetails,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      crypToast(NotificationTypes.SUCCESS, "Password reset");
      setTimeout(() => {
        router.push("/auth/sign-in");
      }, 1500);
    }

    if (error) {
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-medium mb-[2.438rem]">Password Reset</h3>
        <Formik enableReinitialize initialValues={initialState} onSubmit={sendResetCode} validationSchema={ChangePasswordSchema}>
          {(props: FormikProps<Values>) => (
            <Form>
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-14 tablet:text-16 font-medium">Enter Reset Code</h3>

                  <OtpComponent isInputNum={true} isInputSecure={true} numInputs={6} onChange={handleOtpChange} otp={otp} value={otp} />
                </div>

                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[5.813rem]"
                  container="px-6"
                  iconPosition="end"
                  id="date"
                  inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                  name="oldPassword"
                  placeholder="Enter New Password"
                  type="password"
                />
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-4"
                  container="px-6"
                  iconPosition="end"
                  id="date"
                  inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                  name="newPassword"
                  placeholder="Confirm New Password"
                  type="password"
                />
              </div>
              <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
                <CustomButton
                  customClass="mt-12"
                  handleClick={() => {}}
                  isDisabled={loading}
                  isSubmitting={loading}
                  size={ButtonProperties.SIZES.big}
                  title="RESET PASSWORD"
                  type="submit"
                  variant={ButtonProperties.VARIANT.primary.name}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PasswordReset;
