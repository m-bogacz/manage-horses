import { createSafeContext } from '@/lib/createSafeContext';
import { ReactNode } from 'react';
import { STEP_TYPE } from '../types';
import { useSteps } from '../stepBar/useSteps';

interface MultiStepFormProviderProps {
  readonly children: ReactNode;
}

interface ReturnValueType {
  activeStep: STEP_TYPE;
  handlePrev: () => void;
  handleNext: () => void;
}

const [useMultiStepFormContext, MultiStepFormContextProvider] = createSafeContext<ReturnValueType>();

const MultiStepFormProvider = ({ children }: MultiStepFormProviderProps) => {
  const { activeStep, handlePrev, handleNext } = useSteps();

  const value = { activeStep, handlePrev, handleNext };

  return <MultiStepFormContextProvider value={value}>{children}</MultiStepFormContextProvider>;
};

export { useMultiStepFormContext, MultiStepFormProvider };
