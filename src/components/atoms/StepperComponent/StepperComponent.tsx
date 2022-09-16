import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Icon from "../Icons";

interface StepperComponentProps {
  steps: Step[];
}

interface Step {
  element: (stepProps: StepProps) => JSX.Element;
}

const StepperComponent = ({ steps }: StepperComponentProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [, setIsFirst] = useState<boolean>(true);
  const [, setIsLast] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // moveStepper();
      checkPosition();
    }

    return () => {
      mounted = false;
    };
  }, [currentStep]);

  const goNextStep = () => {
    const nextStep = currentStep + 1;

    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  };

  const goPreviousStep = () => {
    const previousStep = currentStep - 1;

    if (previousStep >= 1) {
      setCurrentStep(previousStep);
    }
  };

  const checkPosition = () => {
    const first = currentStep === 1;
    const last = currentStep === steps.length;
    setIsFirst(first);
    setIsLast(last);
  };

  return (
    <div className="bg-white pt-[2.5rem] mb-[2.563rem] isolate px-[1.875rem] tablet:px-[4.688rem] pb-[3.813rem] tablet:w-[46rem] mx-[1rem] tablet:mx-auto mt-[3.563rem] rounded-[3.125rem] shadow-auth">
      <div className="flex items-center justify-center mb-[46px]">
        {steps.map((step, index) => (
          <div key={uuidv4()}>
            {currentStep >= index + 1 ? (
              <Icon className="mr-2 w-[4.438rem] tablet:w-[8.438rem]" name="rectangleFilled" />
            ) : (
              <Icon className="mr-2 w-[4.438rem] tablet:w-[8.438rem]" name="rectangleEmpty" />
            )}
          </div>
        ))}
      </div>
      <div>
        {steps.map((step, index) => (
          <div key={uuidv4()}>
            {currentStep === index + 1 && (
              <step.element
                currentStep={currentStep}
                goNextStep={goNextStep}
                goPreviousStep={goPreviousStep}
                isFirst={index === 0}
                isLast={index === steps.length - 1}
                step={index + 1}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperComponent;

export interface StepProps {
  goNextStep: () => void;
  goPreviousStep: () => void;
  currentStep: number;
  isLast: boolean;
  isFirst: boolean;
  step: number;
}
