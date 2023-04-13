import React, { useState } from 'react';

export interface Step<K extends string> {
  name: K;
  component: React.ReactNode;
}

export const useSteps = <T extends Step<string>>(steps: readonly T[], initialStepIndex = 0) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
  const currentStep = steps[currentStepIndex];

  const stepCount = Array.from({ length: steps.length }, (_, index) => index + 1);

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return {
    currentStepIndex,
    currentStep,
    handleNextStep,
    handlePrevStep,
    stepCount,
  };
};
