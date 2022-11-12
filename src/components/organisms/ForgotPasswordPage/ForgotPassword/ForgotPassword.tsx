import { useMutation } from "@apollo/client";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import yupPassword from "yup-password";

yupPassword(Yup); // extend yup

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";

import { SEND_PASSWORD_RESET_CODE } from "@graphql/auth/mutations";

import { ButtonProperties, errorMessages, handleGraphQLErrors } from "@shared/libs/helpers";

const ForgotPassword = () => {
  const router = useRouter();
  const [sendPasswordResetCode, { data, loading, error }] = useMutation(SEND_PASSWORD_RESET_CODE);
  const [userEmail, setUserEmail] = useState<string>("");

  const initialState = {
    email: "",
  };

  interface Values {
    email: string;
  }

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(errorMessages.required),
  });

  const sendResetCode = async (values: Values) => {
    setUserEmail(values.email);
    await sendPasswordResetCode({
      variables: {
        ...values,
      },
    });
  };

  useEffect(() => {
    if (data) {
      router.push({
        pathname: "/auth/reset-link-success",
        query: { email: userEmail },
      });
    }

    if (error) {
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[5.563rem] tablet:mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-medium mb-[3rem] tablet:mb-[6.938rem]">FORGOT PASSWORD</h3>
        <Formik enableReinitialize initialValues={initialState} onSubmit={sendResetCode} validationSchema={ForgotPasswordSchema}>
          {(props: FormikProps<Values>) => (
            <Form>
              <div className="relative tablet:mb-[8.125rem]">
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center tablet:mb-[5.719rem]">
                <CustomButton
                  customClass="mt-12"
                  handleClick={() => {}}
                  isDisabled={loading}
                  isSubmitting={loading}
                  size={ButtonProperties.SIZES.big}
                  title="SEND RESET LINK"
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

export default ForgotPassword;
