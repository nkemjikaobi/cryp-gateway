import React from "react";

import StepperComponent, { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

import SecurityQuestionAndAnswer from "../SecurityQuestionAndAnswer/SecurityQuestionAndAnswer";
import TransactionPin from "../TransactionPin/TransactionPin";

const ContinueRegister = () => {
  return (
    <>
      <StepperComponent steps={createAccountStep} />
    </>
  );
};

export default ContinueRegister;

const createAccountStep = [
  { element: (stepProps: StepProps) => <TransactionPin step={stepProps} /> },
  { element: (stepProps: StepProps) => <SecurityQuestionAndAnswer step={stepProps} /> },
];
