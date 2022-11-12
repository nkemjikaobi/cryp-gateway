import React from "react";

import StepperComponent, { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import SecurityQuestionAndAnswer from "../SecurityQuestionAndAnswer/SecurityQuestionAndAnswer";
import TransactionPin from "../TransactionPin/TransactionPin";
import UserDetails from "../UserDetails/UserDetails";

const Register = () => {
  return (
    <>
      <StepperComponent steps={createAccountStep} />
    </>
  );
};

export default Register;

const createAccountStep = [
  { element: (stepProps: StepProps) => <UserDetails step={stepProps} /> },
  // { element: (stepProps: StepProps) => <UploadDocuments step={stepProps} /> },
  { element: (stepProps: StepProps) => <TransactionPin step={stepProps} /> },
  { element: (stepProps: StepProps) => <SecurityQuestionAndAnswer step={stepProps} /> },
];
