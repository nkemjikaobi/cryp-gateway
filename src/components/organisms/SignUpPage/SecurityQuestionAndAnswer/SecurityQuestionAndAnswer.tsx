import { useMutation } from "@apollo/client";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as Yup from "yup";
import yupPassword from "yup-password";

yupPassword(Yup); // extend yup

import { crypToast } from "@components/atoms/CrypToast/CrypToast";
import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import { CREATE_SECURITY_QUESTION } from "@graphql/auth/mutations";

import { ButtonProperties, errorMessages, handleGraphQLErrors, NotificationTypes } from "@shared/libs/helpers";

interface UserDetailsProps {
  step?: StepProps;
  isNotstepper?: boolean;
  callBack?: Function;
}
const SecurityQuestionAndAnswer = ({ step, isNotstepper, callBack }: UserDetailsProps) => {
  const router = useRouter();
  const [createSecurityQuestion, { data, loading, error }] = useMutation(CREATE_SECURITY_QUESTION);

  const initialState = {
    firstQuestion: "",
    firstAnswer: "",
    secondQuestion: "",
    secondAnswer: "",
    thirdQuestion: "",
    thirdAnswer: "",
  };

  interface Values {
    firstQuestion: string;
    firstAnswer: string;
    secondQuestion: string;
    secondAnswer: string;
    thirdQuestion: string;
    thirdAnswer: string;
  }

  const CreateQuestionsSchema = Yup.object().shape({
    firstQuestion: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    firstAnswer: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    secondQuestion: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    secondAnswer: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    thirdQuestion: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
    thirdAnswer: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(errorMessages.required),
  });

  const createQuestions = async (values: Values) => {
    await createSecurityQuestion({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      crypToast(NotificationTypes.SUCCESS, "Questions created");
      if (isNotstepper) {
        callBack && callBack();
      } else {
        router.push("/auth/registration-success");
      }
    }

    if (error) {
      handleGraphQLErrors(error);
    }
  }, [data, error]);

  return (
    <div
      className={`${
        isNotstepper
          ? "rounded-[1.875rem] tablet:rounded-[3.125rem] h-[23rem] tablet:h-[38.188rem] mx-[1.875rem] p-8 px-[1.125rem] overflow-y-scroll tablet:px-16 bg-white text-black"
          : ""
      }`}
    >
      <h3 className="text-16 tablet:text-20 font-medium">Security Question and Answer</h3>
      <div className="flex items-center mt-[2.313rem] mb-[3.563rem] text-14 tablet:text-18 font-medium">
        Keep your money even safer, create your own custom security questions and answers
      </div>
      <h5 className="text-crypRed-500 text-14 font-medium mt-12 mb-[1.125rem]">Tip: Try creating questions and answers that are not generic or random for anyone else to know</h5>
      <Formik enableReinitialize initialValues={initialState} onSubmit={createQuestions} validationSchema={CreateQuestionsSchema}>
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="relative">
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="firstQuestion"
                placeholder="Security Question 1"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="firstAnswer"
                placeholder="Security Answer 1"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="secondQuestion"
                placeholder="Security Question 2"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="secondAnswer"
                placeholder="Security Answer 2"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="thirdQuestion"
                placeholder="Security Question 3"
                type="text"
              />
              <FormikCustomInput
                className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2"
                container="tablet:px-6"
                inputClassName="placeholder:text-xs border-black"
                name="thirdAnswer"
                placeholder="Security Answer 3"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-[2.5rem] tablet:space-y-[3.188rem] justify-center items-center">
              <CustomButton
                customClass="mt-4"
                handleClick={() => {}}
                isDisabled={loading}
                isSubmitting={loading}
                size={ButtonProperties.SIZES.big}
                title={`${isNotstepper ? "RESET" : "COMPLETE REGISTRATION"}`}
                type="submit"
                variant={ButtonProperties.VARIANT.primary.name}
              />
              {!isNotstepper && <CustomButton customClass="capitalize" handleClick={() => router.push("/auth/registration-success")} isGhost={true} title="skip for now" />}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SecurityQuestionAndAnswer;

SecurityQuestionAndAnswer.defaultProps = {
  step: {},
  isNotstepper: false,
  callBack: () => {},
};
