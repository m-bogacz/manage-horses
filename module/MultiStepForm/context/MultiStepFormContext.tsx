import { Step, useSteps } from '@/hooks/useSteps';
import { createSafeContext } from '@/lib/createSafeContext';
import { ReactNode } from 'react';
import { steps } from '../components/form/helpers';

type StepNames = (typeof steps)[number]['name'];

interface ReturnValueType {
  currentStepIndex: number;
  currentStep: Step<StepNames>;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  stepCount: number[];
}

const [useMultiStepFormContext, MultiStepFormContextProvider] = createSafeContext<ReturnValueType>();

const MultiStepFormProvider = ({ children }: { readonly children: ReactNode }) => {
  const { currentStep, currentStepIndex, handlePrevStep, handleNextStep, stepCount } = useSteps(steps);

  const value = { currentStep, currentStepIndex, stepCount, handlePrevStep, handleNextStep };

  return <MultiStepFormContextProvider value={value}>{children}</MultiStepFormContextProvider>;
};

export { useMultiStepFormContext, MultiStepFormProvider };
