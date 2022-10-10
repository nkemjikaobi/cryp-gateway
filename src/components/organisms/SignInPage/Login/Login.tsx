import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import yupPassword from "yup-password";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import SecurityQuestion from "@components/organisms/modals/SecurityQuestion/SecurityQuestion";

import { ButtonProperties, errorMessages } from "@shared/libs/helpers";
yupPassword(Yup); // extend yup

const Login = () => {
  const [showSecurityQuestion, setShowSecurityQuestion] = useState<boolean>(false);

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    // todo
  };

  const initialState = {
    email: "",
    password: "",
  };

  interface Values {
    email: string;
    password: string;
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(errorMessages.required),
    password: Yup.string()
      .required(errorMessages.required)
      .min(8, errorMessages.minChar(8))
      .minLowercase(1, errorMessages.minLowerCase(1))
      .minUppercase(1, errorMessages.minUpperCase(2))
      .minNumbers(1, errorMessages.minNumber(1))
      .minSymbols(1, errorMessages.minSymbol(1)),
  });

  return (
    <>
      <div className="bg-white pt-[2.5rem] px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
        <h3 className="text-16 tablet:text-20 font-semibold">Nice to have you back @Adedam0la!</h3>
        <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
          Don’t have an account?{" "}
          <span className="text-crypGreen-800 ml-2">
            <CustomLink destination="/auth/sign-up">Register Now</CustomLink>
          </span>
        </div>
        <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={LoginSchema}>
          {(props: FormikProps<Values>) => (
            <Form>
              <div className="relative">
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                  container="px-6"
                  iconPosition="end"
                  id="date"
                  inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                />
                <CustomLink customClass="absolute right-0 text-crypGreen-800 text-14 tablet:text-base" destination="/auth/forgot-password">
                  Forgot Password?
                </CustomLink>
              </div>
              <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
                <CustomButton
                  customClass="mt-12"
                  handleClick={() => setShowSecurityQuestion(true)}
                  size={ButtonProperties.SIZES.big}
                  title="SIGN ME IN"
                  type="submit"
                  variant={ButtonProperties.VARIANT.primary.name}
                />
                {/* <p className="font-semibold">or Sign in with</p> */}
              </div>
            </Form>
          )}
        </Formik>

        {/* <SocialLogin /> */}
      </div>
      <CustomModal toggleVisibility={setShowSecurityQuestion} visibility={showSecurityQuestion}>
        <SecurityQuestion />
      </CustomModal>
    </>
  );
};

export default Login;
