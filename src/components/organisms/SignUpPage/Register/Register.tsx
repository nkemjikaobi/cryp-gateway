import React from "react";

import StepperComponent, { StepProps } from "@components/atoms/StepperComponent/StepperComponent";

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
  { element: (stepProps: StepProps) => <div>nkem</div> },
  { element: (stepProps: StepProps) => <div>lmaoo</div> },
  { element: (stepProps: StepProps) => <div>lmaoo</div> },
];
