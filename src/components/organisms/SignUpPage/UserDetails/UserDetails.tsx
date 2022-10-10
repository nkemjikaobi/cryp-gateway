import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import yupPassword from "yup-password";

yupPassword(Yup); // extend yup

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";
import CustomInput from "@components/atoms/CustomInput/CustomInput";
import CustomLink from "@components/atoms/CustomLink/CustomLink";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { ButtonProperties, errorMessages, subtractYears } from "@shared/libs/helpers";

import "react-datepicker/dist/react-datepicker.css";

interface UserDetailsProps {
  step: StepProps;
}
const UserDetails = ({ step }: UserDetailsProps) => {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    // todo
  };

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  interface Values {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    username: string;
    password: string;
    confirmPassword: string;
  }

  const UserDetailsSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    email: Yup.string().email("Invalid email").required(errorMessages.required),
    phoneNumber: Yup.string().min(11, errorMessages.minChar(11)).max(50, "Too Long!").required(errorMessages.required),
    dateOfBirth: Yup.date().required(errorMessages.required),
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    password: Yup.string()
      .required(errorMessages.required)
      .min(8, errorMessages.minChar(8))
      .minLowercase(1, errorMessages.minLowerCase(1))
      .minUppercase(1, errorMessages.minUpperCase(1))
      .minNumbers(1, errorMessages.minNumber(1))
      .minSymbols(1, errorMessages.minSymbol(1)),
    confirmPassword: Yup.string()
      .required(errorMessages.required)
      .oneOf([Yup.ref("password"), null], errorMessages.passwordMatch),
  });

  return (
    <>
      <h3 className="text-16 tablet:text-20 font-semibold">
        Experience <span className="text-crypYellow-200">limitless payments</span> when you register with us
      </h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        Already have an account?
        <span className="text-crypGreen-800 ml-2">
          <CustomLink destination="/auth/sign-in">Sign in</CustomLink>
        </span>
      </div>
      <div className="flex text-crypRed-500 items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">*All fields are required</div>
      <Formik enableReinitialize initialValues={initialState} onSubmit={handleSubmit} validationSchema={UserDetailsSchema}>
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="relative">
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="firstName"
                placeholder="Enter First Name"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="lastName"
                placeholder="Enter Last Name"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="email"
                placeholder="Enter Your Email Address"
                type="email"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                type="tel"
              />

              <DatePicker
                customInput={
                  <CustomInput
                    className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 mb-[1.875rem]"
                    container=""
                    icon="calendar2"
                    iconPosition="end"
                    id="date"
                    inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black bg-citiBlue-80"
                    name="dateOfBirth"
                    type="text"
                  />
                }
                dateFormat="yyyy-MM-dd"
                maxDate={subtractYears(18)}
                name="dateOfBirth"
                onChange={(date: Date) => setDepartureDate(date)}
                placeholderText="Date of Birth"
                selected={departureDate}
                showMonthDropdown
                showYearDropdown
              />

              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="username"
                placeholder="Enter Username"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="px-6"
                iconPosition="end"
                inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                name="password"
                placeholder="Enter Password"
                type="password"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="px-6"
                iconPosition="end"
                inputClassName="placeholder:text-xs mobileBelow:ml-4 border-black"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
              <div>
                <CustomCheckBox
                  className="mt-[1.813rem] "
                  label="Keep me signed in"
                  labelClassName="text-14 ml-[0.313rem] font-semibold whitespace-nowrap"
                  labelPosition="end"
                  shape="square"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
              <CustomButton
                customClass="mt-12"
                handleClick={() => step.goNextStep()}
                size={ButtonProperties.SIZES.big}
                title="REGISTER ME"
                type="submit"
                variant={ButtonProperties.VARIANT.primary.name}
              />
              {/* <p className="font-semibold">or register with</p> */}
            </div>
          </Form>
        )}
      </Formik>

      {/* <SocialLogin /> */}
    </>
  );
};

export default UserDetails;
