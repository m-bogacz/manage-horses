import React, { useState } from 'react';
import { STEP_TYPE } from '../types';

export const useSteps = () => {
  const [activeStep, setActive] = useState<STEP_TYPE>(1);

  const handlePrev = () => {
    setActive((prev) => {
      if (activeStep === 1) return 1;
      return (prev - 1) as STEP_TYPE;
    });
  };

  const handleNext = () => {
    setActive((prev) => {
      if (activeStep === 3) return 3;
      return (prev + 1) as STEP_TYPE;
    });
  };

  return { activeStep, handlePrev, handleNext };
};
